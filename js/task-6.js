const validationInput = document.querySelector('#validation-input');
console.log(validationInput.value);

//enterValue.addEventListener('blur', test);

function test() {
  if (Number(validationInput.value.length) != validationInput.dataset.length) {
    validationInput.classList.remove('valid');
    validationInput.classList.add('invalid');
  } else {
    validationInput.classList.remove('invalid');
    validationInput.classList.add('valid');
  }
}
validationInput.addEventListener('blur', test);
