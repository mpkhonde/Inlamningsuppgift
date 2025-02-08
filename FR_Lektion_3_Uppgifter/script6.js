window.onload = () => {
    console.log("Sidan har laddats!");
    
    const button = document.getElementById("executeFunction");
    const outputElement = document.getElementById("output");

    if (button && outputElement) {
        button.addEventListener("click", () => {
            console.log("Knappen klickades!");

            button.innerText = "🔄 Körs..."; 
            button.disabled = true; n

            setTimeout(() => {
                outputElement.innerHTML = "🎉 <strong style='color: blue;'>Custom function har körts!</strong>";
                outputElement.style.opacity = "1";

                button.innerText = "✅ Klar! Kör igen?"; 
                button.disabled = false; 
            }, 1000); 
        });
    } else {
        console.error("Element saknas!");
    }
};
