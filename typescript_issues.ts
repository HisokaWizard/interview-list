// 1. ConvertValueToExcelNumberFormat (120 / 123.54 / 0 / null / undefined) => num,num (155,30)

export const convertValueToExcelNumberFormat = (value: number): string => {
  if (!value) return '0,00';
  const dotPosition = value.toString().search(/[.]/g);
  if (dotPosition !== -1) {
    return value
      .toString()
      .replace('.', ',')
      .substring(0, dotPosition + 3);
  }
  return value + ',00';
};

// 2. Hook which has param value and must filter external array if param change
type DependType = {
  code: string;
  value: string;
  dependValue: string;
};

export const useFilterDependencyArray = (value: string, key: keyof DependType) => {
  const array: DependType[] = [
    { code: '1', value: '1', dependValue: '11' },
    { code: '2', value: '2', dependValue: '22' },
    { code: '3', value: '3', dependValue: '33' },
    { code: '3.5', value: '3.5', dependValue: '33' },
    { code: '3.99', value: '3.99', dependValue: '33' },
  ];

  return array.filter((it) => it?.[key] === value);
};

// 3. Function-service to convert one cureency to other and return correct value in necessary
// currency
// input: {value: number, currentCurrency: Iso, necessaryCurrency: Iso}
// output: {value: number}

type ISO = 'RUB' | 'USD' | 'EUR' | 'BTC';
const serverConverterURLconstructor = (value: number, currentCur: ISO, necessaryCur: ISO) =>
  `https://currency-converter.com/?value=${value}&current=${currentCur}&necessary=${necessaryCur}`;

export const currencyConverter = async (value: number, currentCur: ISO, necessaryCur: ISO) => {
  if (!value || !currentCur || !necessaryCur) return new Error('Need all params');
  try {
    const result = await fetch(serverConverterURLconstructor(value, currentCur, necessaryCur));
    const necessaryValue = await result.json();
    return necessaryValue as number;
  } catch (error) {
    return error as Error;
  }
};

/**
 * Создать сущность Machine с несколькими полями(масса, мощность(power), цвет, топливо(fuel))
 * Топливо должно быть типом состоящим из 3 вариантов(дизель(diesel), бензин(petrol), газ(gas)
 *
 * Создать сущность Car наследник сущности Machine и добавить новые поля (марка, скорость, кондиционер(airConditioner)
 *
 * Создать сущность Bus наследник сущности Car и удалить из типа поля марка и кондиционер,
 * также добавить новое поле вместимость(capacity)
 *
 * Создать сущность ElectroBus наследник сущности Car иным способом от предыдущего наследования +
 * добавить поле specialNumber
 *
 * Создать сущность ElectroBusListType - представляющую собой мапу(ключ-значение), где ключ - произвольная строка, а значение - сущность
 * ElectroBus из которой удалены capacity, specialNumber, color
 * */

type Fuel = 'diesel' | 'petrol' | 'gas';

interface Machine {
  mass: number;
  power: number;
  color: string;
  fuel: Fuel;
}

interface Car extends Machine {
  mark: string;
  speed: number;
  airConditioner: boolean;
}

interface Bus extends Omit<Car, 'mark' | 'airConditioner'> {
  capacity: number;
}

type ElectroBus = Bus & { specialNumber: number };

type ElectroBusListType = Record<string, Pick<ElectroBus, 'capacity' | 'specialNumber' | 'color'>>;
