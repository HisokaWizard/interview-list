// 1. Form a component with some other component -> struct and complete root component
// Tile with header, action for edit, left panel with params, right panel with canvas
// Logic Tile passive, to make it active need to push on the edit action and action stay cancel edit
// in left panel we have three input number - 0-255 for change color in the canvas background real /// time

// Реализовать компонент: Tile/Page с header, левой панелью и правой панелью
// * Header - содержит заголовок и actions (элемент переключающий в левой панели inputs из readonly
// в edit режим)
// * Левая панель - 3 inputs для ввода значения от 0 до 255 для формирования цвета rgb
// * Правая панель - canvas, который реагирует на изменение любого из input и меняющий цвет фона

const useState = (value: any) => {
  return [value, (_value: any) => {}];
};

const useCallback = (foo: any, deps: any[]) => {
  return foo;
};

const useRef = (ref: any) => {
  return ref;
};

const useEffect = (foo: any, deps: any[]) => {};

const memo = (prop: any) => {
  return prop;
};

const useMemo = (callback: any, deps: any[]) => {
  return callback();
};

interface TileProps {
  title: string;
  height: number;
  width: number;
}

export const Tile = ({ title, height, width }: TileProps) => {
  const [edit, setEdit] = useState(false);
  const [color, setColor] = useState('');

  const toggle = useCallback(() => {
    setEdit(!edit);
  }, [edit]);

  const onColorHandler = useCallback((colorTemplate: string) => {
    setColor(colorTemplate);
  }, []);

  return (
    <div style={{ height, width, border: '1px solid blue' }}>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <h2>{title}</h2>
        <button onClick={toggle}>{!edit ? 'Edit' : 'Cancel edit'}</button>
      </div>
      {edit && (
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <LeftPanel onColorHandler={onColorHandler} />
          <RightPanel color={color} />
        </div>
      )}
    </div>
  );
};

interface LeftPanelProps {
  onColorHandler: (color: string) => void;
}

const LeftPanel = ({ onColorHandler }: LeftPanelProps) => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  const template = (red: number, green: number, blue: number) => `rgb(${red}, ${green}, ${blue})`;

  const onRedChange = useCallback(
    (event) => {
      const color = event?.target?.value as number;
      setRed(color);
      onColorHandler(template(color, green, blue));
    },
    [green, blue],
  );

  const onGreenChange = useCallback(
    (event) => {
      const color = event?.target?.value;
      setGreen(color);
      onColorHandler(template(red, color, blue));
    },
    [red, blue],
  );

  const onBlueChange = useCallback(
    (event) => {
      const color = event?.target?.value;
      setBlue(color);
      onColorHandler(template(red, green, color));
    },
    [red, green],
  );

  return (
    <div>
      <div>
        <input type={'number'} value={red} min={0} max={255} onChange={onRedChange} />
      </div>
      <div>
        <input type={'number'} value={green} min={0} max={255} onChange={onGreenChange} />
      </div>
      <div>
        <input type={'number'} value={blue} min={0} max={255} onChange={onBlueChange} />
      </div>
    </div>
  );
};

interface RightPanelProps {
  color: string;
}

export const RightPanel = ({ color }: RightPanelProps) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    context.fillStyle = color;
    context.fillRect(0, 0, context.canvas.width, context.canvas.height);
  }, [color]);

  return <canvas ref={canvasRef} id='canvas' width={300} height={200} />;
};

// 5. Componet which render some data with correct and optimal rendering
// Every prop has special handler before render
// площадь круга / длина окружности / площадь трапеции
// radius => радиус
// a => основание
// b => шапка
// h => высота

interface Props {
  radius: number;
  a: number;
  b: number;
  h: number;
}

export const GeometricFormulas = memo(({ radius, a, b, h }: Props) => {
  const [count, setCount] = useState(0);

  const circleSquare = useMemo(() => Math.PI * Math.pow(radius, 2), [radius]);

  const curcumference = useMemo(() => 2 * Math.PI * radius, [radius]);

  const trapezoidSquare = useMemo(() => ((a + b) / 2) * h, [a, b, h]);

  const changeSomething = useCallback(() => {
    setCount((prev) => prev++);
  }, []);

  return (
    <div onClick={changeSomething}>
      <div>1. Circle square: {circleSquare}</div>
      <div>2. Curcumference: {curcumference}</div>
      <div>3. Trapezoid square: {trapezoidSquare}</div>
      <div>4. Just counter for clicker: {count}</div>
    </div>
  );
});

/**
 * Huge code for optimization
 * Hook which create rows content for table
 * */
import { useDidProductType, CurrentPortfolioDidDealDto, useGetDesks, Marker } from '@/any-place';

export const useDealsTableRows = (
  updateTable: () => void,
  data: Partial<CurrentPortfolioDidDealDto>[] = [],
) => {
  const didProductTypes = useDidProductType();
  const { desks } = useGetDesks();

  return useMemo(() => {
    return data?.map((row, index) => ({
      bookingBalanceCodes: row?.bookingBalanceCodes?.join(', ') ?? '',
      customerNumber: row?.customerNumber ?? '-',
      dealObjectId: row?.dealObjectId ?? '-',
      deskCode: {
        render: () => {
          const currentDesks = desks
            .filter((it) => (row?.deskCode?.split(',') ?? []).includes(it.code))
            ?.map((it) => it.name)
            .join(',');
          return currentDesks ? (
            <Marker
              size='sm'
              label={currentDesks}
              dataTestId={'DeskCodeField'}
              isTextBage={false}
            />
          ) : (
            '-'
          );
        },
      },
      didProductCodes: {
        render: () =>
          didProductTypes
            .filter((it) => (row?.didProductCodes ?? []).includes(it.code))
            ?.map((it) => it.name)
            .join(',') ?? '',
      },
      directorName: row?.directorName ?? '-',
      endDate:
        typeof row?.endDate === 'string' ? row?.endDate.split('-').reverse().join('.') : undefined,
      financialCalculationInExcel:
        row?.financialCalculationInExcel === undefined
          ? ''
          : row?.financialCalculationInExcel === true
          ? 'Да'
          : 'Нет',
      initialDrawDate:
        typeof row?.initialDrawDate === 'string'
          ? row?.initialDrawDate.split('-').reverse().join('.')
          : undefined,
      stateCode: {
        render: () =>
          row?.stateCode ? (
            <Marker
              size='sm'
              label={row?.stateCode}
              dataTestId={'StateCodeField'}
              isTextBage={false}
            />
          ) : (
            '-'
          ),
      },
      stateFinanceCode: {
        render: () =>
          row?.stateFinanceCode ? (
            <Marker
              size='sm'
              label={row?.stateFinanceCode}
              dataTestId={'StateFinanceCodeField'}
              isTextBage={false}
            />
          ) : (
            '-'
          ),
      },
    }));
  }, [data]);
};
