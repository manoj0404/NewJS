/* Event Propagation (Event Bubbling and Event Capturing)
Higher Order Function
Callback Function
Function Curring (we will see after Async JS section)
CallBack Hell
AJAX call using XMLHttprequest 
BONUS Section JSON
Fetch API
Promies
Async-Await
Error Handling  in JS*/

// create calculator
const add = (a, b) => {
  return Math.abs(a + b);
};
//console.log(add(7,9));

// const subs = (a,b) =>{
//     return Math.abs(a-b);
// }
// console.log(subs(7,9));

// const mul = (a,b) => {
//     return a*b;
// }
// console.log(mul(7,9));

// const divid= (a,b) =>{
//     return a%b;
// }
// console.log(divid(7,9));

// we can use operator

// const calculator = (no1,no2,operator)=> {
//    return operator(no1,no2);
// }
// const a1= calculator(5,4,add);
// console.log(a1);

/* Asynchronous  javascript Programming*/

// Hoisting in javascript //
// we have a reation phase and execution phase.
// Hoisting in js is a mechanism where var and fun
// declaration are moved to the top of of their scope before the code execute.

// console.log(myname);
// var myname = "thape";
// console.log(myname)



// var myname;
// console.log(myname);
// myname = "thape";
// console.log(myname)

// Scope Chain and Lexical Scoping
 // resolve value of variable.

 // Closures in js
 