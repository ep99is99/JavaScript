function Logevennumbers(numerot = 1) {
  while (numerot <= 100) {
    if (numerot % 2 == 0) {
      console.log(numerot);
    }
    numerot++;
  }
}

Logevennumbers();
