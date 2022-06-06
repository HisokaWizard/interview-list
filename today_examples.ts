// 06/06/2022

// type A = {
//   a: string;
//   c: boolean;
// };

// type B = {
//   b: number;
//   c: boolean;
// };

// type Z = {
//   d: number;
//   c: string;
// };

// type C = A & B; // a - require, b - require, c - require
// type D = A | B; // c - requre, b | a - require
// type X = A & Z; // X - never because of types can't select correct type of field - c
// type Y = B & Z; // Y - a & c - reuqire | d & c - require with correct types

type A = {
  a: string;
  c: boolean;
};

type B = {
  b: number;
  c: boolean;
};

type Z = {
  d: number;
  c: string;
};

type C = A & B;
type D = A | B;
type X = A & Z;
type Y = B & Z;

/////////////////////////

// interface DifferentField {
//   type: string;
//   text: string;
//   flag: boolean;
//   value: number;
// }

// type NewType1 = Omit<DifferentField, 'type' | 'value'>; text + flag
// type NewType2 = Omit<DifferentField, 'flag' | 'value'>; flag + value

interface DifferentField {
  type: string;
  text: string;
  flag: boolean;
  value: number;
}

type NewType1 = Omit<DifferentField, 'type' | 'value'>;
type NewType2 = Pick<DifferentField, 'flag' | 'value'>;

////////////////////////////////////////////////
/// REACT

// export const ComponentAAA = memo(() => {
//   const [value, setValue] = useState(0);

//   const mathOperations = useMemo(() => (value <= 0 ? value : value * 2 + 1000 / value), [value]);

//   const increaseV = () => {
//     setValue((prev) => ++prev);
//   };

//   return (
//     <div>
//       <div>Result: {mathOperations}</div>
//       <button onClick={increaseV}>Increase V</button>
//     </div>
//   );
// });

const Component = () => {
  const [v, setV] = useState(0);

  const mathOperations = v * 2 + 1000 / v;

  const increaseV = () => {
    setV(v++);
  };

  return (
    <div>
      <div>Result: {mathOperations}</div>
      <button onClick={increaseV}>Increase V</button>
    </div>
  );
};
