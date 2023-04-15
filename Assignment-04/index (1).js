console.log('Task 1');
let Arr = [1, 2, 3, 4, 5, 6,7,8,9];

function sumOfEveNo(arry) {
  let sum = 0;
  for (let i = 0; i < arry.length; i++) {
    if (arry[i] % 2 === 0) {
      sum += arry[i];
    }
  }
  return sum;
}
let result = sumOfEveNo(Arr);
console.log('Sum of even numbers');
console.log(result);

console.log('Task 2');
let Str = "Hello World";
function Vowels(str) {
  let count = 0;
  let vowels = ["a", "e", "i", "o", "u"];
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i].toLowerCase())) {
      count++;
    }
  }
  return count;
}
console.log(Str);
let result2 = Vowels(Str);
console.log(result2);

console.log('Task 3');
let Arr2 = ["Karachi", "Quetta", "Islamabad", "Peshawar"];
function Length(arry) {
  let maxLength = 0;
  for (let i = 0; i < arry.length; i++) {
    if (arry[i].length > maxLength) {
      maxLength = arry[i].length;
    }
  }
  return maxLength;
}
console.log('LOngest Length');
let result3 = Length(Arr2);
console.log(result3);

console.log('Task 4');
let Arr3 = [1, 2, 3, 4, 5,6,7,8,9];
function Avrg(arry) {
  let sum = 0;
  for (let i = 0; i < arry.length; i++) {
    sum += arry[i];
  }
  let average = sum / arry.length;
  return average;
}
console.log('Avrg Of All Numbers');
let result4 = Avrg(Arr3);
console.log(result4);

console.log('Task 5');
let Obj = {
name: "Ali",
age: 36,
city: "Karachi"
};
function Keys(obj) {
  return Object.keys(obj);
}
console.log('Keys in Objs');
let result5 = Keys(Obj);
console.log(result5);

console.log('Task 6');
let Arr4 = [
  {
  name: "Ali", age: 36
  },
  {
  name: "Ahmad", age: 14
  },
  {
  name: "Khan", age: 60
  }
];
function Values(arry, key) {
  let values = [];
  for (let i = 0; i < arry.length; i++) {
   
      values.push(arry[i][key]);
    }

  return values;
}
console.log('Values Of Keys');
let result6 = Values(Arr4, "name");
console.log(result6);

console.log('Task 7');
const arry = ["karachi", "karachi", "quetta", "lahore", "quetta", "peshawar", "islamabad", "peshawar", "islamabad"];
function Unique(arry) {
  const Obj = {};

  for (let i = 0; i < arry.length; i++) {
    Obj[arry[i]] = true;
  }

  const Arr4 = [];

  for (const prop in Obj) {
    Arr4.push(prop);
  }

  return Arr4;
}
console.log('Unique Strings');
const Arr5 = Unique(arry);
console.log(Arr5);

console.log('Task 8');
const arry2 = [1, 2, 3, 4, 5,6,7,8,9];
function productNo(arry2) {
  let product = 1;

  for (let i = 0; i < arry2.length; i++) {
    product *= arry2[i];
  }
  return product;
}
console.log('Product Numbers');
const product = productNo(arry2);
console.log(product);

