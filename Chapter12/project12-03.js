"use strict";
/*    JavaScript 7th Edition
      Chapter 12
      Project 12-03

      Project to show a recipe with expanding/contracting content
      Author: 
      Date:   

      Filename: project12-03.js
*/

// Step 2: apply the click() method to the article > h2 selector
$("article > h2").click(function (e) {
  // Inside the anonymous function
  // Step 3: Declare variables
  // heading variable referencing the target of the click event
  let heading = $(e.target);
  // list variable referencing the next sibling element of the heading variable
  let list = heading.next();
  // headingImage variable referencing the children of the heading variable whose tag name is “img”
  let headingImage = $(heading).children("img");

  // Step 4: Alternate between hiding and showing the content of the lists by applying the slideToggle() method to the list variable over a half-second (500 ms) interval
  $(list).slideToggle(500);

  // Step 5: Change the symbol displayed in the headings by applying the attr() method to headingImage variable to get the value of the src attribute.

  let src = $(headingImage).attr("src");
  // If src attribute value is equal to “plus.pg”, apply the attr() method to headingImage to set the src attribute value to “minus.png”;
  if (src == "plus.png") {
    $(headingImage).attr("src", "minus.png");
  } else {
    // otherwise set the src attribute value to “plus.png”.
    $(headingImage).attr("src", "plus.png");
  }
});