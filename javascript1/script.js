// first program
console.log("hello world");
// operators in js
//Artimetic 
{let a = 5;
let b = 10;
let c = a+b;
console.log(c);
console.log("a= ",a, "& b= " ,b );
console.log(a*b);
console.log(a/b);}
// unary operator 
{let a = 15;
let b = 1;
console.log(a);
console.log(a++);
console.log(a);
// Assignment operator

console.log(++a);}
{let a = 5;
let b = 10;
console.log(a+=4);}
//Comparison operator
{a = 10;
 b = 15;
 console.log(a==b);
 console.log(a!=b);} 
 // Logical Operator 
 {let a = 10;
 let b = 15;
 let cond1 = a>b; //false
 let cond2 = a==10; //true
 console.log(cond1&&cond2);
 console.log(cond1||cond2);}
 //Conditional Statement
 //if statement
 {let age = 25;
 if (age>18){
    console.log("you can vote");
 } 
 let mode = "dark";
 let colour;
 if(mode=="dark"){
    colour="black";
 } if (mode=="light"){
    colour="white";
 }
console.log(colour);}
// else statement
let mode = "white"
let colour;
if(mode=="dark"){
    colour = "black";
} else{
    colour="white"
} console.log(colour);
// Even or odd 
let num = 20;
if(num%2==0){
    console.log("even");
} else {
    console.log("odd");
}
// ternary operator
let age = 23;
let result = age>=18 ? "adult":"not adult";
console.log(result);
 

// Loops in java
 for(let i=1; i<=5; i++){
    console.log("golu");
 }
// to Calculate sum of 1 to n
let sum =0;
for(let i = 1; i<=5; i++){
    sum = sum + i;

} console.log(sum);

// loops in java script
//for of loop
{let str = "grijesh pandey";
for(let i of str){
    console.log(i);
}}
let str = "golu pandey"
let size = 0;
for(let i of str){
    console.log(i);
    size++;

}
// for in loop
let Student = {
name: "grijesh pandey",
age : 20,
ispass: true,
};
for(let i in Student){
    console.log(i);
}
// practice
for(let i=0; i<=100; i++){
if (i%2===0){
    console.log(i);
}
}

// Prompt
//{let num = prompt("enter a number");
//if (num%2===0){
  //  console.log("num is a multiple of 2");

//} else {
  //  console.log("num is not a multiple of 2");
//}
//console.log(num);}

//let gameNum = 20;
//let userNum = prompt("guess the no");
//while(userNum !== gameNum){
  //  userNum = prompt("you enter a wrong num, guess it again ");
//} console.log("you got it");

// template Literals 
let obj = {
    item: "book",
    price: 300,
};
console.log("the cost of ", obj.item, "is",obj.price,"rupees");
let output = `the cost of ${obj.item} is ${obj.price} rupees`;
console.log(output);
//Methods in js
{let str = "Grijesh pandey";
 str = str.toUpperCase()
console.log( str);}
{let str ="GIRDHAR";
str= str.toLowerCase();
console.log(str);}
// SLICE METHOd
{let str = "0123589";
    console.log(str.slice(2,5));}
// queastion
let fullname = prompt("enter your full name");
let username = "@"+ fullname + fullname.length;
console.log(username);

//Arrays
{let marks = [65, 52, 58, 98, 89 ];
    let sum = 0;
    for(let i of marks){
        sum = sum + i;
    } let avg = sum/marks.length;
    console.log(avg);}
 
let item = [250,645,900,50];
let i =0;
for(let i=0; i<item.length; i++){
    let offer = item[i]/10;
    item[i]= item[i]-offer;

} console.log(item);

   {let numbers = [25,56,58,79];
   let sum = 0;
   for(let i=0; i<numbers.length; i++){
    sum = sum + numbers[i]
   } console.log(sum);
   let avg= sum/numbers.length;
   console.log(avg);

}
 { let item = [52,58,56,85];
    let i = 0;
    for(i=0; i<item.length; i++){
        let percentage = item[i]/20;
        item[i] = item[i]-percentage;
    } console.log(item);}

    // Array items
    let foodItem = ["chips","potato","apple"];
    foodItem.push("birger");
    console.log(foodItem);
    console.log(foodItem.toString());
//Function in js

 function myFunction(){
    console.log("welcome to Haldwani");
    console.log("hello")
 } myFunction();

 function mul(x,y){
    console.log(x*y);
 } mul(5,6)

 // Arrow function 
 {let arrowSum = (a,b) => {
    console.log(a+b);
 } }
let arrowMul= (a,b) => {
    console.log(a*b);
} 
function countVowels(str){
    let count = 0;
    for(let i of str){
        if(i === "a" || i === "e" || i === "i" || i === "o" || i === "u") {
        count++
        } console.log(i);
        
    } 
}
let arr = [2, 6, 5, 8];

arr.forEach((num) => {
    console.log(num*num);
});

 let nums = [55 , 56, 89, 58]
 nums.map((num) => {
    console.log(num);
 })
 // reduce 
 {let arr = [2, 5, 6, 9]
 let output = arr.reduce((res, curr) => {
    return res+curr;
 }) 
 console.log(output);}

 let marks = [58, 95, 65, 96];
  let toppers = marks.filter((val) => {
    return val>90;
 }) 
 console.log(toppers);

 {let send = prompt("enter a number");
 let arr = [];
 for(let i = 1; i<=send; i++){
    arr[i-1] = i;
 } console.log(arr);
  let sum = arr.reduce((res,curr) => {
    return res+curr;
 } 
 
  )} console.log(sum);
















