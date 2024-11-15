// Get the display element from the HTML
const display = document.getElementById("htmldisplay");

// Initialize memory to zero
let memory = 0;

// Function to insert a character into the display
function insertToDisplay(character) {
    display.value += character;
    display.scrollLeft = display.scrollWidth;
}

// Function to clear the display
function clearDisplay() {
    display.value = "";
}

// Function to perform the calculation
function calculate() {
    try {
        const expression = display.value;
        // Ensure the expression is not empty
        if (expression) {
            const result = evaluateExpression(expression);
            display.value = formatResult(result);
            // Scroll to the end of the input after calculation
            display.scrollLeft = display.scrollWidth;

            // Store the result in memory
            memory = result;
        }
    } catch (error) {
        display.value = "Error"; // Display an error message
    }
}

// Safe function to evaluate the expression
function evaluateExpression(expression) {
    const sanitizedExpression = expression.replace(/[^-()\d/*+.]/g, ''); // Sanitize input
    return Function(`'use strict'; return (${sanitizedExpression})`)();
}

// Function to format the result
function formatResult(result) {
    if (Math.abs(result) >= 1e7) {
        return result.toExponential(2); // Convert to scientific notation with 2 decimal places
    }
    return result;
}

// Function to handle backspace key
function handleBackspace() {
    display.value = display.value.slice(0, -1); // Remove the last character from the display
}

// Listen for Backspace or Delete key presses
document.addEventListener("keydown", (event) => {
    if (event.key === "Backspace" || event.key === "Delete") {
        handleBackspace();
    }
});

// Function to add the result to memory
function addToMemory(result) {
    memory += result + ", ";
}
