// Get the button and section elements
const button = document.getElementById('toggle-skills');
const sections = document.getElementById('skills');
// Ensure both elements exist before adding the event listener
if (button && sections) {
    button.addEventListener('click', () => {
        sections.style.visibility = "hidden";
    });
}
export {};
