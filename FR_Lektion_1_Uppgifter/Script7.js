const smartTimeout = (delayInMilliseconds, message, repeatCount = 1, callback) => {
    const messageContainer = document.getElementById("messages"); // Hämta HTML-elementet

    // Validering av parametrar
    if (delayInMilliseconds <= 0) {
        messageContainer.innerHTML = "❌ Fel: Fördröjningen måste vara större än 0 millisekunder.";
        return;
    }

    if (!Number.isInteger(repeatCount) || repeatCount < 1) {
        repeatCount = 1; // Om ogiltigt värde, sätt till standardvärdet 1
    }

    let count = 0;

    const logMessage = () => {
        if (count < repeatCount) {
            messageContainer.innerHTML += `<p>${message}</p>`; // Lägg till meddelande i HTML
            count++;
            setTimeout(logMessage, delayInMilliseconds);
        } else {
            if (callback) {
                callback(); // Kör callback om den finns
            } else {
                messageContainer.innerHTML += `<p style="color: green;">✅ Alla meddelanden har skickats!</p>`;
            }
        }
    };

    setTimeout(logMessage, delayInMilliseconds);
};

// Funktion som körs när knappen klickas
function startSmartTimeout() {
    document.getElementById("messages").innerHTML = "⌛ Startar..."; // Nollställ meddelandelistan

    smartTimeout(1000, "🔔 Detta är ett testmeddelande!", 5, () => {
        document.getElementById("messages").innerHTML += `<p style="color: blue;">🎉 Alla loggningar är klara!</p>`;
    });
}
