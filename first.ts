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

let aa = 123;
aa = "hello" as unknown as number; //앞의 타입을 강제로 바꿔줌

const ff: true = true;
const gg: 5 = 5;

const obj = { lat: 37.5, lon: 127.5 };
const arr: string[] = ["123", "456"];
const arr3: number[] = [123, 456];
//길이가 고정된 배열, 튜플
const arr4: [number, number, string] = [123, 456, "hello"];
const arr2: Array<number> = [123, 456];

try {
  const array: string[] = [];
  array.push("hello");
} catch (error) {
  error;
}

// 최대한 ! 대신 if를 쓸 것, 오타 및 불완전한 상황에 대해 대비가 가능
const head = document.querySelector("#head")!;
console.log(head);

const head = document.querySelector("#head");
if (head) {
  head.innerHTML = "hello world";
  console.log(head);
}

//소문자 string 사용!
const a: string = "hello";
const b: String = "hell";

//템플릿 리터럴 타입이 존재(유니언 등 사용 가능)
type World = "world" | "hell";
const a: World = "world";

const b = `hello ${a}`;
// type Greeting = "hello world"
type Greeting = `hello ${World}`;
const c: Greeting = "hell";

//배열
let arr: string[] = [];
let arr2: Array<string> = [];
function rest(a, ...args: string[]) {
  console.log(a, args); // 1,2,3,
}
rest("1", "2", "3");

//튜플
const tuple: [string, number] = ["1", 1];
tuple[2] = "hello";
tuple.push("hello");
