// Importera Book-interface från tidigare uppgift (eller kopiera om det behövs)
interface Book {
    name: string;
    author: string;
    amountOfPages: number;
    isPublished: boolean;
}

// Skapa ett interface för en student
interface Student {
    name: string;
    age: number;
    books: Book[]; 
}

// Skapa en student med några böcker
const student: Student = {
    name: "Erik Svensson",
    age: 22,
    books: [
        { name: "TypeScript Basics", author: "Alice Andersson", amountOfPages: 200, isPublished: true },
        { name: "Advanced TypeScript", author: "Bob Berg", amountOfPages: 350, isPublished: false }
    ]
};

// Funktion för att visa student och böcker på webbsidan
function displayStudent() {
    const studentInfo = document.getElementById("studentInfo");

    if (studentInfo) {
        studentInfo.innerHTML = `
            <h2>Student: ${student.name}</h2>
            <p><strong>Ålder:</strong> ${student.age}</p>
            <h3>Böcker:</h3>
            <ul>
                ${student.books.map(book => `
                    <li><strong>Namn:</strong> ${book.name}</li>
                    <li><strong>Författare:</strong> ${book.author}</li>
                    <li><strong>Antal sidor:</strong> ${book.amountOfPages}</li>
                    <li><strong>Publicerad:</strong> ${book.isPublished ? "Ja" : "Nej"}</li>
                    <hr>
                `).join("")}
            </ul>
        `;
    }
}

// Koppla funktionen till en knapp
document.getElementById("showStudent")?.addEventListener("click", displayStudent);
