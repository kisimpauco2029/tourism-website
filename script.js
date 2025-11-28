let currentSection = "attractions"; // default open section

function togglePage(pageId) {
    const allSections = document.querySelectorAll(".content-section");
    const allButtons = document.querySelectorAll(".nav-button");

    if (currentSection !== pageId) {
        // Close previous
        document.getElementById(currentSection + "-content").classList.remove("active");
        document.getElementById(currentSection + "-btn").classList.remove("active");

        // Open selected
        const selectedSection = document.getElementById(pageId + "-content");
        const selectedButton = document.getElementById(pageId + "-btn");
        selectedSection.classList.add("active");
        selectedButton.classList.add("active");

        // Animate content cards if any
        const cards = selectedSection.querySelectorAll(".content-card");
        cards.forEach((card, index) => {
            card.style.animationDelay = `${index * 0.15}s`;
            card.classList.add("active");
        });

        currentSection = pageId;
    }
}

// Show default section on load
window.onload = () => {
    togglePage(currentSection);
};
