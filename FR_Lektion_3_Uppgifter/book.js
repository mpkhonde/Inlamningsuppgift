var _a, _b;
// Skapa en array med flera böcker
var books = [
    { name: "TypeScript Basics", author: "Alice Andersson", amountOfPages: 200, isPublished: true },
    { name: "Advanced TypeScript", author: "Bob Berg", amountOfPages: 350, isPublished: false },
    { name: "Mastering TS", author: "Clara Carlsson", amountOfPages: 500, isPublished: true }
];
// Funktion för att visa alla böcker på webbsidan
function displayBooks() {
    var bookInfo = document.getElementById("bookInfo");
    if (bookInfo) {
        bookInfo.innerHTML = ""; 
        books.forEach(function (book) {
            bookInfo.innerHTML += "\n<li><strong>Namn:</strong> ".concat(book.name, "</li>\n<li><strong>F\u00F6rfattare:</strong> ").concat(book.author, "</li>\n                <li><strong>Antal sidor:</strong> ").concat(book.amountOfPages, "</li>\n                <li><strong>Publicerad:</strong> ").concat(book.isPublished ? "Ja" : "Nej", "</li>\n                <hr> <!-- L\u00E4gg till en linje mellan b\u00F6ckerna -->\n            ");
        });
    }
}
// Funktion för att gömma boklistan
function hideBooks() {
    var bookInfo = document.getElementById("bookInfo");
    if (bookInfo) {
        bookInfo.innerHTML = ""; // Tar bort innehållet
    }
}
// Koppla funktionerna till knapparna
(_a = document.getElementById("showBooks")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", displayBooks);
(_b = document.getElementById("hideBooks")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", hideBooks);
