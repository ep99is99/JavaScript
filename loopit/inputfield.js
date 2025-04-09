let luvut = 0;

for (let abdi = 0; abdi < 20; abdi++) {
  const luku = parseFloat(prompt("syötä 20 numeroa"));
  if (isNaN(luku)) {
    alert("et ole syöttänyt kelvollista lukua");
    continue;
  }
  if (luku % 2 === 0) {
    luvut++;
  }
  console.log("parillisia lukuja " + luvut);
}
