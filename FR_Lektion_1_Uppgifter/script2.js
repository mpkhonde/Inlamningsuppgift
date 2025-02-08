// Visa "Hello World!" direkt när sidan laddas
document.getElementById("hello").innerText = "Hello World";

// Vänta 3 sekunder innan ett meddelande visas
setTimeout(() => {
    document.getElementById("message").innerText = "Detta meddelande visas efter 3 sekunder!";
}, 3000);
