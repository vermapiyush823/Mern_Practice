// let func1 =  function (){
//     console.log("Hello World!");
// };
// func1(); // func

// Arrow function
// const func = () =>{
// console.log(document.querySelector(".para").innerText);
// console.log(document.querySelectorAll(".para")[0].innerText);
// console.log(document.getElementsByClassName(".para"));
// const p = document.querySelectorAll(".para");
// for (let index = 0; index < p.length; index++) {
//     p[index].innerText = p[index].innerText + " " + (index+1);
// };  
// } 


// -----------------------------------------

// var - can ne reassigned, can be redeclared
// let - can be reassigned, can't be redeclared in the same scope
// const - can't be reassigned, can't be redeclared 

// -----------------------------------------


// console.log(p.parentElement);
// console.log(p.childNodes);

// function changeBG(){
//     const p = document.querySelector(".para");
//     // p.classList.toggle("colorRed");
//     p.setAttribute("color","orange");
// }; 
// function createNewElement(){
//     const body = document.querySelector("body");
//     const para = document.createElement("p");
//     para.innerText = "I am new";
//     body.appendChild(para);  
//     body.removeChild(document.querySelector(".para"));
//     console.log(para);
// }

// -------------------------------------------

// Arrays
// const arr = [1,2,3,4,5];
// console.log(arr);

// console.log(arr.unshift(0));
// console.log(arr);


// console.log(arr.slice(0,3))
// console.log(arr.splice(2,0,"Hello","Piyush"))
// console.log(arr)

// ---------------------------------------------

// Callback Functions --> which is passed as an argument to another function
// High order Funtions --> which accepts the function as  parameter 
const HOF =(para) =>{
    console.log("Hello from HOF");
    para();
}
const callback = () =>{
    console.log("Hello from callback");
}

HOF(callback);
HOF(()=>{
    console.log("Hello from callback");
});

var arr = ["Piyush","Sagar","Kashish"];

const val1 =  arr.forEach((i,ind)=>{
    return ind; 
});
console.log(val1);

const val = arr.map((i,ind)=>{
    console.log(i,ind+1);
});
console.log(val);

const nums = [1,-2,3,-2,4,-1];

let count =0 
nums.map((i)=>{
    if(i>=0)
    count += i
})
console.log(count);