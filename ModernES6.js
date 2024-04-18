// Modern ES6

// function biodata(){          //    function scope it valid all block of function
//     var myfirstName = "manoj";
//     console.log(myfirstName);

//     if(true){
//         var mylirstName = "chaudhari";
//         console.log('inner ' + mylirstName);
//         console.log('inner '+ myfirstName);

//     }
//     console.log('inner Outer '+mylirstName);
// }

// biodata();


// function biodata(){           // let and const :- block scope  it is valid within block
//     var myfirstName = "manoj";
//     console.log(myfirstName);

//     if(true){
//         var mylirstName = "chaudhari";
//         console.log('inner ' + mylirstName);
//         console.log('inner '+ myfirstName);

//     }
//     console.log('inner Outer '+mylirstName);
// }

// biodata();

/* Template literals */                                          //2
// let num = 8;
// for(let i=1;i<10;i++){
//     console.log(`${num}*${i}=${num*i}`)
// }



// Default Parameter                                          //3
// function mult(a,b=6){
//     return a*b;
// }
// console.log(mult(5));



// Fat Arrow Function    // first define fun than called
// const sum = () =>{
//     let a=5,b=6;
//     let sum = a+b;
//     return `the sum of the two number is ${sum}`;
// }
// console.log(sum());