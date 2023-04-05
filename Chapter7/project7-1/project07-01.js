"use strict";
/*    JavaScript 7th Edition
      Chapter 7
      Project 07-01

      Project to validate a form used for setting up a new account
      Author: colby syewart
      Date:   4/5/2023

      Filename: project07-01.js
*/

let signupForm = document.getElementById("signup");

signupForm.addEventListener("submit", function(e) {

    e.preventDefault();
    let pwd = document.getElementById("pwd").value;
    let feedback = document.getElementById("feedback");

    // regex 1 to match any uppercase letter
    const regex1 = /[A-Z]/;

    // regex 2 to match any digit
    const regex2 = /[0-9]/;

    // regex 3 to match special character
    const regex3 = /[!$#%]/;

    // if length of the password is less than 8
    if(pwd.length < 8)
    {
        feedback.innerText = 'Your password must be at least 8 characters.';
    }
    else if(!regex1.test(pwd))
    {
        // test regex 1 to find an uppercase letter
        feedback.innerText = 'Your password must include an uppercase letter.';
    }
    else if(!regex2.test(pwd))
    {
        // test regex 2 to find digit
        feedback.innerText = 'Your password must include a number.';
    }
    else if(!regex3.test(pwd))
    {
        // test regex 3 to find special character
        feedback.innerText = 'Your password must include one of the following: !$#%';
    }
    else
    {
        // submit the form otherwise
        signupForm.submit();
    }

}

);