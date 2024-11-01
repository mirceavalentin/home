
const calculatorScreen = document.getElementById("calculatorScreen");

function appendToDisplay(input) 
{
    calculatorScreen.value += input;
}

function clearScreen() 
{
    calculatorScreen.value = ""; 
}

// Using math library in order to not use eval() in production code.
function calculate() 
{
    try 
    {
        calculatorScreen.value = math.evaluate(calculatorScreen.value);
    } 
    catch (error) 
    {
        calculatorScreen.value = "Error";
    }
}