const disp = document.getElementById("display");

function appendtoDisplay(input) {
    disp.value += input;
}

function clearDisplay() {
    disp.value = "";
}

function calculate() {
    try {

        // Check for division by zero
        if (/\b\/0+(?!\d)/.test(disp.value)) {
            disp.value = "Can't divide by 0";
            disp.style.fontSize = "2rem";
            return;
        }

        disp.value = eval(disp.value);
    } catch (error) {
        disp.value = "Error";
    }
}
