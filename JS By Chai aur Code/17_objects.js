let obj1 = {1:"one", 2:"two"}
let obj2 = {3:"three", 4:"four"}

//without {} as parameter, no sperate obj is getting created, instead Obj1 will get modified
// let combinedObj1 = Object.assign(obj1, obj2)
// console.log(combinedObj1)
// console.log(obj1)

//adding {} as parameter will create a new object
// let obj3 = {5:"five", 6:"six"}
// let obj4 = {7:"seven", 8:"eight"}
// let combinedObj2 = Object.assign({}, obj3, obj4)
// console.log(combinedObj2)
// console.log(obj3)

//simple methode to concatinate objects
let obj5 = {9:"nine", 10:"ten"}
let obj6 = {11:"eleven", 12:"twelve"}
let combinedObj3 = {...obj5, ...obj6}
console.log(combinedObj3)
console.log(obj5)