// Wait for the document to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
    // Find the button element by its ID
    var button = document.getElementById("signInButton");

    // Define a variable to track the button state
    var isClicked = false;

    // Add a click event listener to the button
    button.addEventListener("click", function () {
        // Toggle the button state
        isClicked = !isClicked;

        // Toggle the button text
        if (isClicked) {
            button.innerText = "Close";
            button.classList.remove("signin-button");
            button.classList.add("danger-color");

        } else {
            button.innerText = "Sign In";
            button.classList.remove("danger-color");
            button.classList.add("signin-button");
        }
    });
});

const inputEmail = document.getElementById("exampleFormControlInput1");
const inputPassword = document.getElementById("exampleFormControlInput2");

let inputE = inputEmail.value;
let inputP = inputPassword.value;

window.addEventListener("resize", function() {
    inputEmail.value = inputE;
    inputPassword.value = inputP;
})
