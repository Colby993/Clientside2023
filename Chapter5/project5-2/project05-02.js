"use strict";
/*    JavaScript 7th Edition
      Chapter 5
      Project 05-02

      Project to move images between a photo bucket and photo list.
      Author: Joan Carey
      Date: 22/02/2022

      Filename: project05-02.js
*/

// Step 2: declare images variable
// get elements with tag name "img"
let images = document.getElementsByTagName("img");

// Step 3: The photoBucket variable declared getting the element with the id "photo_bucket"
let photoBucket = document.getElementById("photo_bucket");

// Step 4: The photoList variable referencing the element with the id "photo_list".
let photoList = document.getElementById("photo_list");

// Step 5: for loop for looping over all of the elements of images collection
for (let imgCntr = 0; imgCntr < images.length; imgCntr++) {
  // Step 6: use onclick event handler
  // attach an click even handler with anonymous function
  images[imgCntr].onclick = function () {
    // Step 7: Use if-else
    // Step 8: If the parent element of the clicked image has an id equal to “photo_bucket”
    if (this.parentElement.id == "photo_bucket") {
      // Step 9: Create an element node named newItem for the li element
      let newItem = document.createElement("li");
      // Step 10: append the image to the newItem object using the appendChild() method
      newItem.appendChild(this);

      // Step 11: append newItem to the photoList object
      photoList.append(newItem);
    } else {
      // Otherwise, do as below
      // Step 12: Declare a variable named oldItem equal to the parent element of the clicked image,
      let oldItem = this.parentElement;

      // Step 13: append the clicked image to photoBucket object
      photoBucket.appendChild(this);

      // Step 14: remove oldItem from the parent element of oldItem using the removeChild() method
      oldItem.parentElement.removeChild(oldItem);
    }
  };
}