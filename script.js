let currentDisplay = "0" ;
let resultDisplay = false ; 

function appendToDisplay(value) {
    if (currentDisplay === "0" || resultDisplay) {
        currentDisplay = value;
    }
    else{
        currentDisplay += + value;
    }
    resultDisplay = false;
    updateDisplay();
}

//this function will update the display with the current content
function updateDisplay() {
    const displayElement = document.getElementById("display")
    displayElement.textContent = currentDisplay;
}

//this function will calculate and display the result 
function calculateResult(){
    try{
        const result = eval(currentDisplay);
        // currentDisplay +="\n" +result.toString();
        currentDisplay += "=" + result.toString() ;
        updateDisplay();
    }
    catch (error) {
        currentDisplay += "\nError";
        updateDisplay();
    }
    resultDisplay = true;
}

//this function will clear the last element from the current display
function clearLastElement() {
    currentDisplay = currentDisplay.slice(0, -1);
    if (currentDisplay === ""){
        currentDisplay = "0";
    }
    updateDisplay();
}

//this function will clear the entire display
function clearDisplay() {
    currentDisplay = "0";
    resultDisplay = false;
    updateDisplay();
}