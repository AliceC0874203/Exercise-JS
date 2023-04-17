function checkGuess() {
    // Generate a random number between 0 and 9
    const randomNumber = Math.floor(Math.random() * 10);
  
    // Get the selected number from the dropdown list
    const selectedNumber = document.getElementById("number-list").value;
  
    // Check if the guess is correct and display an alert message
    if (selectedNumber == randomNumber) {
      alert("Congratulations! Your guess is correct.");
    } else {
      alert("Sorry, your guess is incorrect. The number was " + randomNumber + ".");
    }
  }
  