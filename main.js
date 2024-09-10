const button = document.getElementById('toggle-skills');
const sections = document.getElementById('skills');
if (button && sections) {
    sections.style.display = "block";
    button.addEventListener('click', () => {
        if (sections.style.display === "block") {
            sections.style.display = "none";
        }
        else {
            sections.style.display = "block";
        }
    });
}

