var _a;
// Skapa en student med några böcker
var student = {
    name: "Moise Khonde",
    age: 36,
    books: [
        { name: "TypeScript Basics", author: "Alice Andersson", amountOfPages: 200, isPublished: true },
        { name: "Advanced TypeScript", author: "Bob Berg", amountOfPages: 350, isPublished: false }
    ]
};
// Funktion för att visa student och böcker på webbsidan
function displayStudent() {
    var studentInfo = document.getElementById("studentInfo");
    if (studentInfo) {
        studentInfo.innerHTML = "\n            <h2>Student: ".concat(student.name, "</h2>\n            <p><strong>\u00C5lder:</strong> ").concat(student.age, "</p>\n            <h3>B\u00F6cker:</h3>\n            <ul>\n                ").concat(student.books.map(function (book) { return "\n                    <li><strong>Namn:</strong> ".concat(book.name, "</li>\n                    <li><strong>F\u00F6rfattare:</strong> ").concat(book.author, "</li>\n                    <li><strong>Antal sidor:</strong> ").concat(book.amountOfPages, "</li>\n                    <li><strong>Publicerad:</strong> ").concat(book.isPublished ? "Ja" : "Nej", "</li>\n                    <hr>\n                "); }).join(""), "\n            </ul>\n        ");
    }
}
// Koppla funktionen till en knapp
(_a = document.getElementById("showStudent")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", displayStudent);
