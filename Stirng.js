/*  // STRING //
   1.Escape character
   2.Finding a string in a string
   3.searching for a string in astring 
   4.Extracting string parts
   5.Replacing string content 
   6.Extracting string charaacter
   7.other useful method  

let myname = "manoj chaudhari";
let mychannal = 'zee tv';

let ab = new String("thapa tecnical");
console.log(myname);
console.log(mychannal.length);
console.log((ab));   


// FINDING A STRING IN A STRING // 1.indexOf() 2.lastIndexOf() 

const name = 'i am the manoj chaudhari';
console.log(name.indexOf("manoj"));

//*  SEARCH METHOD */
// const name = 'i am the manoj chaudhari';
// let a = name.search("manoj");
// console.log(a);

// Extraction of string   1.slice(start,end) 2.substring(start,end) 3.substr(start,length)

// var str = "Apple,Banana,Kiwi";
// let res = str.slice(0,5); //extract and return new string
// console.log(res);

// substing //  // it does not contain negative index

// var str = "Apple,Banana,Kiwi";
// let res = str.substring(0,5);
// console.log(res);

// substr // start + length

// var str = "Apple,Banana,Kiwi";
// let res = str.substr(0,5);
// let res1 = str.substr(-4);
// console.log(res1);

// replacing string content 

// var str = "Hello i am manoj pandharinath";
// let new1 = str.replace("manoj","tushar");
// console.log(new1);

// Extracting character  1.charAt()   2.charCodeAt():- retrun unicode of char.
// var str = "Hello i am manoj pandharinath";
//  var q1 = str.charAt(1);
//    var q2 = str.charCodeAt(4);
//    console.log(q2);


// toUpperCase
// toLowerCase
// concat

// trim() :- remove whitespace start and end
//split()

