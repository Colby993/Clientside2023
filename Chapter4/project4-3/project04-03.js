/*    JavaScript 7th Edition
      Chapter 4
      Project 04-03

      Application to count the number of characters in a review comment
      Author: 
      Date:   

      Filename: project04-03.js
*/
'use strict';

// Maximum Length of Review
const MAX_REVIEW = 1000;
document.getElementById("limit").innerHTML = MAX_REVIEW;

// Reference to elemets in the web page
const wordCountBox = document.getElementById("countValue");
const warningBox = document.getElementById("warningBox");


// Event listener for typing into the comment box
document.getElementById("comment").addEventListener('keyup', updateCount);

// Function to update the count with each keyup event
function updateCount() {
  // Set the warning box to an empty text string
  warningBox.innerHTML = "";

  // Count the number of characters in the comment box
  const commentText = document.getElementById("comment").value;
  const charCount = countCharacters(commentText); 

  // TRY CATCH
  try {
    if (charCount > MAX_REVIEW) {
      throw 'You have exceeded the character count limit.'
    }
  } catch (e) {
    warningBox.innerHTML = e
  } finally {
    wordCountBox.innerHTML = charCount
  }
}


// Function to count the number of characters in a text string
function countCharacters(textStr) {
   var commentregx = /\s/g;
   var chars = textStr.replace(commentregx, "");
   return chars.length;
}