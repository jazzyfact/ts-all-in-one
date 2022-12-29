const a = "5";
const b = 5;
const c = true;
const d = undefined;
const e = null;
const g = null;
const h = true; //애니를 쓰면 의미가 없다

function add(x: number, y: number): number {
  //매개변수 뒷자리가 리턴값 작성하는 곳
  return x + y;
}
interface ADD {
  (x: number, y: number): number;
}
type Add = (x: number, y: number) => number;
const plus: (x: number, y: number) => number = (x, y) => x + y; //타입을 지워도 완벽한 자바스크립트 코드여야 한다.

const ff: true = true;
const gg: 5 = 5;

const obj = { lat: 37.5, lon: 127.5 };
const arr: string[] = ["123", "456"];
const arr3: number[] = [123, 456];
//길이가 고정된 배열, 튜플
const arr4: [number, number, string] = [123, 456, "hello"];
const arr2: Array<number> = [123, 456];
