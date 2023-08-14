const hamburger = document.getElementById("hamburger");

let isMenuOpen = false;

hamburger.addEventListener("click", () => {
  if (isMenuOpen) {
    line1.style.transform = "translateY(0) rotate(0deg)";
    line2.style.transform = "translateY(0) rotate(0deg)";
  } else {
    line1.style.transform = "translateY(5px) rotate(-45deg)";
    line2.style.transform = "translateY(-5px) rotate(45deg)";
  }
  isMenuOpen = !isMenuOpen;
});
