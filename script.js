let currentSection = "attractions"; // default section

function togglePage(pageId) {
    if (currentSection === pageId) return; // do nothing if same button clicked

    // Close previous section
    const prevSection = document.getElementById(currentSection + "-content");
    const prevButton = document.getElementById(currentSection + "-btn");
    if (prevSection) {
        prevSection.classList.remove("active");
        // Remove active from cards
        prevSection.querySelectorAll(".content-card").forEach(card => {
            card.classList.remove("active");
            card.style.animationDelay = "0s";
        });
    }
    if (prevButton) prevButton.classList.remove("active");

    // Open new section
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
