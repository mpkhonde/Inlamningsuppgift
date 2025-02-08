// Skapa ett student-objekt med grundvärden
let student = {
    name: "Liam",
    age: 20,
    grade: "B"
};

// Spara originalvärden för att kunna återställa senare
const originalStudent = { ...student };

// Funktion för att uppdatera HTML med studentens information
function updateUI() {
    const nameEl = document.getElementById("student-name");
    const ageEl = document.getElementById("student-age");
    const gradeEl = document.getElementById("student-grade");

    // Uppdatera texten
    nameEl.innerText = student.name;
    ageEl.innerText = student.age;
    gradeEl.innerText = student.grade;

    // Lägg till animationsklass
    nameEl.classList.add("updated");
    ageEl.classList.add("updated");
    gradeEl.classList.add("updated");

    // Ta bort effekten efter 500ms
    setTimeout(() => {
        nameEl.classList.remove("updated");
        ageEl.classList.remove("updated");
        gradeEl.classList.remove("updated");
    }, 500);
}

// Funktion för att byta namn slumpmässigt
function changeName() {
    const names = ["Ella", "Moise", "Anders", "Eric", "Andreas"];
    student.name = names[Math.floor(Math.random() * names.length)];
    updateUI();
}

// Funktion för att ändra namn via inputfält
function setName() {
    const inputName = document.getElementById("name-input").value;
    if (inputName.trim() !== "") {
        student.name = inputName;
        updateUI();
    } else {
        alert("Fyll i ditt namn!");
    }
}

// Funktion för att öka åldern (max 100 år)
function increaseAge() {
    if (student.age < 100) {
        student.age += 5;
        updateUI();
    } else {
        alert("Maxålder uppnådd!");
    }
}

// Funktion för att byta betyg slumpmässigt
function changeGrade() {
    const grades = ["A", "B", "C", "D", "E", "F"];
    student.grade = grades[Math.floor(Math.random() * grades.length)];
    updateUI();
}

// Funktion för att återställa studentens information
function resetStudent() {
    student = { ...originalStudent };
    updateUI();
}

// Koppla knappar till funktioner
document.getElementById("change-name").addEventListener("click", changeName);
document.getElementById("set-name").addEventListener("click", setName);
document.getElementById("increase-age").addEventListener("click", increaseAge);
document.getElementById("change-grade").addEventListener("click", changeGrade);
document.getElementById("reset").addEventListener("click", resetStudent);
