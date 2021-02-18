function oddOrEven() {
  let number = Number(prompt('Give a number'));
 
  let answer = document.querySelector('#answer');
  
  let text;
  if(number%2 == 0 && number >= 0) {
    text = 'Even and positive number';
  } else {
    text = 'Odd or negative number'
  }

  answer.textContent = text;
}
 
