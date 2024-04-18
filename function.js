/* 
1.funcrion defination
2.calling function
3.function parameter
4.function argument
5.function expression
6.return keyword
7.Anonymous function */


// function//
// function sum(a,b){
//  var sum = a+b;
//  console.log(sum);
// }

// sum(5,6);

/* fun argu vs fun para 
para names listed in the fun defi
argu values pass in function
*/

// return //
// function sum(a,b){
//      return a+b;

// }
// var f = sum(5,15);   // function Expression //
// console.log(f);


/// Anonymous Function   ///

// var funExp = function(a,b){
//     return a+b;
// }
// console.log(funExp(5,5));


// var funExp = function(a,b){
//     return a+b;
// }
// var sum = funExp(5,5);
// var sum1 = funExp(15,3);
// console.log(sum1>sum1);


///   FAT ARROR FUNCTION
// normal way of writing function

// console.log(sum());

// function sum(){
//     let a=10,b=4;
//     let sum = a+b;
//     return `the sum id ${sum}`;
// }

//How to convert into fat arror function

// const sum = () => {   // fat arrow function
//     let a=10,b=4;
//     let sum = a+b;
//     return `the sum id ${sum}`;

// }
// console.log(sum());