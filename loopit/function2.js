function askToContinue() {
  let i = 0;
  let sum = 0;
  let numbers = [];
  while (true) {
    let userInput = parseFloat(prompt("Anna Numero?"));

    if (isNaN(userInput)) {
      console.log("syötä validit kirjaimet");
      continue;
    }
    sum += userInput;
    i++;
    numbers.push(userInput);
    let ContinueInput = prompt("Halautko jatkaa?");
    if (ContinueInput === "k") {
      continue;
    }

    if (ContinueInput === "e") {
      break;
    } else {
      alert("enter k tai e");
    }
  }
  let average = sum / i;
  console.log("numeroiden keskiarvo: " + average);
}
askToContinue();
