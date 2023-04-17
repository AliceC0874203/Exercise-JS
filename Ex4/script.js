// Define the correct password
const correctPassword = "password123";

// Ask the user for their password until the correct password is entered
let enteredPassword = "";
while (enteredPassword !== correctPassword) {
  enteredPassword = prompt("Enter your password:");
}

// Show an alert message when the correct password is entered
alert("Welcome! Your password is correct.");
