const calculate = () => {
  let height = Number(document.querySelector('#height').value);
  let weight = Number(document.querySelector('#weight').value);

  let BMI = weight / Math.pow(height, 2);
  
  let answer = document.querySelector('#answer');
  
  let result;
  if(BMI <18.5) {
    result = 'Underweight';
  } else if (BMI >= 18.5 && BMI <= 24.9) {
    result = 'Normal weight';
  } else if (BMI > 25 && BMI <29.9){
    result = 'Overweight'
  } else {
    result = 'Obese'
  }

  answer.textContent = result;
}
 
