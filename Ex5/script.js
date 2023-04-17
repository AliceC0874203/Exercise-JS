function addItem() {
    // Get the user's input from the input element
    const input = document.getElementById("item-input").value;

    // Create a new list item element and add it to the list
    const listItem = document.createElement("li");
    listItem.textContent = input;
    document.getElementById("item-list").appendChild(listItem);

    // Add event listeners to the new list item element
    listItem.addEventListener("click", toggleDone);
    listItem.addEventListener("mouseover", changeColor);
    listItem.addEventListener("mouseout", changeColor);
}

function toggleDone() {
    // Toggle the "done" class on the clicked list item element
    this.classList.toggle("done");
}

function changeColor() {
    // Change the font color of the list item element
    this.style.color = "blue";

    // Change the font color back to black when the mouse leaves the element
    this.addEventListener("mouseout", function () {
        this.style.color = "black";
    });
}
