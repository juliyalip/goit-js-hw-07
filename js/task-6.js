function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
}

const inputEl = document.querySelector("input")
const createBtnEl = document.querySelector("[data-create]")
const destroyBtnEl = document.querySelector("[data-destroy]")
const boxesEl = document.querySelector("#boxes")

createBtnEl.addEventListener("click", onCreate)
destroyBtnEl.addEventListener("click", destroyBoxes)

function onCreate() {
    const amount = Number(inputEl.value.trim());
    if (amount < 1 || amount > 100) {
        alert("Please enter a number between 1 and 100")
        return
    }
    destroyBoxes()
    createBoxes(amount)
}

function destroyBoxes() {
    boxesEl.innerHTML = "";
}

function createBoxes(amount) {
    const fragment = document.createDocumentFragment()
    let size = 30

    for (let i = 0; i < amount; i += 1) {
        const box = document.createElement("div")
        box.style.width = `${size}px`;
        box.style.height = `${size}px`;
        box.style.backgroundColor = getRandomHexColor();
        box.style.margin = "4px"
        box.style.borderradius = "4px";
        fragment.append(box);
        size += 10
    }
    boxesEl.appendChild(fragment)
}