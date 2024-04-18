let myMap = new Map();
myMap.set('Name', 'Atul')
myMap.set('city', 'Bangalore')
myMap.set('pin', 560055)
myMap.set('myPin', 560054) //duplicate key are not allowed, value can be duplicate

/* map */
// console.log(myMap)

// for (let elements of myMap){
//   console.log(elements)
// }

// for (let [key, value] of myMap){
//   console.log(`Key = ${key}, value = ${value}`)
// }

/* string */
// let myCity = "Gprakhpur";

// for (let letters of myCity){
//   console.log(letters);
// }

/* object */
let movieObj = {
  'movie': "Hobbit",
  'year' : "2020",
  "language": "English"
}

// for (let movieDetails of movieObj){ //won't work with objects
//   console.log(movieDetails)
// }

//for objects use "in" | "in" returns key not value | "in" can't be used with map
// for (let movieDetails in movieObj){ 
//   console.log(`${movieDetails} : ${movieObj[movieDetails]}`)
// }


/* array */
let skills = ["js", "react", "node", "restAPI", 2024];
// for (let skill of skills){
//   console.log(`${skill}`)
// }

for (let skill in skills){
  console.log(`${skill}`)
}
