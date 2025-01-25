// Get the shoe size from the URL
let urlParams = new URLSearchParams(window.location.search);
let shoeSize = urlParams.get("size");

// Get elements from HTML
let aboutSection = document.getElementById("about");
let sizeDisplay = document.getElementById("sizeDisplay");
let message = document.getElementById("message");
let sizeList = document.getElementById("sizeList");

// List of available sizes
let availableSizes = [8, 9, 10.5, 11, 12, 14, 15];

// Check if shoe size is entered
if (shoeSize) {
    aboutSection.style.display = "block"; // Show the section
    sizeDisplay.textContent = "You entered size: " + shoeSize;

    // Check if size is available
    if (availableSizes.includes(parseInt(shoeSize))) {
        message.textContent = "Good news! We have your size.";
    } else {
        message.textContent = "Sorry, your size is not available.";
    }

    // Show available sizes
    sizeList.innerHTML = ""; // Clear previous list
    availableSizes.forEach(size => {
        let listItem = document.createElement("li");
        listItem.textContent = "Size " + size;
        sizeList.appendChild(listItem);
    });
}
