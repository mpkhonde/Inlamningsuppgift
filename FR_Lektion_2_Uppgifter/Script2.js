// Funktion för att hämta en rävbild från API
async function fetchFox() {
    try {
        // Hämta data från API
        const response = await fetch("https://randomfox.ca/floof/");
        
        // Kontrollera om förfrågan lyckades
        if (!response.ok) {
            throw new Error("Något gick fel vid hämtning av data!");
        }

        // Konvertera svaret till JSON
        const data = await response.json();

        // Hitta bildcontainern
        const foxContainer = document.getElementById("foxContainer");

        // Skapa ett nytt img-element
        const img = document.createElement("img");
        img.src = data.image;
        img.alt = "En söt räv 🦊";

        // Rensa tidigare innehåll och lägg till bilden
        foxContainer.innerHTML = "";
        foxContainer.appendChild(img);
    } catch (error) {
        console.error("Fel vid hämtning:", error);
        alert("Kunde inte hämta en rävbild. Försök igen!");
    }
}
