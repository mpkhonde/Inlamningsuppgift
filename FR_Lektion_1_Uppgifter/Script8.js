let timeoutId = null; 
let isPaused = false; 
let count = 0; 
let totalRepeats = 1; 
let delay = 1000; 
let message = ""; 

const smartTimeout = (delayInMilliseconds, msg, repeatCount = 1, callback) => {
    const messageContainer = document.getElementById("messages");
    messageContainer.innerHTML = ""; 
    timeoutId = null; 
    isPaused = false; 

    // ** Validering enligt din bild **
    if (!Number.isInteger(repeatCount) || repeatCount <= 0) {
        repeatCount = 1; 
    }
    if (typeof delayInMilliseconds !== "number" || delayInMilliseconds <= 0) {
        console.error("Error: Invalid delay!");
        messageContainer.innerHTML = `<p class="error">❌ Fel: Fördröjningen måste vara större än 0.</p>`;
        return;
    }

    // Spara globala värden
    delay = delayInMilliseconds;
    message = msg;
    totalRepeats = repeatCount;
    count = 0; 

    logMessage(callback);
};

// Funktion för att visa meddelanden med delay
const logMessage = (callback) => {
    if (count < totalRepeats && !isPaused) {
        document.getElementById("messages").innerHTML += `<p>${message}</p>`;
        count++;
        timeoutId = setTimeout(() => logMessage(callback), delay);
    } else if (count >= totalRepeats) {
       
        // Nollställ timeout-ID
        timeoutId = null; 
        if (callback && typeof callback === "function") {
            callback();
        } else {
            document.getElementById("messages").innerHTML += `<p class="success">✅ Alla meddelanden har skickats!</p>`;
        }
    }
};

// Starta processen
function startSmartTimeout() {
    if (timeoutId !== null) return; 

    const delayInput = parseInt(document.getElementById("delay").value);
    const messageInput = document.getElementById("message").value;
    const repeatInput = parseInt(document.getElementById("repeat").value);

    smartTimeout(delayInput, messageInput, repeatInput, () => {
        document.getElementById("messages").innerHTML += `<p class="success">🎉 Alla loggningar är klara!</p>`;
    });
}

// Pausar processen
function pauseSmartTimeout() {
    if (timeoutId !== null) {
        isPaused = true;
        document.getElementById("messages").innerHTML += `<p class="error">⏸️ Pausad...</p>`;
        clearTimeout(timeoutId);
        timeoutId = null;
    }
}

// Återupptar processen
function resumeSmartTimeout() {
    if (isPaused) {
        isPaused = false;
        document.getElementById("messages").innerHTML += `<p class="success">▶️ Återupptagen...</p>`;
        logMessage(() => {
            document.getElementById("messages").innerHTML += `<p class="success">🎉 Alla loggningar är klara!</p>`;
        });
    }
}

// Stoppar alla processer
function stopSmartTimeout() {
    if (timeoutId !== null) {
        clearTimeout(timeoutId);
        timeoutId = null;
    }
    isPaused = false;
    count = totalRepeats;
    document.getElementById("messages").innerHTML += `<p class="error">⛔ Upprepning stoppad!</p>`;
}
