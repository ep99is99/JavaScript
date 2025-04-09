function getAnimalDescription() {
  favoriteAnimal = prompt("kerro lemmikkieläimesi");

  switch (favoriteAnimal) {
    case "fox":
      console.log("Fox are wise!");
      break;
    case "cat":
      console.log("cats are fast");
      break;

    case "dog":
      console.log("dogs are cute");
      break;

    default:
      console.log("kaikki eläimet ovat mahtavia");
  }
}

getAnimalDescription();
