function calculateAverageUntilZero() {
  let i = 0;
  let sum = 0;

  while (true) {
    syöte = parseFloat(prompt("syötä numeroita"));

    if (syöte === 0) {
      break;
    }
    if (isNaN(syöte)) {
      alert("syötä vain numeroita");
      continue;
    }
    sum += syöte;
    i++;
  }
  let average = sum / i;
  console.log(average);
}

calculateAverageUntilZero();
