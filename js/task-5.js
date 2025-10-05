function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const buttonEl = document.querySelector(".change-color")
const outputEl = document.querySelector(".color")

buttonEl.addEventListener("click", createBodyColor)

function createBodyColor() {
  const color = getRandomHexColor()
  document.body.style.backgroundColor = color
  outputEl.textContent = color
}