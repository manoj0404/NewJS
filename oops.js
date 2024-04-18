

// Object
// let biodata = {
//     myname :{
//         realname: "Manoj",
//         channelname:"tutoril"
//     },
//     myage:26,
//     getdata : function() {
//         console.log(`My name is ${biodata.myname.realname} and age is ${biodata.myage}`);
//     }
// }


// console.log(biodata.getdata());


// What is this object ?

// The defination of "this" object is that contain the current context. it has diff value depen where is place.
// console.log(this);  global object curr context

// const obj = {
//     myage : 28,
//     myname(){
//         console.log(this);
//     }
// }
// obj.myname(); // change current context window to obj.

// const obj = {
//     myage : 28,
//     myname:() =>{
//         console.log(this);
//     }
// }
// obj.myname(); // window



// OBJECT Properties // 


// 1.we can use Dynamic Properties 
// let myname = "manoj";
// const mybio = {
//  [myname] : "hello everyone",
//  26:"is my age"
// }
// console.log(mybio);

// 2. no need to write key and value ,if both are same



// Spread Operator
// const colors = ['red','green','blue','white','pink']

// const newcolors = [...colors,'yellow','black']
// console.log(newcolors);



