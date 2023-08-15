let burger = document.querySelector(".burger"),
    burgertop = document.querySelector(".burgertop"),
    burgermiddle = document.querySelector(".burgermiddle"),
    burgerbottom = document.querySelector(".burgerbottom"),
    burgerclose = document.querySelector(".burgerclose"),
    burgerclosetop = document.querySelector(".burgerclosetop"),
    burgerclosebottom = document.querySelector(".burgerclosebottom");

function openmenu(){

  burgertop.style.animation = "0.5s topopen";
  burgertop.style.animationFillMode = "forwards";

  burgermiddle.style.animation = "0.3s middleopen";
  burgermiddle.style.animationFillMode = "forwards";

  burgerbottom.style.animation = "0.5s bottomopen";
  burgerbottom.style.animationFillMode = "forwards";

  setTimeout(function(){
    burger.style.display = "none";
    burgerclose.style.display = "flex";

    burgerclosetop.style.animation = "0.5s rotatetop" ;
  burgerclosetop.style.animationFillMode = "forwards";

burgerclosebottom.style.animation = "0.5s rotatebottom" ;
 burgerclosebottom.style.animationFillMode = "forwards";



  },500);

}


function closemenu(){



  burgerclosetop.style.animation = "0.5s rotatetopclose" ;
    burgerclosetop.style.animationFillMode = "forwards";

    burgerclosebottom.style.animation = "0.5s rotatebottomclose" ;
     burgerclosebottom.style.animationFillMode = "forwards";


  setTimeout(function(){
    burger.style.display = "flex";
    burgerclose.style.display = "none";

    burgertop.style.animation = "0.5s topclose";
  burgertop.style.animationFillMode = "forwards";

  burgermiddle.style.animation = "0.3s middleclose";
  burgermiddle.style.animationFillMode = "forwards";

  burgerbottom.style.animation = "0.5s bottomclose";
  burgerbottom.style.animationFillMode = "forwards";


  },500);

}

burger.addEventListener("click", openmenu);
burgerclose.addEventListener("click", closemenu);