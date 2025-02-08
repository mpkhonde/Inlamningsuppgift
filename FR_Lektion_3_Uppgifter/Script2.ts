document.getElementById("showData")?.addEventListener("click", () => {
    // Skapa konstanter med olika datatyper
    const myString: string = "Hello, TypeScript!";
    const myNumber: number = 42;
    const myBoolean: boolean = true;
    const myArray: number[] = [1, 2, 3, 4, 5];

    // Lägg till ett objekt
   
    const myObject = { name: "Alice", age: 30, city: "Stockholm", isStudent: true };


    // Hitta output-listan i HTML
    const output = document.getElementById("output");

    if (output) {
        output.innerHTML = `
            <li><strong>String:</strong> ${myString}</li>
            <li><strong>Number:</strong> ${myNumber}</li>
            <li><strong>Boolean:</strong> ${myBoolean}</li>
            <li><strong>Number Array:</strong> [${myArray.join(", ")}]</li>
            <li><strong>Object:</strong> Name: ${myObject.name}, Age: ${myObject.age}, City: ${myObject.city}, Student: ${myObject.isStudent}</li>

        `;
    }

    console.log("Data visas på sidan!");
});
