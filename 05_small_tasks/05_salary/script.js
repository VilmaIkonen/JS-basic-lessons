const calculate = () => {
  let salary = Number(document.querySelector('#salary').value);
  let hours = Number(document.querySelector('#hours').value);

  let overTime1 = salary * 1.5;
  let overTime2 = salary * 2;
  
  let answer = document.querySelector('#answer');
  
  let result;
  if(hours <= 7) {
    result = salary * hours;
  } else if (hours > 7 && hours <= 9) {
    result = salary * 7 + overTime1 * (hours -7);
  } else if (hours > 9) {
    result = salary * 7 + overTime1 * 2 + overTime2 * (hours - 9);
  }

  answer.textContent = `Your salary today is ${result} €`;
}
 
