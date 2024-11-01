// Calculator instructions

const calculatorScreen = document.getElementById("calculatorScreen");

function appendToDisplay(input)
{
    calculatorScreen.value += input;
}

function clearScreen()
{
    calculatorScreen.value = ""; 
    // calculator screen is set to empty string.
}

function calculate()
{
    // error handling for the eval function
    try
    {
        calculatorScreen.value = eval(calculatorScreen.value);
    }
    catch(error)
    {
        calculatorScreen.value = "Error"
    }
}