let currentSection = "attractions"; // default

function togglePage(pageId) {
    if (currentSection === pageId) return; // do nothing if the same button is clicked

    const previousSection = document.getElementById(currentSection + "-content");
    const previousButton = document.getElementById(currentSection + "-btn");
    previousSection.classList.remove("active");
    previousButton.classList.remove("active");

    const newSection = document.getElementById(pageId + "-content");
    const newButton = document.getElementById(pageId + "-btn");
    newSection.classList.add("active");
    newButton.classList.add("active");

    // Animate content cards
    const cards = newSection.querySelectorAll(".content-card");
    cards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.15}s`;
        card.classList.add("active");
    });

    currentSection = pageId;
}

// Show default section on load
window.onload = () => {
    const defaultButton = document.getElementById(currentSection + "-btn");
    const defaultSection = document.getElementById(currentSection + "-content");
    defaultSection.classList.add("active");
    defaultButton.classList.add("active");

    const cards = defaultSection.querySelectorAll(".content-card");
    cards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.15}s`;
        card.classList.add("active");
    });
};
