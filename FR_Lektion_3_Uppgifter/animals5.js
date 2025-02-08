var _a;

// Skapa några djur
var animal1 = { species: "🦅 Örn", canFly: true };
var animal2 = { species: "🐘 Elefant", canFly: false };
var animal3 = { species: "🐅 Tiger", canFly: false };
var animal4 = { species: "🦉 Uggla", canFly: true };
var animal5 = { species: "🦁 Lejon", canFly: false };
var animal6 = { species: "🐬 Delfin", canFly: false };
var animal7 = { species: "🦜 Papegoja", canFly: true };

// Skapa en lista av djur
var zoo = [animal1, animal2, animal3, animal4, animal5, animal6, animal7];

// Funktion för att visa djuren på sidan
function displayAnimals() {
    var zooList = document.getElementById("zooList");
    if (zooList) {
        zooList.innerHTML = "<h2>🦁 Djur i Zoo</h2>";
        zoo.forEach(function (animal) {
            zooList.innerHTML += "\n                <div class=\"animal\">\n                    <strong>Art:</strong> ".concat(animal.species, " <br>\n                    <strong>Kan flyga:</strong> ").concat(animal.canFly ? "Ja" : "Nej", "\n                </div>\n            ");
        });
    }
}
// Koppla funktionen till knappen
(_a = document.getElementById("showAnimals")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", displayAnimals);
