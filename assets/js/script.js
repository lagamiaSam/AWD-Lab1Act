// Get the shoe size from the URL
let urlParams = new URLSearchParams(window.location.search);
let shoeSize = urlParams.get("size");

// Get elements from HTML
let sizeDisplay = document.getElementById("sizeDisplay");
let message = document.getElementById("message");
let sizeList = document.getElementById("sizeList");

// Check if shoe size is entered
if (shoeSize) {
    sizeDisplay.textContent = "You entered size: " + shoeSize;
} else {
    sizeDisplay.textContent = "No shoe size entered.";
}

// List of available sizes
let availableSizes = [8, 9, 10.5, 11, 12, 14, 15];

// Check if size is available
if (availableSizes.includes(parseInt(shoeSize))) {
    message.textContent = "Good news! We have your size.";
} else {
    message.textContent = "Sorry, your size is not available.";
}

// Show available sizes
for (let i = 0; i < availableSizes.length; i++) {
    let listItem = document.createElement("li");
    listItem.textContent = "Size " + availableSizes[i];
    sizeList.appendChild(listItem);
}
