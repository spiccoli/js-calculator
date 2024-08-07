const display = document.getElementById("htmldisplay");

// Automatically clear the display if it shows an error or is undefined
setInterval(errorCheck, 700);

function errorCheck() {
    if (display.value === "Error" || display.value === undefined) {
        clearDisplay();
    }
}

function insertToDisplay(character) {
    display.value += character;
    display.scrollLeft = display.scrollWidth;
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    try {
        const result = eval(display.value);
        if (Math.abs(result) >= 1e7) {
            // Convert to scientific notation with 2 decimal places
            display.value = result.toExponential(2);
        } else {
            display.value = result;
        }
        // Scroll to the end of the input after calculation
        display.scrollLeft = display.scrollWidth;
    } catch (error) {
        display.value = "Error";
    }
}

// Listen for Backspace or Delete key presses
document.addEventListener("keydown", (event) => {
    if (event.key === "Backspace" || event.key === "Delete") {
        handleBackspace();
    }
});

function handleBackspace() {
    // Remove the last character from the display
    display.value = display.value.slice(0, -1);
}