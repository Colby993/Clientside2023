let Bear = "Bear.jpg"
let Wolf = "Wolf.jpg"
let Alligator = "Alligator.jpg"
let Cheetah = "Cheetah.jpg"
let Loin = "Loin.jpg"



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
