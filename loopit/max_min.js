function findMinMax() {
  let amount = parseInt(prompt("Kuinka monta numeroa haluat syöttää?"));
  let numbers = [];

  for (let i = 0; i < amount; i++) {
    let num = parseFloat(prompt("Enter number " + (i + 1) + ":"));
    if (!isNaN(num)) {
      numbers.push(num);
    } else {
      alert("That's not a number");
      i--;
    }
  }

  let max = Math.max(...numbers);
  let min = Math.min(...numbers);

  console.log("Min:", min);
  console.log("Max:", max);
}

findMinMax();
