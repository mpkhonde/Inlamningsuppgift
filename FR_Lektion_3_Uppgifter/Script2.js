var _a;
(_a = document.getElementById("showData")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
   
    // Skapa konstanter med olika datatyper
    var myString = "Hello, TypeScript!";
    var myNumber = 42;
    var myBoolean = true;
    var myArray = [1, 2, 3, 4, 5];
   
    // Lägg till ett objekt
    var myObject = { name: "Alice", age: 30, city: "Stockholm", isStudent: true };
    
    // Hitta output-listan i HTML
    var output = document.getElementById("output");
    if (output) {
        output.innerHTML = "\n            <li><strong>String:</strong> ".concat(myString, "</li>\n            <li><strong>Number:</strong> ").concat(myNumber, "</li>\n            <li><strong>Boolean:</strong> ").concat(myBoolean, "</li>\n            <li><strong>Number Array:</strong> [").concat(myArray.join(", "), "]</li>\n            <li><strong>Object:</strong> Name: ").concat(myObject.name, ", Age: ").concat(myObject.age, ", City: ").concat(myObject.city, ", Student: ").concat(myObject.isStudent, "</li>\n\n        ");
    }
    console.log("Data visas på sidan!");
});
