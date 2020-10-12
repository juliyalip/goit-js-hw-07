const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const makeLiEl = ingredients.map(element => {
  const newLi = document.createElement('li');
  newLi.textContent = element;
  return newLi;
});

const ulContainerEl = document.querySelector('#ingredients');

ulContainerEl.append(...makeLiEl);
