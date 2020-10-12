const form = document.querySelector('#name-input');

const hello = document.querySelector('#name-output');

form.addEventListener('input', onInputChange);

function onInputChange() {
  hello.textContent = form.value.length > 0 ? form.value : 'незнакомец';
}
