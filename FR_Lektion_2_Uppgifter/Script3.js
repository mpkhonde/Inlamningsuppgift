// Frågor och svar med alternativ
const questions = [
    {
        question: "Vad är ett promise inom Fetch()?",
        answers: [
            { text: "Ett objekt som representerar ett asynkront värde", correct: true },
            { text: "En funktion som körs synkront", correct: false },
            { text: "En loop som hämtar data", correct: false }
        ]
    },
    {
        question: "Hur kan vi bearbeta fetch asynkront?",
        answers: [
            { text: "Genom att använda async/await eller .then()", correct: true },
            { text: "Genom att skriva en for-loop", correct: false },
            { text: "Genom att använda JSON.stringify()", correct: false }
        ]
    },
    {
        question: "Går det att hämta specifika värden inom ett objekt?",
        answers: [
            { text: "Ja, genom att använda dot notation (objekt.nyckel)", correct: true },
            { text: "Nej, hela objektet måste hämtas", correct: false },
            { text: "Endast genom att konvertera det till en array", correct: false }
        ]
    }
];

let currentQuestionIndex = 0;
const questionText = document.getElementById("question-text");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("nextQuestion");

// Ladda första frågan
function loadQuestion() {
    let currentQuestion = questions[currentQuestionIndex];
    questionText.textContent = currentQuestion.question;
    answerButtons.innerHTML = ""; // Rensa gamla svar
    nextButton.disabled = true; // Inaktivera knappen tills användaren svarar

    // Skapa knappar för alla svarsalternativ
    currentQuestion.answers.forEach(answer => {
        let answerButton = document.createElement("button");
        answerButton.textContent = answer.text;
        answerButton.classList.add("answer-btn");

        answerButton.addEventListener("click", () => checkAnswer(answer, answerButton));
        answerButtons.appendChild(answerButton);
    });
}

// Kontrollera om svaret är rätt eller fel
function checkAnswer(answer, button) {
    const allButtons = document.querySelectorAll(".answer-btn");
    allButtons.forEach(btn => btn.disabled = true); // Inaktivera alla svarsknappar efter klick

    if (answer.correct) {
        button.classList.add("correct"); // Grön färg för rätt svar
    } else {
        button.classList.add("wrong"); // Röd färg för fel svar
    }

    nextButton.disabled = false; // Aktivera knappen "Nästa fråga"
}

// Hantera klick på "Nästa fråga"
nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        questionText.textContent = "Spelet är slut! 🎉";
        answerButtons.innerHTML = "";
        nextButton.style.display = "none"; // Dölj knappen
    }
});

// Initiera spelet
loadQuestion();
