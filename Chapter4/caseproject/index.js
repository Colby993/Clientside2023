window.onerror=function(msg, url,line) {
   window.alert("Error: "+ msg+ "\nFile location: "+url+", line: "+line);
   return true;
}
const email = document.querySelector("#email");
const emailError = document.querySelector("#email_error");
email.addEventListener("input", () => reset(emailError));
const genderMale = document.querySelector("#gender_male");
const genderFemale = document.querySelector("#gender_female");
const genderError = document.querySelector("#gender_error");
genderMale.addEventListener("input", () => reset(genderError));
genderFemale.addEventListener("input", () => reset(genderError));
function validate() {

   let res = true;
try{
   if (RegExp.test(email.value) === false) {
      emailError.innerHTML = "invalid email address";
      res = false;
     
   }
}catch(err){
   emailError.innerHTML =err;
   emailError.innerHTML = "";
   
   
   }
   

try{
if ((genderMale.checked || genderFemale.checked) == false) {

   genderError.innerHTML = "please select gender";
   res = false;
}
}catch(er){
   genderError.innerHTML =err;
   genderError.innerHTML = "";

}

console.log(res);

return res;

}

function reset(element) {

   element.innerHTML = "";

}
