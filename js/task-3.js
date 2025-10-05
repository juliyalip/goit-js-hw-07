const textInput = document.querySelector("#name-input")
const output = document.querySelector("#name-output")

textInput.addEventListener("input", sayHello)

function sayHello(e) {
    const userName = e.currentTarget.value.trim();
    output.textContent = userName ? userName : "Anonymous"
}
