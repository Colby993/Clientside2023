"use strict";
/*    JavaScript 7th Edition
      Chapter 9
      Project 09-04

      Project to store high scores from a game in a cookie
      Author: colby stewart
            Date:   4/24/2023  

      Filename: project09-04.js
*/

/* Page Objects */
// Event listener for window load event
window.addEventListener("load", function () {
      // Check if document.cookie object exists
      if (document.cookie) {
        // Get best time from cookie and display it
        var bestText = document.getElementById("bestTime");
        bestText.textContent = getBestTime() + " seconds";
      }
    });
    
    // Get best time from cookie or return 9999
    function getBestTime() {
      if (document.cookie) {
        var cookieArray = document.cookie.split("=");
        return parseInt(cookieArray[1]);
      } else {
        return 9999;
      }
    }
    
    // Update best time if recent attempt was better
    function updateRecord() {
      var solutionTime = parseInt(document.getElementById("timer").textContent);
      var bestTime = getBestTime();
      if (solutionTime < bestTime) {
        bestTime = solutionTime;
        var bestText = document.getElementById("bestTime");
        bestText.textContent = bestTime + " seconds";
        var now = new Date();
        var expiryDate = new Date(now.getTime() + 90 * 24 * 60 * 60 * 1000);
        document.cookie = "puzzle8Best=" + bestTime + "; expires=" + expiryDate.toGMTString();
      }
    }
    
    // Create the sliding block puzzle
    var puzzleArea = document.getElementById("puzzle");
    var puzzle = new Puzzle(puzzleArea);
    
    // Add event listeners for Start and Restart buttons
    var startBtn = document.getElementById("startBtn");
    var restartBtn = document.getElementById("restartBtn");
    startBtn.addEventListener("click", function () {
      puzzle.startGame();
    });
    restartBtn.addEventListener("click", function () {
      puzzle.restartGame();
    });
    
    // Add event listener for puzzle solved event
    puzzleArea.addEventListener("puzzlesolved", function () {
      updateRecord();
      var message = document.getElementById("message");
      message.textContent = "Congratulations!";
    });
    
    // Add event listener for puzzle unsolvable event
    puzzleArea.addEventListener("puzzleunsolvable", function () {
      var message = document.getElementById("message");
      message.textContent = "This puzzle cannot be solved.";
    });