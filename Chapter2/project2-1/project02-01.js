/*    JavaScript 7th Edition
      Chapter 2
      Project 02-01

      Celsius <-> Farenheit Coverter
      Author: Colby Stewart
      Date:   1/29/2023

      Filename: project02-01.js
 */
      function FahrenheitToCelsius(degree){
            return (degree-32)/1.8
            }
            
            function CelsiusToFahrenheit(degree){
            return degree*1.8+32
            }
            
            var cValueEl = document.getElementById("cValue");
            cValueEl.onchange = function() {   
                var cDegree = cValueEl.value;
                  document.getElementById("fValue").value = CelsiusToFahrenheit(cDegree);
            };
            
            var fValueEl = document.getElementById("fValue");
            fValueEl.onchange = function() {   
                var fDegree = fValueEl.value;
                  document.getElementById("cValue").value = FahrenheitToCelsius(fDegree);
            };
