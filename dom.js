// Select elements
let heading = document.getElementById("title");
let paragraphs = document.getElementsByClassName("para");
let listItems = document.getElementsByTagName("li");
let firstBox = document.querySelector(".box");
let allBoxes = document.querySelectorAll(".box");
let button = document.getElementById("changeBtn");
let nameInput = document.getElementById("nameInput");

// --- Button Click Event ---
button.addEventListener("click", () => {
  heading.textContent = " You clicked the button!";
  heading.classList.toggle("highlight");

  for(let p of paragraphs) {
    p.textContent = "Updated Paragraph!";
    p.classList.toggle("highlight");
  }

  allBoxes.forEach((box, index) => {
    box.textContent = `Box ${index + 1} clicked!`;
    box.classList.toggle("highlight");
  });
});

// --- Double Click Event on Heading ---
heading.addEventListener("dblclick", () => {
  heading.textContent = "Heading Double Clicked!";
  heading.classList.toggle("highlight");
});

// --- Hover Event on Boxes ---
allBoxes.forEach(box => {
  box.addEventListener("mouseover", () => {
    box.style.backgroundColor = "lightblue";
  });
  box.addEventListener("mouseout", () => {
    box.style.backgroundColor = "";
  });
});

// --- Input Change Event ---
nameInput.addEventListener("input", () => {
  heading.textContent = `Hello, ${nameInput.value || "World"}!`;
});




