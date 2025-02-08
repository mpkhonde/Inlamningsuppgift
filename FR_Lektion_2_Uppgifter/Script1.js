// Funktion för att lägga till en uppgift i listan
function addTask() {
    let taskInput = document.getElementById("newTask");
    let taskList = document.getElementById("taskList");

    if (taskInput.value.trim() !== "") {
        let newTask = document.createElement("li");
        newTask.textContent = taskInput.value;

        // Lägg till klickfunktion för att markera uppgift som klar
        newTask.onclick = function () {
            newTask.classList.toggle("completed");
            saveTasks(); // Uppdatera Local Storage
        };

        // Lägg till knapp för att ta bort en specifik uppgift
        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "✖";
        deleteBtn.classList.add("delete-btn");
        deleteBtn.onclick = function () {
            taskList.removeChild(newTask);
            saveTasks(); // Uppdatera Local Storage
        };

        newTask.appendChild(deleteBtn);
        taskList.appendChild(newTask);
        taskInput.value = ""; // Rensa inputfältet

        saveTasks(); // Spara uppgifter i Local Storage
    } else {
        alert("Fyll i en uppgift innan du lägger till.");
    }
}

// Funktion för att rensa hela listan
function clearTasks() {
    let taskList = document.getElementById("taskList");
    taskList.innerHTML = ""; 
    localStorage.removeItem("tasks");  // ❌ Här saknades "}"
}

// Funktion för att spara uppgifter i Local Storage
function saveTasks() {
    let tasks = [];
    document.querySelectorAll("#taskList li").forEach(task => {
        tasks.push({
            text: task.firstChild.textContent.trim(),
            completed: task.classList.contains("completed"),
        });
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Läsa in uppgifter vid sidladdning
function loadTasks() {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    let taskList = document.getElementById("taskList");

    tasks.forEach(taskObj => {
        let newTask = document.createElement("li");
        newTask.textContent = taskObj.text;

        // Återställ status (klar eller ej)
        if (taskObj.completed) {
            newTask.classList.add("completed");
        }

        newTask.onclick = function () {
            newTask.classList.toggle("completed");
            saveTasks();
        };

        // Lägg till en ta bort-knapp
        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "✖";
        deleteBtn.classList.add("delete-btn");
        deleteBtn.onclick = function () {
            taskList.removeChild(newTask);
            saveTasks();
        };

        newTask.appendChild(deleteBtn);
        taskList.appendChild(newTask);
    });
}

// Kör `loadTasks()` när sidan laddas
document.addEventListener("DOMContentLoaded", loadTasks);

// Lägger till "Enter" som en genväg för att lägga till uppgifter
document.getElementById("newTask").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});
