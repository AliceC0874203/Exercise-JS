function checkPerfectSquare() {
    // Get the user's input from the input element
    const input = document.getElementById("number-input").value;
  
    // Convert the input to a number and check if it's a perfect square using the Math.sqrt() function
    const sqrt = Math.sqrt(Number(input));
    if (Number.isInteger(sqrt)) {
      document.getElementById("result").textContent = input + " is a perfect square.";
    } else {
      document.getElementById("result").textContent = input + " is not a perfect square.";
    }
  }
  