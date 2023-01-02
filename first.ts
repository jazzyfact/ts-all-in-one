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

//enum
//변수들을 하나의 그룹으로 묶고 싶을 때
const enum EDirection {
  Up = 3, //0
  Down = 2, //1
  Left = 4, //2
  Right = 5, //3
}
const a = EDirection.Up;
const c = EDirection.Left;

// as const => 이 값들을 상수로 사용하겠다
const ODirection = {
  Up: 0,
  Down: 1,
  Left: 2,
  Right: 3,
} as const;

EDirection.Up;

// Using the enum as a parameter
//dir => 4개 중에 하나여야 함
function walk(dir: EDirection) {}

//key만 가져오기
const obj = { a: "123", b: "hello", c: "world" };
type key = keyof typeof obj; //타입으로 사용하고 싶으면 typeof 사용해야함

//value만 가져오기
const obj = { a: "123", b: "hello", c: "world" } as const;
type key = typeof obj[keyof typeof obj]; //타입으로 사용하고 싶으면 typeof 사용해야함

// It requires an extra line to pull out the keys
type Direction = typeof ODirection[keyof typeof ODirection];
function run(dir: Direction) {}

walk(EDirection.Left);
run(ODirection.Right);

// 타입 A를 정의
type A = { a: string };
const a: A = { a: "hello" };

//객체지향프로그래밍을 원할 때
interface B {
  a: string;
}
const b: B = { a: "hello" };

//union
//또는, 단점은 타입추론이 제대로 되지 않는다
//처음 타입을 잘 만들어놔야 함
function add(x: string | number, y: string | number): string | number {
  return x + y;
}
add(1, 2);
add("1", "2");
add(1, "2");

type A = {
  a: string;
};
type B = {
  b: string;
};

const aa: A | B = { a: "hello", b: "world" };
const bb: A & B = { a: "hello", b: "world" };

type Animal = { breath: true };
type Poyuryu = Animal & { bread: true };
type Human = Poyuryu & { think: true };

const zerocho: Human = { breath: true, bread: true, think: true };

interface A {
  breate: true;
}

interface B extends A {
  bread: true;
}

const b: B = ({ breath: true } = { breath: true, bread: true });
const zerocho: Human = { breath: true, bread: true, think: true };

//넓은 타입과 좁은 타입
type A = string | number;
type B = string; // 좁은 타입에서는 넓은 타입에 대입이 가능 하지만 넓은 타입에서는 좁은 타입에 대입이 불가능

type C = string & number;

//객체는 상세(구체적일수록 좁은 타입)
type A = { name: string };
type B = { age: number };

type AB = A | B;
type C = { name: string; age: number };

const ab: AB = { name: "zerocho" };
const c: C = { name: "zerocho", age: 29, married: false }; //잉여 속성 검사
