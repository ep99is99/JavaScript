function cleanAndTransform(str) {
  return str.trim().toLowerCase().replace("powerful", "amazing  ");
}
console.log(cleanAndTransform("Javascript is powerful"));
