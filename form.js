
// Form Validation
function validateForm() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
     
    // Check if fields are filled
    if (name === "" || email === "") {
        alert("Please fill in all fields.");
        return false;
    }

    // Validate email format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

   
    return true;
}
const ombreColors = [
    "#000000", "#0a0a0a", "#141414", "#1e1e1e", "#282828", "#323232", "#3c3c3c",
    "#464646", "#505050", "#5a5a5a", "#646464", "#6e6e6e", "#787878", "#828282",
    "#8c8c8c", "#969696", "#a0a0a0", "#aaaaaa", "#b4b4b4", "#bebebe",
    "#bebebe", "#b4b4b4", "#aaaaaa", "#a0a0a0", "#969696", "#8c8c8c", "#828282",
    "#787878", "#6e6e6e", "#646464", "#5a5a5a", "#505050", "#464646", "#3c3c3c",
    "#323232", "#282828", "#1e1e1e", "#141414", "#0a0a0a", "#000000"
];
let colorIndex = 0;
const transitionTime = 30;

function changeBackgroundOmbre() {

    const gradient = `linear-gradient(180deg, ${ombreColors.join(', ')})`;
    document.body.style.background = gradient;

    const firstColor = ombreColors.shift();
    ombreColors.push(firstColor);
}
setInterval(changeBackgroundOmbre, transitionTime);
