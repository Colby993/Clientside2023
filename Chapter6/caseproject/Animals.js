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
   let submitButton = document.getElementById("submitButton");
   function validate() {
   
   let pwd = document.getElementById("pwd").value;
   let pwd2 = document.getElementById("pwd2").value;
   let regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
   if (regex.exec(pwd) == null) {
       alert("Your password must be at least 8 characters with at least one letter and one number.");
       return false;
   }
   
   if(pwd != pwd2)  
     {   
       alert("Your passwords must match");  
       return false;
     }
   
     return true;
   };
   
            
