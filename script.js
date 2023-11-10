// let func1 =  function (){
//     console.log("Hello World!");
// };
// func1(); // func

// Arrow function
const func = () =>{
// console.log(document.querySelector(".para").innerText);
// console.log(document.querySelectorAll(".para")[0].innerText);
// console.log(document.getElementsByClassName(".para"));
const p = document.querySelectorAll(".para");
for (let index = 0; index < p.length; index++) {
    p[index].innerText = p[index].innerText + " " + (index+1);
};  
} 


// var - can ne reassigned, can be redeclared
// let - can be reassigned, can't be redeclared in the same scope
// const - can't be reassigned, can't be redeclared 




// console.log(p.parentElement);
// console.log(p.childNodes);

function changeBG(){
    const p = document.querySelector(".para");
    // p.classList.toggle("colorRed");
    p.setAttribute("color","orange");
}; 
function createNewElement(){
    const body = document.querySelector("body");
    const para = document.createElement("p");
    para.innerText = "I am new";
    body.appendChild(para);  
    body.removeChild(document.querySelector(".para"));
    console.log(para);
}