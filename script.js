// Function to show the clicked section and hide other sections
function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('section').forEach(section => {
        section.style.display = 'none';
    });

    // Show the clicked section
    document.getElementById(sectionId).style.display = 'block';
}

// Add event listeners to navigation links to show corresponding sections
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetSectionId = this.getAttribute('href').substring(1); // Remove '#' from href

        // Show the clicked section and hide others
        showSection(targetSectionId);

        // Smooth scroll to the clicked section
        const target = document.getElementById(targetSectionId);
        window.scrollTo({
            top: target.offsetTop - 50,
            behavior: 'smooth'
        });
    });
});

// Show the initial section based on the hash in the URL
window.addEventListener('load', function() {
    const hash = window.location.hash.substring(1); // Remove '#' from hash
    if (hash) {
        showSection(hash);
    } else {
        // If no hash is present, show the first section by default
        showSection('about');
    }
});
