// Javascript goes here

// Function to toggle Div 1 (onclick in HTML)
function toggleDiv1() {
    let div1 = document.getElementById("div1");
    if (div1.style.display === "none" || div1.style.display === "") {
        div1.style.display = "block";
        div1.style.backgroundColor = "lightblue"; // Change color when visible
    } else {
        div1.style.display = "none";
    }
}

// Toggle Div 2 (Event listener for Button 2)
document.addEventListener("DOMContentLoaded", function () {
    let div2 = document.getElementById("div2");
    document.getElementById("button2").addEventListener("click", function () {
        if (div2.style.display === "none") {
            div2.style.display = "block";
            div2.style.backgroundColor = "lightblue"; // Change color when visible
        } else {
            div2.style.display = "none";
        }
    });
});


