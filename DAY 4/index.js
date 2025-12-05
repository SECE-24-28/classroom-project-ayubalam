console.log(a);
//hosting
var a=10;
// global scope/ finction scope
console.loglog(a);

//ES6
//let and const
console.log(b)
//reference Error
//temporal Dead zone
let b=20;
b=130;
// Block Scope
console.log(b)


//{
// let b=130
//console.log(b)
//}

const c=40;
c=70;
console.log(c);


// function 
// 1. Named functions
// function declaration
function NamedFun(){
    console.log("Names Function Called");
    console.log("Names Function Called");
    console.log("Names Function Called");
}

// function call/invoaktion
NamedFun();
// funExp();


// 2. function expression
let funcExp= function(){
    console.log("Function Expression Called");
};
fincExp();



// 3.Arrow Functions(Es6)

let arrow=() => {
    console.log("Arrow Function Called");
};
arrow();

// 4. callback function and 5. IIFE(Immediately inviked function expression)

(() =>{
    console.log("callback and iif function called");

})();



// Adding two numbers
const addTwonumbers= (parameter1,parameter2) => {
    console.log(parameter1,parameter2);

    let num1 = parameter1 || 10;
    let num2 = parameter2 || 20;
    let sum =num1+num2;
    console.log("The Sum Of two numbers is:", sum);

};
 addTwonumbers(20,50);
 addTwonumbers(40,50);

 addTwonumbers();

 //for loop
 for(let i=0; i<arrow.length; i++)
 {
    arr[i]==arr[i] + i;
 }
 console.log(arr);
   let arr1=[1,2,3,4,5,6];
      
   // for each
   arr1.forEach((Element,index) => {
    console.log(Element,index);
   });

   let arr2=[1,2,3,4,5,6];
   // let aa=arr.map((el,ind) =>{
    //return el+indexedDB;
//});
let aa= arr.map((el,ind)=> el+ind);

