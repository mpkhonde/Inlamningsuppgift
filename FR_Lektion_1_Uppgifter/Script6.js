const delayedMessage = (millisecondsDelay, message, callback) => {
    setTimeout(() => {
        document.getElementById("message").textContent = message; 
        if (callback) {
            callback();
        }
    }, millisecondsDelay);
};

function startDelay() {
    delayedMessage(2000, "Hej, detta är ett fördröjt meddelande!", () => {
        alert("Meddelandet har nu skrivits ut!");
    });
}
