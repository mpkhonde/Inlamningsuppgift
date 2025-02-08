// Skapa ett interface med en abstrakt metod
interface CustomInterface {
    customFunction: () => void; // Metod som inte returnerar något
}

// Implementera interfacet i en variabel
const myObject: CustomInterface = {
    customFunction: () => {
        console.log("Custom function kördes!"); // Logga till konsolen
        const outputElement = document.getElementById("output");
        if (outputElement) {
            outputElement.innerHTML = "🎉 Custom function har körts!";
        }
    }
};

// Koppla funktionen till knappen (rätt id!)
document.getElementById("executeFunction")?.addEventListener("click", () => {
    myObject.customFunction();
});
