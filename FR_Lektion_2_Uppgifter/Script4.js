async function fetchBookData() {
    const query = document.getElementById("searchQuery").value;
    if (!query.trim()) {
        alert("Skriv in en boktitel först!");
        return;
    }

    const url = `https://openlibrary.org/search.json?q=${query}`;
    
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Något gick fel vid hämtning av data!");
        }

        const data = await response.json();
        displayBooks(data.docs);
    } catch (error) {
        console.error("Fel vid hämtning:", error);
        alert("Kunde inte hämta bokdata. Försök igen!");
    }
}

function displayBooks(books) {
    const bookResults = document.getElementById("bookResults");
   
    // Rensa tidigare resultat
    bookResults.innerHTML = ""; 

    if (books.length === 0) {
        bookResults.innerHTML = "<p>Inga böcker hittades! 😕</p>";
        return;
    }

     // Visar max 5 böcker
    books.slice(0, 5).forEach(book => {
        const bookElement = document.createElement("div");
        bookElement.classList.add("book-item");

        const title = book.title || "Okänd titel";
        const author = book.author_name ? book.author_name.join(", ") : "Okänd författare";

        bookElement.innerHTML = `
            <p class="book-title">📖 ${title}</p>
            <p class="book-author">✍️ ${author}</p>
        `;
        bookResults.appendChild(bookElement);
    });
}
