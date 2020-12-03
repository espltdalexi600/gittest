"use strict";

let names = [];

function addName() {

    let fullName = {};

    let inputFirstName = document.getElementById("firstName");
    
    if(checkInput(inputFirstName)) {
        fullName.firstName = inputFirstName.value;
    } else {
        alert("Enter first name!");
        inputFirstName.focus();
        return;
    }

    let inputLastName = document.getElementById("lastName");

    if(checkInput(inputLastName)) {
        fullName.lastName = inputLastName.value;
    } else {
        alert("Enter last name");
        inputLastName.focus();
        return;
    }

    if(("firstName" in fullName) && ("lastName" in fullName)) {
        names.push(fullName);

        inputFirstName.value = "";
        inputLastName.value = "";
    }

}

function checkInput(input) {

    if(input.value != "") {
        return true;
    }
    return false;

}

function showNames() {

    if(names.length == 0) return;
    
    let stringOfNames = "";

    names.forEach((item, index, array) => {
        stringOfNames += `${index + 1}. ${item.firstName} ${item.lastName} <br />`;  
    });

    let listOfNames = document.getElementById("listOfNames");
    listOfNames.innerHTML = stringOfNames;

    let list = document.getElementById("list");
    list.style.display = "block";

}

let button = document.getElementById("add");

button.addEventListener("click", addName);
button.addEventListener("click", showNames);