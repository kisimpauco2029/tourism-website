let currentSection = "attractions"; // default section

function togglePage(pageId) {
    if (currentSection === pageId) return; // do nothing if same button clicked

    // Close previous
    const prevSection = document.getElementById(currentSection + "-content");
    const prevButton = document.getElementById(currentSection + "-btn");
    if (prevSection) prevSection.classList.remove("active");
    if (prevButton) prevButton.classList.remove("active");

    // Open selected
    const newSection = document.getElementById(pageId + "-content");
    const newButton = document.getElementById(pageId + "-btn");
    if (newSection) newSection.classList.add("active");
    if (newButton) newButton.classList.add("active");

    // Animate cards
    if (newSection) {
        const cards = newSection.querySelectorAll(".content-card");
        cards.forEach((card, index) => {
            card.style.animationDelay = `${index * 0.15}s`;
            card.classList.add("active");
        });
    }

    currentSection = pageId;
}

// Show default section on page load
window.onload = () => togglePage(currentSection);
