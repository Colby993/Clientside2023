/*    JavaScript 7th Edition
      Chapter 2
      Project 02-04

      Application to calculate the cost of a restaurant order plus tax
      Author: colby stewart
      Date:   

      Filename: project02-04.js
 */
//constants
const CHICKEN_PRICE = 11.95;
const HALIBUT_PRICE = 13.95;
const BURGER_PRICE = 10.95;
const SALMON_PRICE = 17.95;
const SALAD_PRICE = 8.95;
const SALES_TAX = 0.07;

//add onclick event to each element of the form
document.getElementById("chicken").onclick = calcTotal;
document.getElementById("halibut").onclick = calcTotal;
document.getElementById("burger").onclick = calcTotal;
document.getElementById("salmon").onclick = calcTotal;
document.getElementById("salad").onclick = calcTotal;


// Function to calculate the total cost of a restaurant order
function calcTotal() {

   let cost =0;
   let buyChicken = document.getElementById("chicken").checked;
   let buyHalibut = document.getElementById("halibut").checked;
   let buyBurger = document.getElementById("burger").checked;
   let buySalmon = document.getElementById("salmon").checked;
   let buySalad = document.getElementById("salad").checked;


   cost += (buyChicken)? CHICKEN_PRICE : 0;
   cost += (buyHalibut)? HALIBUT_PRICE : 0;
   cost += (buyBurger)? BURGER_PRICE : 0;
   cost += (buySalmon)? SALMON_PRICE : 0;
   cost += (buySalad)? SALAD_PRICE : 0;

   document.getElementById("foodTotal").innerHTML = formatCurrency(cost);


   let tax = cost * SALES_TAX;
   document.getElementById("foodTax").innerHTML = formatCurrency(tax);


   //calculate the total cost of the food
   let totalCost = cost + tax;
   document.getElementById("totalBill").innerHTML = formatCurrency(totalCost);
}





// Function to display a numeric value as a text string in the format $##.## 
 function formatCurrency(value) {
    return "$" + value.toFixed(2);
 }

