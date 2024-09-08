
const button = document.getElementById('toggle-skills');
const sections = document.getElementById('skills');


if (button && sections) {
    button.addEventListener('click', () => {
        sections.style.visibility = "hidden";
    });

} 
