function mainFunction() {
    defineConstants();
    document.getElementById("sum").innerText = "Summan av 5 och 3 är: " + sumNumbers(5, 3);
    logMessage();
    document.getElementById("hello").innerText = returnHelloWorld(); // Fixat stavfel
}

function defineConstants() {
    const fname = "Moise";
    const lname = "Khonde";
    const age = 35;
    const city = "Stockholm";
    const country = "Sverige";
    const hobby = "Programmering";

    // Visa resultatet i HTML (Använd backticks ` istället för enkla ' ' citattecken)
    document.getElementById("variables").innerText =
        `Namn: ${fname} ${lname}, Ålder: ${age}, Stad: ${city}, Land: ${country}, Hobby: ${hobby}`;
}

function sumNumbers(a, b) {
    return a + b;
}

function logMessage() {
    document.getElementById("message").innerText = "Detta är en meddelandelogg från logMessage-funktionen.";
}

function returnHelloWorld() {
    return "Hello World!";
}

// Starta programmet när sidan laddas
window.onload = mainFunction;
