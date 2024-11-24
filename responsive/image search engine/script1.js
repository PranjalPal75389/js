console.log("hello");

// Correcting element selection based on the HTML structure
const searchBox = document.querySelector(".search-box"); // Corrected for class selector
const showMore = document.querySelector("#show-more-btn"); // Corrected for ID selector
const submitBtn = document.querySelector(".submit-btn"); // Corrected for class selector
const searchForm = document.querySelector("#search-form");
const searchResult = document.querySelector("#search-result");

let keyword = "";
let page = 1;
const accessKey = "mR4bZ2WI2UPvUrYZZm80OlQzq0d2bXHCMK9lsrz_fbc";

async function searchImage() {
    // Get the keyword from the search box
    keyword = searchBox.value.trim();  // Added trim() to remove leading/trailing whitespace

    if (!keyword) {
        alert("Please enter a keyword to search for images.");
        return;  // Early exit if keyword is empty
    }

    // Build the URL for the API call
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (response.ok) {
            console.log(data);  // Log the response data
            displayImages(data); // Call function to display images
            showMore.style.display = 'block';  // Show "Show More" button after first search
        } else {
            alert("Failed to fetch images. Please try again.");
        }
    } catch (error) {
        console.error("Error fetching data:", error);
        alert("An error occurred while fetching images.");
    }
}

function displayImages(data) {
    if (page === 1) {
        // Clear the previous search results when a new search is done
        searchResult.innerHTML = '';
    }

    data.results.forEach((image) => {
        const img = document.createElement("img");
        img.src = image.urls.small;
        img.alt = image.alt_description || "Unsplash Image";
        img.classList.add("search-image");  // Optional: Add a class for styling
        searchResult.appendChild(img);
    });
}

// Reset page to 1 on form submit and initiate search
searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    page = 1;  // Reset page number for a new search
    searchImage();
});

// Show more button functionality: Increment page number and fetch more images
showMore.addEventListener("click", () => {
    page++; // Increment the page number
    searchImage(); // Fetch next set of images
});
