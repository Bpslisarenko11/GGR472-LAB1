//This links to the  four different buttons created in index.html and displays text when clicked
const btn = document.getElementById("Tommy-Thompson-Park-button") ;
btn.addEventListener("click", function() {
    alert("That's my favourite park too!") ; 
}) 

const btn1 = document.getElementById("High-Park-button") ;
btn1.addEventListener("click", function() {
    alert("Not my favourite, but I like this park too!") ; 
}) 

const btn2 = document.getElementById("Riverdale-Park-button") ;
btn2.addEventListener("click", function() {
    alert("This is my second favourite park!") ; 
}) 

const btn3 = document.getElementById("none-button") ;
btn3.addEventListener("click", function() {
    alert("That's okay") ; 
}) 