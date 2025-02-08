// Vänta tills sidan laddats klart
document.addEventListener("DOMContentLoaded", () => {
  
    // Hitta HTML-elementen
    const button = document.getElementById("runScript");
    const output = document.getElementById("output");

    // Kontrollera att knappen och output-elementet finns
    if (button && output) {
        button.addEventListener("click", () => {
           
            // Generera aktuell tid
            const now = new Date().toLocaleTimeString();

            // Uppdatera texten på sidan
            output.textContent = `TypeScript fungerar! 🚀 (Senast klickad: ${now})`;

            // Ändra knappens text
            button.textContent = "Klicka igen!";

            // Logga till webbläsarens konsol
            console.log("Knappen klickades:", now);
        });
    }
});
