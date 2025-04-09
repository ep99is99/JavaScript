function isEven(a) {
  let jakojäännös1 = a % 2;
  let tulos = jakojäännös1;

  if (jakojäännös1 == 0) {
    return true;
  } else {
    return false;
  }
}
console.log(isEven(355));
