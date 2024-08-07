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
        const result = eval(display.value); // Evaluate the expression
        if (Math.abs(result) >= 1e7) {
            // Convert to scientific notation with 2 decimal places
            display.value = result.toExponential(2);
        } else {
            display.value = result;
        }
        // Scroll to the end of the input after calculation
        display.scrollLeft = display.scrollWidth;

        // Store the result in memory
        addToMemory(result);
    } catch (error) {
        display.value = "Error"; // Display an error message
    }
}

// Function to handle backspace key
function handleBackspace() {
    // Remove the last character from the display
    display.value = display.value.slice(0, -1);
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
