"use strict";
const panels = document.querySelectorAll(".panel");
function removeActive() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}

panels.forEach((panel) => {
  panel.addEventListener("click", function () {
    removeActive();
    panel.classList.add("active");
  });
});

// panels[1].addEventListener("click", function () {
//   console.log("yes");
//   panels[1].classList.add("active");
//   panels[0].classList.remove("active");
// });
