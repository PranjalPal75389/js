const categoryContainers = document.querySelectorAll(".category-container");
const categoryContainerParent = document.querySelectorAll(".category-container-parent");
const chooseCategory = document.querySelector(".choose-category");
function defaultActive() {
    // Reset all child elements' background color and text color
    Array.from(chooseCategory.childNodes).forEach(chooseDefault => {
        // Check if the node is an element node (not text or whitespace)
        if (chooseDefault.nodeType === Node.ELEMENT_NODE) {
            chooseDefault.style.backgroundColor = "yellow";  // Default background color
            chooseDefault.style.color = "black";  // Default text color
        }
    });
}

Array.from(chooseCategory.childNodes).forEach(choose => {
    // Ensure we're only adding event listeners to element nodes (not text nodes)
    if (choose.nodeType === Node.ELEMENT_NODE) {
        choose.addEventListener("click", (e) => {
            // Reset the styles for all options
            defaultActive();

            // Set the background and text color of the clicked element
            choose.style.backgroundColor = "black";  // Active background color
            choose.style.color = "yellow";  // Active text color

            // Handle the category click and pass the corresponding category value
            haddleClick(choose.textContent.trim());  // Assuming text content is the ID of the category
        });
    }
});

function haddleClick(chooseValue) {
    // Get the corresponding category container using the text content (ID)
    let showCategory = document.querySelector(`#${chooseValue}`);

    // Remove the active category class from all category containers
    categoryContainers.forEach(categoryContainer => {
        categoryContainer.classList.remove("active-category");
    });

    // Add the active category class to the clicked category's container
    if (showCategory) {
        showCategory.classList.add("active-category");
        console.log(showCategory);
    }
}
