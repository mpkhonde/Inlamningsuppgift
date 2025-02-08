// Skapa ett interface för en bok
interface Book {
    name: string;
    author: string;
    amountOfPages: number;
    isPublished: boolean;
}

// Skapa en bok med interfacet
const myBook: Book = {
    name: "The TypeScript Guide",
    author: "John Doe",
    amountOfPages: 250,
    isPublished: true
};

// Funktion för att visa boken på webbsidan
function displayBook() {
    const bookInfo = document.getElementById("bookInfo");

    if (bookInfo) {
        bookInfo.innerHTML = `
            <li><strong>Namn:</strong> ${myBook.name}</li>
            <li><strong>Författare:</strong> ${myBook.author}</li>
            <li><strong>Antal sidor:</strong> ${myBook.amountOfPages}</li>
            <li><strong>Publicerad:</strong> ${myBook.isPublished ? "Ja" : "Nej"}</li>
        `;
    }
}

// Koppla funktionen till knappen
document.getElementById("showBook")?.addEventListener("click", displayBook);
