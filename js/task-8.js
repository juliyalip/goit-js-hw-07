const form = document.querySelector('#name-proba');

const hello = document.querySelector('#name-output-proba');

form.addEventListener('input', onInputChange);

function onInputChange() {
  hello.textContent = form.value.length > 0 ? form.value : 'незнакомец';
}