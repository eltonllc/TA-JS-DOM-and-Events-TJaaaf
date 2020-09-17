let boxes = document.querySelector(".boxes");

for (i = 0; i <= 500; i++) {
  let box = document.createElement("div");
  box.classList.add("box");
  boxes.append(box);
}

// let boxAll = document.querySelectorAll(".box");

// function handler() {
//   Array.from(boxAll).forEach((element) => {
//     element.innerText = `${Math.round(Math.random() * 501)}`;
//     element.style.backgroundColor = `#${Math.round(Math.random() * 501)}`;
//   });
// }

// boxes.addEventListener("mousemove", handler);

let allBoxes = document.querySelectorAll(".box");

boxes.addEventListener("mousemove", function () {
  allBoxes.forEach((e) => {
    e.style.backgroundColor = `#${parseInt(Math.random() * 1000)}`;
    e.innerText = `${parseInt(Math.random() * 500)}`;
  });
});