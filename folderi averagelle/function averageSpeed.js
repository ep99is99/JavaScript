function averageSpeed() {
  while (true) {
    let distance = prompt("Anna etäisyys kilometreinä.");

    if (distance == 0) {
      break;
    }
    if (isNaN(distance) || distance < 0) {
      continue;
    }
    let time;
    time = prompt("Anna aika tunteina.");

    alert(distance / time + " kilmetriä tunnissa");
  }
}
averageSpeed();
