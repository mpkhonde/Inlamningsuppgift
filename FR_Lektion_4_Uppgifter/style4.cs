/* Grundläggande styling för hela sidan */
body {
    font-family: "Arial", sans-serif;
    text-align: center;
    background-color: #f0f2f5;
    margin: 0;
    padding: 20px;
}

/* Styla huvudcontainern */
.container {
    max-width: 400px;
    margin: auto;
    padding: 20px;
    background: white;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
}

/* Effekt vid hover */
.container:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
}

/* Styling för rubrik */
h1 {
    color: #333;
    font-size: 26px;
    margin-bottom: 10px;
}

/* Styling för text */
p {
    font-size: 18px;
    color: #555;
    margin: 15px 0;
}

/* Gör namnet, åldern och betyget fetstil och blå */
p span {
    font-weight: bold;
    color: #007bff;
}

/* Input-fält */
input[type="text"] {
    width: 90%;
    padding: 10px;
    margin: 10px 0;
    border: 2px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
    text-align: center;
}

/* Knappar */
button {
    display: inline-block;
    margin: 5px;
    padding: 12px 18px;
    font-size: 16px;
    font-weight: bold;
    border: none;
    background-color: #007bff;
    color: white;
    border-radius: 5px;
    cursor: pointer;
    transition: background 0.3s ease, transform 0.2s ease;
    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.15);
}

/* Effekt vid hover */
button:hover {
    background-color: #0056b3;
    transform: scale(1.05);
}

/* Effekt vid klick */
button:active {
    transform: scale(0.95);
    background-color: #003f80;
}

/* Animeringseffekt vid uppdatering av data */
span {
    transition: color 0.3s ease, transform 0.2s ease-in-out;
}

/* När texten uppdateras */
.updated {
    color: #ff5733;
    transform: scale(1.1);
}

/* Stil för knappar och input */
.buttons {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
    margin-top: 15px;
}

/* Responsiv design */
@media (max-width: 500px) {
    .container {
        width: 90%;
        padding: 15px;
    }

    button {
        width: 100%;
        padding: 12px;
        font-size: 14px;
    }

    input[type="text"] {
        width: 100%;
    }
}
