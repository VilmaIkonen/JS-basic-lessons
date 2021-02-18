function askAge() {
  let age = Number(document.querySelector('#age').value);
  let answer = document.querySelector('#answer');
  
  let text;
  if(age < 18) {
    text = 'Too young to join army'
  } else if (age >= 18 && age <27) {
    text = 'You can join army'
  } else if (age >= 27 && age <41) {
    text = 'You can join the reserve'
  } else if (age >= 41 && age <55) {
    text = 'You can join the backup reserve'
  } else {
    text = 'Too old to join army'
  }

  answer.textContent = text;
}