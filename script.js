// Accordion-style dropdown toggle
document.querySelectorAll(".nav-button").forEach(button => {
  button.addEventListener("click", () => {
    const pageId = button.id.replace("-btn", "");
    const section = document.getElementById(pageId + "-content");

    // Collapse other sections
    document.querySelectorAll(".content-section").forEach(s => {
      if (s !== section) s.classList.remove("active");
    });
    document.querySelectorAll(".nav-button").forEach(b => {
      if (b !== button) b.classList.remove("active");
    });

    // Toggle current section
    section.classList.toggle("active");
    button.classList.toggle("active");

    // Animate cards if opened
    if (section.classList.contains("active")) {
      const cards = section.querySelectorAll(".content-card");
      cards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.15}s`;
        card.classList.add("active");
      });
    }
  });
});

// Show Attractions by default
window.onload = () => {
  document.getElementById("attractions-btn").click();
};
