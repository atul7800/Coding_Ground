let myMap = new Map();
myMap.set('Name', 'Atul')
myMap.set('city', 'Bangalore')
myMap.set('pin', 560055)
myMap.set('myPin', 560054) //duplicate key are not allowed, value can be duplicate

/*  for of with map */
// console.log(myMap)

// for (let elements of myMap){
//   console.log(elements)
// }

// for (let [key, value] of myMap){
//   console.log(`Key = ${key}, value = ${value}`)
// }

/* for of with string */
let myString = "Gprakhpur";

// for (let letters of myCity){
//   console.log(letters);
// }

/*for of with array */
let skills = ["js", "react", "node", "restAPI", 2024];
// for (let skill of skills){
//   console.log(`${skill}`)
// }

/* for of with object */
let myObject = {
  'movie': "Hobbit",
  'year' : "2020",
  "language": "English"
}

// "for of" doesn't work with objects
// for (let movieDetails of movieObj){
//   console.log(movieDetails)
// }

//with objects use "for in" | "in" returns key not value | "in" can't be used with map
// for (let movieDetails in movieObj){ 
//   console.log(`${movieDetails} : ${movieObj[movieDetails]}`)
// }

/*for in with array */
// for (let skill in skills){
//   console.log(`${skill}`)
// }

/* ++++++++++++++++++++++++"FOR EACH LOOP"+++++++++++++++++++++++++ */

// skills.forEach(element => {
//   console.log(element)
// });

skills.forEach((element) => {
  console.log(element)
});

// myMap.forEach(keyValue => {
//   console.log(keyValue);
// })







/* ------------------------Notes------------------------- */

/*  
1) Use for of loop with map, array, and string.
2) Use for in loop with objects
3)

*/

