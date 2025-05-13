// Get references to the elements
const button = document.getElementById("animateButton");
const box = document.getElementById("animatedBox");

// Check localStorage for user preference
if (localStorage.getItem("animationEnabled") === "true") {
    box.classList.add("fadeInAnimation");  // Apply animation on page load if preferred
}

// Function to toggle animation and store preference
function toggleAnimation() {
    // Check if animation is currently active
    const isAnimated = box.classList.contains("animate");

    if (isAnimated) {
        box.classList.remove("animate");
        localStorage.setItem("animationEnabled", "false");  // Disable animation
    } else {
        box.classList.add("animate");
        localStorage.setItem("animationEnabled", "true");  // Enable animation
    }
}

// Add event listener to the button
button.addEventListener("click", () => {
    toggleAnimation();  // Trigger the animation
});
