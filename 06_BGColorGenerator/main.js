let form = document.querySelector('form');
let color1 = document.querySelector('#color1');
let color2 = document.querySelector('#color2');
let direction = document.querySelectorAll('input[name="direction"]');
// let direction = document.querySelectorAll('input[type="radio"]');
let code = document.querySelector('#code');

const setGradient = (event) => {
  event.preventDefault();

  let selectedDirection;

  for(const selected of direction) {
    if(selected.checked) {
      selectedDirection = selected.value;
    }
  }

  document.body.style.backgroundImage = `linear-gradient(${selectedDirection}, ${color1.value}, ${color2.value})`;

  code.textContent = `linear-gradient(${selectedDirection}, ${color1.value}, ${color2.value})`
}

form.addEventListener('submit', setGradient);

