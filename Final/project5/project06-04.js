"use strict";
/*    JavaScript 7th Edition
      Chapter 6
      Project 06-04

      Project to turn a selection list into a selection of hypertext links
      Author: colby stewart
      Date:   4/24/2023

      Filename: project06-04.js
*/

// Selection lists in the web form
let make = document.getElementById("make");
let year = document.getElementById("year");
let model = document.getElementById("model");
let trim = document.getElementById("trim");

// Option elements within the selection lists
let makeOptions = document.querySelectorAll("select#make option");
let yearOptions = document.querySelectorAll("select#year option");
let modelOptions = document.querySelectorAll("select#model option");
let trimOptions = document.querySelectorAll("select#trim option");

// The number of options within each selection list
let makes = makeOptions.length;
let years = yearOptions.length;
let models = modelOptions.length;
let trims = trimOptions.length;

// Form button to generate the complete text of the selected vehicle
let selectVehicle = document.getElementById("selectVehicle");

// Paragraph containing the text of the selected vehicle
let vehicle = document.getElementById("vehicle");


// Event handler to modify the content of the Model selection list
// when the Make selection list changes

make.onchange = function() {
   let makeIndex = make.selectedIndex;
   let makeCategory = make.options[makeIndex].text;
   
   if (makeIndex === 0) {
      showAll(model);
   } else {
      filterSelect(model, makeCategory);
   }  
}

// Event handler to modify the content of the Trim selection list
// when the Model selection list changes

model.onchange = function() {
   let modelIndex = model.selectedIndex;
   let modelCategory = model.options[modelIndex].text;
   
   if (modelIndex === 0) {
      showAll(trim);
   } else {
      filterSelect(trim, modelCategory);
   }     
}
// creating the showAll method here
function showAll(selectList) {
   console.log("This is selected");
   // getting the options and the length of the options list
   let options = selectList.options;
   let optionLength = options.length;
 
   // iterating through each element of the options list
   // and setting the display to block in order to display the option
   // within the selection list
   for (let i = 0; i < optionLength; i++) {
     options[i].style.display = "block";
   }
 }
 // Filtering the list of options based on the category
 function filterSelect(selectList, category) {
   var options = selectList.getElementsByTagName("option");
   var optionLength = options.length;
   for (var i = 0; i < optionLength; i++) {
     if (options[i].className === category) {
       options[i].style.display = "block";
     } else {
       options[i].style.display = "none";
     }
   }
 }
 //Get the button by id
selectVehicle.addEventListener("click", function() {
  // Get the selected option text values of the three selection lists
  var make = document.getElementById("make").value;
  var year = document.getElementById("year").value;
  var model = document.getElementById("model").value;
  var trim = document.getElementById("trim").value;
  // Write the text "make model trim" to the vehicle paragraph in the web page
  document.getElementById("vehicle").innerHTML =year+ " " + make + " " + model + " " + trim;
});