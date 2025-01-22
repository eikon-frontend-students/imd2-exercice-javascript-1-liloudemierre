var box1 = document.querySelector(".change-color");

function changeColor() {
  box1.classList.add("is-active");
}

box1.addEventListener("click", changeColor);

var box2 = document.querySelector(".toggle-color");

function toggleColor() {
  box2.classList.toggle("is-active");
}
box2.addEventListener("click", toggleColor);
