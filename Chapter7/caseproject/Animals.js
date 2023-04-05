window.onload = function() {
      var userAgent = navigator.userAgent;
      var language = navigator.language;
      var platform = navigator.platform;

      var screenWidth = screen.width;
      var screenHeight = screen.height;
      var colorDepth =  screen.colorDepth;


      document.getElementById("userAgent").innerHTML = "User agent: "+ userAgent;
      document.getElementById("language").innerHTML = "Language: "+ language;
      document.getElementById("platform").innerHTML = "Platform: "+ platform;
      document.getElementById("screenWidth").innerHTML = "Screen width: "+ screenWidth;
      document.getElementById("screenHeight").innerHTML = "Screen height: "+ screenHeight;
      document.getElementById("colorDepth").innerHTML = "Screen color depth: "+ colorDepth;
}
let signupForm = document.getElementById("signup");

      signupForm.addEventListener("submit", function(e) {

    e.preventDefault();
    let pwd = document.getElementById("pwd").value;
    let feedback = document.getElementById("feedback");

    const regex1 = /[A-Z]/;

    const regex2 = /[0-9]/;

    const regex3 = /[!$#%]/;

    // if length of the password is less than 8
    if(pwd.length < 8)
    {
        feedback.innerText = 'Your password must be at least 8 characters.';
    }
    else if(!regex1.test(pwd))
    {
        feedback.innerText = 'Your password must include an lowercase letter.';
    }
    else if(!regex2.test(pwd))
    {
        feedback.innerText = 'Your password must include a number.';
    }
    else if(!regex3.test(pwd))
    {
        feedback.innerText = 'Your password must include one of the following: !$#%';
    }
    else
    {
        // submit the form otherwise
        signupForm.submit();
    }

}

);
function myFunction() {
      var img = document.getElementById('img');
      var answer = document.getElementById('answer').value.toLowerCase();
          
      if (answer == 'lion' )
      { 
            img.src="lion.jpg";
      } 
      else if(answer == 'tiger'){
            img.src = "tiger.jpg";

      }
      else if(answer == 'cheetah'){
            img.src = "cheetah.jpg";

      }
      else if(answer == 'elephant'){
            img.src = "elephant.jpg";

      }
      else if(answer == 'zebra' ){
            img.src = "zebra.jpg";

      }
      else if(answer == 'hippo' ){
            img.src = "hippo.jpg";
      }
      else if(answer == 'gazelle' ){
            img.src = "gazelle.jpg";
      }
      else if(answer == 'giraffe' ){
            img.src = "giraffe.jpg";
      }
}

function FToC(degree){
   return (degree-32)/1.8
   }
   
   function CToF(degree){
   return degree*1.8+32
   }
   
   var cValueEl = document.getElementById("cValue");
   cValueEl.onchange = function() {   
       var cDegree = cValueEl.value;
         document.getElementById("fValue").value = CToF(cDegree);
   };
   
   var fValueEl = document.getElementById("fValue");
   fValueEl.onchange = function() {   
       var fDegree = fValueEl.value;
         document.getElementById("cValue").value = FToC(fDegree);
   };