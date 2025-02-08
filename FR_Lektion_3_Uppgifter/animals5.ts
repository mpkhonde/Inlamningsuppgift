// Interface för djur
interface Animal {
    species: string;
    canFly: boolean;
    color: string;
    weight: number;
    habitat: string;
}

// Skapa djur med fler egenskaper
const animal1: Animal = { species: "Örn", canFly: true, color: "Brun", weight: 5, habitat: "Berg" };
const animal2: Animal = { species: "Elefant", canFly: false, color: "Grå", weight: 5000, habitat: "Savann" };
const animal3: Animal = { species: "Uggla", canFly: true, color: "Brun", weight: 2, habitat: "Skog" };
const animal4: Animal = { species: "Lejon", canFly: false, color: "Gul", weight: 200, habitat: "Savann" };
const animal5: Animal = { species: "Delfin", canFly: false, color: "Blå", weight: 150, habitat: "Hav" };
const animal6: Animal = { species: "Tiger", canFly: false, color: "Orange", weight: 220, habitat: "Regnskog" };
const animal7: Animal = { species: "Papegoja", canFly: true, color: "Grön", weight: 1, habitat: "Regnskog" };

// Skapa en lista av djur
const zoo: Animal[] = [animal1, animal2, animal3, animal4, animal5, animal6, animal7];

// Funktion för att visa djuren
function displayAnimals() {
    const zooList = document.getElementById("zooList");
    if (zooList) {
        zooList.innerHTML = "<h2>🦁 Djur i Zoo</h2><div class='zoo-container'>";
        
        zoo.forEach(animal => {
            zooList.innerHTML += `
                <div class="animal">
                    <strong>Art:</strong> ${animal.species} <br>
                    <strong>Färg:</strong> ${animal.color} <br>
                    <strong>Vikt:</strong> ${animal.weight} kg <br>
                    <strong>Habitat:</strong> ${animal.habitat} <br>
                    <strong>Kan flyga:</strong> <span class="${animal.canFly ? 'fly-yes' : 'fly-no'}">
                        ${animal.canFly ? '✅' : '❌'}
                    </span>
                </div>
            `;
        });

        zooList.innerHTML += "</div>";
    }
}

// Koppla funktionen till knappen
document.getElementById("showAnimals")?.addEventListener("click", displayAnimals);
