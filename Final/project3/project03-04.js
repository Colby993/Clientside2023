/*    JavaScript 7th Edition
      Chapter 3
      Project 03-04

      Application to write a list of customer reviews
      Author: colby stewart
            Date:   4/24/2023 

      Filename: project03-04.js
*/

let reviewers = ["WillHa85", "ColbySte123","Tompkins8","GoldFry26", "Mittens41"];
let reviewType = ["P", "N", "", "", ""];
let stars = [1, 2, 3, 4, 5 ];
let reviewDates = ["11/18/2024", "4/25/2023", "11/10/2024", "11/17/2024", "11/15/2024"];
let reviews = [
   "I've owned all of the Dance Off games from the beginning. I have lost 6 pounds since I started playing.",
   "This book is a great book to learn about. It's a great book to learn about. It's a great.",
   "The latest version of Dance Off improves upon the 8th Edition only slightly; still is one of the best dance-style games on the market.",
   "A so-so release of this well-established game. Where this release fails is in the choreography. Many of the moves follow predictable patterns. I hope the next release improves the choreography .",
   "The installation was buggy and kept crashing my gaming console. I spent several hours on tech support with no solution to my problem. I finally returned it and got my money back. I wish I could give it a zero star rating.",

];
let reviewTitles = ["My Favorite Workout Game","Racing Game","Nice Improvement", "Poor Choreography", "Buggy with Poor Tech Support"];
// function to generate star images based on rating
function starImages(rating) {
      let imageText = '';
      for (let i = 0; i <= rating; i++) {
        imageText += "<img src='star.png' alt=''>";
      }
      return imageText;
    }
    
    // generate HTML for customer reviews
    for (let i = 0; i < reviewers.length; i++) {
      let reviewCode = '';
      if (reviewType[i] === "P") {
        reviewCode += "<table class='prime'>";
      } else if (reviewType[i] === "N") {
        reviewCode += "<table class='new'>";
      } else {
        reviewCode += "<table>";
      }
      reviewCode += "<caption>" + reviewTitles[i] + "</caption><tr><th>By</th><td>" + reviewers[i] + "</td></tr><tr><th>Review Date</th><td>" + reviewDates[i] +"<tr><th>Rating</th><td>"+starImages(i)+"</td></tr><tr><td colspan='2'>" + reviews[i] + "</td></tr></table>";
      document.getElementsByTagName('article')[0].insertAdjacentHTML('beforeend', reviewCode);
    }