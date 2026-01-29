// 1.
function sayHello() {
  console.log("Hello, JS!");
}

// 2.
function greet(name) {
  console.log("Hello, " + name);
}

// 3.
function greet(name) {
  if (name) {
    return "Hello, " + name;
  } else {
    return "Hello, stranger";
  }
}

// 4.
function square(x) {
  return x * x;
}

// 5.
function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

// 6.
function min(a, b) {
  if (a < b) {
    return a;
  } else {
    return b;
  }
}

// 7.
const double = (x) => x * 2;

// 8.
function apply(fn, x) {
  return fn(x);
}

// 9.
function filterByLength(words, minLen) {
  return words.filter(word => word.length > minLen);
}

// 10.
function toUpperArray(arr) {
  return arr.map(str => str.toUpperCase());
}

// 11.
function power(base, exp = 2) {
  return Math.pow(base, exp);
}

// 12.
function isEven(n) {
  return n % 2 === 0;
}

// 13.
function floorNumber(n) {
  return Math.floor(n);
}

// 14.
function inRange(x, a, b) {
  return x >= a && x <= b;
}

// 15.
function repeatText(text, times) {
  let result = "";
  for (let i = 0; i < times; i++) {
    result += text;
  }
  return result;
}

//Примеры использования
sayHello();
greet("Alice");
console.log(greet());
console.log(square(5));
console.log(sumArray([1, 2, 3, 4]));
console.log(min(10, 5));
console.log(double(7));
console.log(apply(n => n + 1, 5));
console.log(filterByLength(["hi", "hello", "world"], 3));
console.log(toUpperArray(["hi", "hello", "world"]));
console.log(power(3));
console.log(power(2, 3));
console.log(isEven(4));
console.log(isEven(7));
console.log(floorNumber(4.9));
console.log(floorNumber(-2.1));
console.log(inRange(5, 1, 10));
console.log(inRange(0, 1, 10));
console.log(repeatText("ha", 3));
console.log(repeatText("JS", 1));
