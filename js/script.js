// Optional: Add interactivity for images (click to view larger version)
document.querySelectorAll('.gallery img').forEach(image => {
    image.addEventListener('click', () => {
        // Create a modal to show the enlarged image
        const modal = document.createElement('div');
        modal.classList.add('modal');
        modal.innerHTML = `<img src="${image.src}" alt="${image.alt}" class="modal-img">
                          <span class="close-btn">&times;</span>`;
        document.body.appendChild(modal);

        // Close modal when clicked
        modal.querySelector('.close-btn').addEventListener('click', () => {
            modal.remove();
        });
    });
});


document.addEventListener("DOMContentLoaded", function() {
    var links = document.querySelectorAll("nav ul li a");
    var currentPage = window.location.pathname.split("/").pop(); // Get the current page name

    links.forEach(function(link) {
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active"); // Add the 'active' class to the current page link
        } else {
            link.classList.remove("active"); // Remove 'active' class from other links
        }
    });
});
document.addEventListener("DOMContentLoaded", function() {
    // Fade-in effect when the page is loaded
    document.body.classList.add("fade-in");

    // Add event listener to handle page navigation with fade-out and fade-in
    const links = document.querySelectorAll('a');

    links.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent the default action (instant navigation)

            const href = this.getAttribute('href'); // Get the link destination

            // Apply fade-out effect
            document.body.classList.add("fade-out");

            // Wait for the fade-out animation to finish before navigating
            setTimeout(function() {
                window.location = href; // Change the page after the fade-out is complete
            }, 1000); // The timeout should match the duration of the fade-out animation (1s in this case)
        });
    });

    // After the new page is loaded, fade-in effect is triggered automatically
    window.addEventListener('load', function() {
        document.body.classList.remove("fade-out"); // Remove the fade-out class if it was added
        document.body.classList.add("fade-in"); // Add fade-in class for the transition
    });
});
