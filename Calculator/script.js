let display = document.getElementById("display");

function appendToDisplay(value) {
    display.innerText += value;
}

function clearDisplay() {
    display.innerText = "";
}

function calculateResult() {
    try {
        let result = eval(display.innerText);
        display.innerText = result;
    } catch (error) {
        display.innerText = "Error";
    }
}
