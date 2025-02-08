// Huvudfunktionen (Arrow function)
const mainFunction = () => {
    defineConstants();
    document.getElementById("hello").innerText = returnHelloWorld();
    logMessage();
};

// Funktion 1: Definiera fem 'const'-variabler (Arrow function)
const defineConstants = () => {
    const fname = "Moise";
    const lname = "Khonde";
    const age = 35;
    const city = "Stockholm";
    const country = "Sverige";

    document.getElementById("variables").innerText =
        `Namn: ${fname} ${lname}, Ålder: ${age}, Stad: ${city}, Land: ${country}`;
};


// Funktion 2: Tar in två heltal som parametrar och returnerar summan (Arrow function)
const sumNumbers = (a, b) => a + b;

// Funktion 3: Skriver ut en 'console.log' text (Arrow function)
const logMessage = () => {
    document.getElementById("message").innerText = "Detta är en meddelandelogg från logMessage-funktionen.";
};

// Funktion 4: Returnerar "Hello World" (Arrow function)
const returnHelloWorld = () => "Hello World";

// Ny funktion: Låter användaren skriva in två tal och beräkna summan
const calculateSum = () => {
    const num1 = parseInt(document.getElementById("num1").value);
    const num2 = parseInt(document.getElementById("num2").value);
    
    if (!isNaN(num1) && !isNaN(num2)) {
        document.getElementById("sum").innerText = `Summan av ${num1} och ${num2} är: ${sumNumbers(num1, num2)}`;
    } else {
        document.getElementById("sum").innerText = "Vänligen skriv in två giltiga nummer!";
    }
};

// Kör `mainFunction()` när sidan laddas
window.onload = mainFunction;
