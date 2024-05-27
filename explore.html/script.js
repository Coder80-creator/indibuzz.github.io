document.addEventListener("DOMContentLoaded", function() {
    // Function to handle search functionality
    const searchInput = document.querySelector('.search-container input[type="search"]');
    const searchButton = document.querySelector('.search-container button[type="submit"]');

    searchButton.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default form submission behavior
        const searchTerm = searchInput.value.trim(); // Get the search term

        // Perform search operation (e.g., fetch search results from a server)
        if (searchTerm !== '') {
            // Example: Perform AJAX request to fetch search results
            fetch(`https://api.example.com/search?q=${searchTerm}`)
                .then(response => response.json())
                .then(data => {
                    // Display search results on the page (e.g., update DOM elements)
                    console.log('Search results:', data);
                })
                .catch(error => console.error('Error fetching search results:', error));
        }
    });

    // You can add more JavaScript functionality here, such as:
    // - Handling clicks on blog posts to show full content
    // - Implementing pagination for blogs, news, or discussions
    // - Adding functionality to join discussions
    // - Fetching more videos dynamically
    // - etc.
});
