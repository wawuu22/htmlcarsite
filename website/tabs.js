function openPage(pageName, elmnt, color) {
  
// Hide all elements with class="tabcontent" by default */
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  
// Remove the background color of all tablinks/buttons
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }


// Show the specific tab content
  document.getElementById(pageName).style.display = "block";

  
// Add the specific color to the button used to open the tab content
  elmnt.style.backgroundColor = color;
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

function calcost(){
  var distance = document.getElementById('distance').value; //Document makes a new element, get element in the object
  var fuel = document.getElementById('fuel').value;         // ^^^
  var costper = document.getElementById('costper').value;   // ^^^
  var consumed =  (fuel / (distance/20)).toFixed(2);        //Returns a string representing a number in fixed-point notation.   
  var costper20 = (consumed * costper).toFixed(2);
  document.getElementById('consumption').innerHTML ="Total Fuel cost = $ " + (fuel*costper).toFixed(2);
}                                   //interacts with interface

