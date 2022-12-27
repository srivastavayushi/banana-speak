// console.log("hello world")
// var text = prompt("What is your name?")
// alert(`Helloo ${text}`);

var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");

function clickEventHandler() {
    console.log(txtInput.value);
};
btnTranslate.addEventListener("click", clickEventHandler)

// console.log(btnTranslate);

// API - Application Programming Interface - when user talks to an application 
// concept of callback - when an event happens do this (implement this function)
// DOM - Modeling entire document as an object. Every element on the page is represented as a property of an object



