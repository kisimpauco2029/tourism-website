let currentSection = "attractions";

function togglePage(pageId) {
    const allSections = document.querySelectorAll(".content-section");
    const allButtons = document.querySelectorAll(".nav-button");

    if (currentSection !== pageId) {
        const previousSection = document.getElementById(currentSection + "-content");
        const previousButton = document.getElementById(currentSection + "-btn");
        previousSection.classList.remove("active");
        previousButton.classList.remove("active");

        const selectedSection = document.getElementById(pageId + "-content");
        const selectedButton = document.getElementById(pageId + "-btn");
        selectedSection.classList.add("active");
        selectedButton.classList.add("active");

        const cards = selectedSection.querySelectorAll(".content-card");
        cards.forEach((card, index) => {
            card.style.animationDelay = `${index * 0.15}s`;
            card.classList.add("active");
        });

        currentSection = pageId;
    }
}

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
