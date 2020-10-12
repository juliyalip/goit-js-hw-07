const counterValue = document.querySelector('#value');

const minusBtn = document.querySelector('[data-action="decrement"]');

const addBtn = document.querySelector('[data-action="increment"]');

let curretntValue = 0;

const increment = () => {
  return (counterValue.textContent = curretntValue += 1);
};

const decrement = () => {
  return (counterValue.textContent = curretntValue -= 1);
};

addBtn.addEventListener('click', increment);
minusBtn.addEventListener('click', decrement);
