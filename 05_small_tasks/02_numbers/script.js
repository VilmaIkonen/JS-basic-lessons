function calculate() {
  let first = Number(document.querySelector('#firstNumber').value);
  let second = Number(document.querySelector('#secondNumber').value);
  let third = Number(document.querySelector('#thirdNumber').value);
  let sum = first + second + third;
  let multi = first * second * third;
 
  let answer = document.querySelector('#answer');
  
  let result;
  if(first >= 0 && second >= 0 && third >= 0) {
    result = `Sum of numbers is ${sum} and when multiplied, the answer is ${multi}`;
  } else if (first >= 0 || second >= 0 || third >= 0) {
    result = `Sum of numbers is ${sum}`;
  } else if (first < 0 && second < 0 && third < 0){
    result = 'You gave only negatives, try again'
  }

  answer.textContent = result;
}
 
