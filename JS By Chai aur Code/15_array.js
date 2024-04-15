// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = arr1.toString();
// console.log(arr2);
// console.log(typeof arr2);
// let arr3 = arr1.join();
// console.log(arr3);
// console.log(typeof arr3);

// let marvel = ["IronMan", "BlackPanther"]
// let dc = ["BatMan", "WonderWomen"]
// let marvel_dc = marvel.concat(dc)
// console.log(marvel_dc)
// console.log(typeof(marvel_dc))
// console.log(marvel)

let arr_1 = [11, 12, [13, 14], 15, [16, 17], 18, [19, [20, [21, 22], 21]]]
let newArr = arr_1.flat(2);
console.log(newArr)