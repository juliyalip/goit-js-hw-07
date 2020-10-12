const fontControl = document.querySelector('#font-size-control');

const textEl = document.querySelector('#text');
console.log(textEl.style.fontSize);

function fontSize(event) {
  textEl.style.fontSize = event.currentTarget.value + 'px';
}

fontControl.addEventListener('input', fontSize);
