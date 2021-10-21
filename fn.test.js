const { test, expect } = require("@jest/globals");
const exp = require("constants");
const fn = require("./fn");

test("1은 1이다.", () => {
  expect(1).toBe(1);
});

test("2 더하기 3은 5다.", () => {
  expect(fn.add(2, 3)).toBe(5);
});

test("3 더하기 3은 5가 아니다.", () => {
  expect(fn.add(3, 3)).not.toBe(5);
});

test("2 더하기 3은 5다.", () => {
  expect(fn.add(2, 3)).toEqual(5);
});

//toBeCloseTo 소수 계산 비교
test("0.1 더하기 0.2는 0.3이다.", () => {
  expect(fn.add(0.1, 0.2)).toBeCloseTo(0.3);
});

test("이름과 나이를 전달 받아 객체를 반환한다.", () => {
  expect(fn.makeUser("Mike", 30)).toEqual({
    name: "Mike",
    age: 30,
  });
});

test("이름과 나이를 전달 받아 객체를 반환한다.", () => {
  expect(fn.makeUser("Mike", 30)).toStrictEqual({
    name: "Mike",
    age: 30,
    gender: undefined,
  });
});

// toBeNull
test("null은 null입니다.", () => {
  expect(null).toBeNull();
});

// toBeUndefined
test("undefined를 판별합니다.", () => {
  expect(undefined).toBeUndefined();
});

// toBeDefined
test("일반적인 문자열은 Defined 상태입니다.", () => {
  expect("hello").toBeDefined();
});

// toBeTruthy
test("0은 false 입니다.", () => {
  expect(fn.add(1, -1)).toBeFalsy();
});
// toBeFalsy
test("비어있지 않은 문자열은 true 이다.", () => {
  expect(fn.add("hello", "world")).toBeTruthy();
});

//toBeGreaterThan 크다
//toBeGreaterThanOrEqual 크거나 같다.
//toBeLessThan 작다
//toBeLessThanOrEqual 작거나 같다.
test("ID는 10자 이하여야 한다", () => {
  const id = "shinsw627";
  expect(id.length).toBeLessThanOrEqual(10);
});

//toBe 일치
test("비밀번호는 4자리만 가능하다.", () => {
  const pw = "1234";
  expect(pw.length).toBe(4);
});

//toMatch 문자열 확인
test("Hello World 에 h라는 글자가 있는지 확인", () => {
  expect("Hello World").toMatch(/h/i);
});

// toContain
test("유저 리스트에 Mike가 있는가?", () => {
  const user = "Mike";
  const userList = ["Tom", "Jane", "Kai", "Mike"];
  expect(userList).toContain(user);
});

test("에러가 나는지 확인", () => {
  expect(() => fn.throwErr()).toThrow("xx");
});
