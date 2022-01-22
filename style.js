let menu = document.querySelector(".nav-links");
let toglebtn = document.querySelector(".toggle-btn")

toglebtn.addEventListener("click" , function(){
  menu.classList.toggle("active")
})








var slide = document.getElementById("slide");
var uparow = document.getElementById("topar")
var downarow = document.getElementById("dowpar")

let x = 0

uparow.addEventListener("click" , function(){
    if (x > -900){
        x = x - 300;
        slide.style.top = x + "px";
    }
   
})

downarow.addEventListener("click" , function(){
    if (x < 0){
        x = x + 300;
        slide.style.top = x + "px";
    }
   
})






