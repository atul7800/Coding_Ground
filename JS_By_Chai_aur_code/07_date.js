// let myDate = new Date();
// console.log(myDate.toString());
// console.log(myDate.getTime());
// console.log("0: "+myDate.toISOString());
// console.log("1: "+myDate.toJSON());
// console.log("2: "+myDate.toDateString());
// console.log("3: "+myDate.toLocaleDateString());
// console.log("4: "+myDate.toLocaleString());
// console.log("5: "+myDate.toLocaleTimeString());
// console.log("6: "+myDate.toTimeString());
// console.log(myDate.getDay());
// console.log(myDate.getMinutes());
// console.log(myDate.getMonth());
// console.log(myDate.getFullYear());

let a = 10;
let b = a;
console.log(`a = ${a} b = ${b}`);
b = ++b;
console.log(`a = ${a} b = ${b}`);

let arr1 = [1, 2, 3, 4, 5];
let arr2 = arr1;
arr2.pop();
arr1.push(11);
console.log(`arr1 = ${arr1} arr2 = ${arr2}`)