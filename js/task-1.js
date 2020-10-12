const categoriesEl = document.querySelector('#categories'); // dostup k UL

console.log(`В списке ${categoriesEl.children.length} категории.`);

const liItemEl = document.querySelectorAll('li.item');

liItemEl.forEach(element =>
  console.log(
    `Категория: ${element.firstElementChild.textContent}, Количество элементов: ${element.lastElementChild.children.length}`,
  ),
);
