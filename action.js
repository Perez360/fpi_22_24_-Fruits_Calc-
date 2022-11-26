function showFruits() {
    let numberOfFruits = document.getElementById("fruits").value;
    let numberOfDays = document.getElementById("days").value;
    let totalFruit = 0;
    
    if(numberOfFruits && numberOfDays){
        numberOfFruits = Number.parseInt(numberOfFruits);
        numberOfDays = Number.parseInt(numberOfDays);
        if(numberOfDays<5){
           alert("Minimum number of days should be 5.");
        }else{
            for (var i = 1; i <= numberOfDays; i++) {
                totalFruit += numberOfFruits;
                if (i === 3) {
                    alert("The number of fruits on the third day is " + totalFruit);
                } else if (i === 5) {
                    alert("The number of fruits on the fifth day is " + totalFruit);
                }
            }
        }
    }else{
        alert("One or more field(s) are empty.");     
    }
}