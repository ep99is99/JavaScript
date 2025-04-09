function generateRandomNumber(num1, num2) {
  num1 = Math.random();
  num2 = Math.random();
  let tulos = 10 * (num1 + num2);

  console.log(Math.floor(tulos));
}
generateRandomNumber();
