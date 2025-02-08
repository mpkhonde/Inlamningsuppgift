// Skapa ett interface för en bok
interface Book {
    name: string;
    author: string;
    amountOfPages: number;
    isPublished: boolean;
}

// Skapa en array med flera böcker
const books: Book[] = [
    { name: "TypeScript Basics", author: "Alice Andersson", amountOfPages: 200, isPublished: true },
    { name: "Advanced TypeScript", author: "Bob Berg", amountOfPages: 350, isPublished: false },
    { name: "Mastering TS", author: "Clara Carlsson", amountOfPages: 500, isPublished: true }
];

// Funktion för att visa alla böcker på webbsidan
function displayBooks() {
    const bookInfo = document.getElementById("bookInfo");

    if (bookInfo) {
        bookInfo.innerHTML = ""; 

        books.forEach(book => {
            bookInfo.innerHTML += `
                <li><strong>Namn:</strong> ${book.name}</li>
                <li><strong>Författare:</strong> ${book.author}</li>
                <li><strong>Antal sidor:</strong> ${book.amountOfPages}</li>
                <li><strong>Publicerad:</strong> ${book.isPublished ? "Ja" : "Nej"}</li>
                <hr> <!-- Lägg till en linje mellan böckerna -->
            `;
        });
    }
}

// Funktion för att gömma boklistan
function hideBooks() {
    const bookInfo = document.getElementById("bookInfo");
    if (bookInfo) {
        bookInfo.innerHTML = ""; 
    }
}

// Koppla funktionerna till knapparna
document.getElementById("showBooks")?.addEventListener("click", displayBooks);
document.getElementById("hideBooks")?.addEventListener("click", hideBooks);
