function showFruits() {
  const numberOfFruits = Number.parseInt(document.getElementById("fruits").value);
  var numberOfDays = Number.parseInt(document.getElementById("days").value);
  var totalFruit = 0;

  for (var i = 1; i <= numberOfDays; i++) {
    totalFruit += numberOfFruits;
    if (i === 3) {
      alert("The number of fruits on the 3rd day is " + totalFruit);
    } else if (i === 5) {
      alert("The number of fruits on the 5th day is " + totalFruit);
    }
  }
}
