function Arvosana(points) {
  if (points >= 90) {
    console.log("Kiitettävä");
  } else if (90 > points && points > 80) {
    console.log("Hyvä");
  } else {
    console.log("Hylätty");
  }
}

Arvosana(90);
