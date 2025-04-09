function fahrenheit_to_Celcius(tulos) {
  let fahrenheit = parseFloat(prompt("syötä lämpötila fahrenheit"));
  if (isNaN(fahrenheit)) {
    console.log("Virhe : syötä kelvollinen numero.");
    return;
  }
  let celsius = ((fahrenheit - 32) * 5) / 9;
  console.log(`Lämpötila celcius asteina: ${celsius.toFixed(2)}
        °C`);
}

fahrenheit_to_Celcius();
