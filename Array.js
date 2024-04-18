// /*  Travaersal of array
//  Searching and filter in an Array
//  How to sort and compare an array
//  How to Insert ,Add,Replace and Delete Element in Array(CRUD)
//  Map(),Reduce(),Filter()  */

// // Traversal 

//   var name  = ['manoj','sail','manish',7,true];   // arr are propotype of the class
// //  console.log(name.length);

//  // ****for loop****
// //  for(var i=0;i<name.length;i++){
// //     console.log(name[i]);
// //  }

//  //****for in loop ****
// // for(element in name){
// //     console.log(element);
// // }

// //****for of loop****
// for(ele of name){
//     console.log(ele);
// }



// //     ****for each loop****
// // name.forEach(function(ele,index,array){
// // console.log(ele+" index:"+ index);
// // });


// // Fat Arrow Function 
// //  name.forEach((element,index,array) => {
// //     console.log(element+" index:"+ index);
// //  });

// //  name.forEach((ele,index,array)=>{
// //     console.log(ele + " index: " +index);
// //  });




// /* Searching and filter in an array */
// // Array.prototype.indexOf()

// //var name  = ['manoj','sail','manish',7,true,'manoj']; 
// // console.log(name.indexOf(7)); // from index 3 seaching not match return -1

// // console.log(name.lastIndexOf(7));  // backword search

// // console.log(name.includes(7));          // element contain in array give boolean value

// //* filter *// 
// // const array1 = [1,2,3,4,5];

// // let newarr = array1.filter((curele,index,array)=>{
// //        return curele>3;
// // });

// // console.log(array1);
// // console.log(newarr);

// //  find function  
// // sort and compare

// /*  CRUD OPERATION */
// // push :- add ele at last return new length

// /*const animal = ['horse','dog','cat'];
// animal.push('chicken');
// console.log(animal);

// animal.push('chicken','tiger','lion');
// console.log(animal);

// // unshift : - add ele at begining // 
// const animal = ['horse','dog','cat'];
// // animal.unshift('goat');
// // console.log(animal);

// const number = [1,2,3,4];
// number.unshift(4,6);
// console.log(number);

// // * pop * //   :- remove element from last position
// const number = [1,2,3,4];
// console.log(number.pop());
// console.log(number);  */


// //* shift *//
// // const number = [1,2,3,4];
// // console.log(number.shift());
// // console.log(number);

// //* Exercise *//

// // const month = ['jan','march','April','june','july'];
 
// // * MAP *//                              return newarray after executing somthing, without muting the original array
//                                         // # we can uase chainable along with map() such as reduce(),sort(),filter();

// //  const array1 = [1,2,3,4,5];

// // let newarr = array1.map((curele,index,array)=>{
// //        return curele>3;
// // });

// // console.log(array1);
// // console.log(newarr);

// // const array1 = [1,2,3,4,5];
// // let newarr = array1.map((element,index,array)=>{
// //     return `Index no = ${index} and the value is= ${element} belong to ${array}`;
// // });
// // console.log(newarr); 


// // * EXERCISE *// 
// /* const array1 = [25,36,49,64];
// let arr  = array1.map((ele)=>{
//     return Math.sqrt(ele);
// });
// console.log(arr);  

// let arr = [2,3,4,6,8];

// let arr2 = arr.map((ele)=>{
//     return 2*ele;
// }).filter((ele)=>{
//     return ele>10;
// });
// console.log(arr2);


// let arr2 = arr.map((ele)=> 2*ele).filter((ele)=> ele>10);   // fat array function
// console.log(arr2);  


// //*  REDUCE METHOD  ***
// // convert 3d or 2d into single diamentional array //

// let arr = [2,4,6,8];
// let sum = arr.reduce((accumulator,ele,index,array)=>{
//     return accumulator+=ele;
// });
// console.log(sum); */

// // const arr = [
// //     ['zone1','zone2'],
// //     ['zone3','zone4'],
// //     ['zone5','zone6'],
// //     ['zone7','zone8'],
// // ];

// // let flatarr = arr.reduce((accum,ele)=>{
// //     return accum.concat(ele);
// // });

// // console.log(flatarr);   







