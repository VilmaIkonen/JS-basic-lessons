function calculate() {
  let price = Number(document.querySelector('#price').value);
  let cash = Number(document.querySelector('#cash').value);
  let answer = document.querySelector('#answer');
  let solution = document.querySelector('#solution');

  let litres = Math.floor(cash/price);
  let text;

  litres >= 10 
    ? (text = 'Bon voyage!') 
    : (text = 'Stay put');

  // if (litres >= 10) {
  //   text = 'Bon voyage!'
  // }
  // else {
  //   text = 'Stay put'
  // }

  answer.textContent = `You can buy ${litres} litres gasoline`
  solution.textContent = text;
}



function cash() {}

const button = document.getElementsByTagName('button');


// ******************** //

// function sayHello() {
//   alert('Hello, welcome to gasoline page!');
//   whoAreYou();
// }

// function whoAreYou() {
//   let yourName = prompt('What is you name?');
//   greeting(yourName);
// }

// function greeting(name) {
//   document.write(`Hello ${name}!`);
// }

// sayHello();