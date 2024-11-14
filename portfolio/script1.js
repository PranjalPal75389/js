// Select the necessary elements
const hamburger = document.querySelector(".fa-bars");
const closeIcon = document.querySelector(".fa-circle-xmark");
const navList = document.querySelector("nav ul");

// Function to open the menu
hamburger.addEventListener("click", () => {
    navList.style.display = "flex";  // Show the menu
    closeIcon.style.display = "block";  // Show the close icon
    hamburger.style.display = "none";  // Hide the hamburger icon
});

// Function to close the menu
closeIcon.addEventListener("click", () => {
    navList.style.display = "none";  // Hide the menu
    closeIcon.style.display = "none";  // Hide the close icon
    hamburger.style.display = "block";  // Show the hamburger icon again
});
