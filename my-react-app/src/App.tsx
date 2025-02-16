import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import "./index.css";

// Bildsökvägar
const galaxyImages = [
  "/galaxy1.jpg",
  "/galaxy2.jpg",
  "/galaxy3.jpg",
  "/galaxy4.jpg",
  "/galaxy5.jpg",
  "/galaxy6.jpg",
  "/galaxy7.jpg",
  "/galaxy8.jpg",
  "/galaxy9.jpg",
  "/galaxy10.jpg",
  "/galaxy11.jpg",
  "/galaxy12.jpg",
];

const App: React.FC = () => {
  const [page, setPage] = useState<string>(localStorage.getItem("page") || "home");
  const [name, setName] = useState<string>("");
  const [bgIndex, setBgIndex] = useState<number>(0);
  const [fade, setFade] = useState<boolean>(false); 

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(true);
  
      setTimeout(() => {
        setBgIndex((prevIndex) => (prevIndex + 1) % galaxyImages.length);
        setFade(false); 
      }, 1500); 
  
    }, 5000); // Byter bild var 5:e sekund
  
    return () => clearInterval(interval);
  }, []);
  
  // Förladdning av nästa bild för att undvika blinkningar
  useEffect(() => {
    const preloadImage = new Image();
    preloadImage.src = galaxyImages[(bgIndex + 1) % galaxyImages.length];
  }, [bgIndex]);
  

  // Slumpmässiga namnlista
  const names: string[] = ["Alice", "Bob", "Charlie", "David", "Emma", "Fredrik", "Greta", "Hugo", "Isabella", "Johan", "Moise"];

  // Funktion för att visa slumpmässigt namn
  const showRandomName = () => {
    const randomIndex = Math.floor(Math.random() * names.length);
    setName(names[randomIndex]);
  };

  return (
    <>
      {/* Bakgrundscontainer (ligger längst bak) */}
      <div className="background-container">
        <div className={`background ${fade ? "fade-out" : "fade-in"}`} style={{ backgroundImage: `url(${galaxyImages[bgIndex]})` }}></div>
      </div>

      {/* Huvudlayout */}
      <div className="app-container">
        <header>
          <h1>Välkommen till Min Webbsida</h1>
        </header>

        <NavBar currentPage={page} onNavigate={setPage} />

        <main>
          {page === "home" ? (
            <section>
              <h2>Hem</h2>
              <p>Detta är startsidan för min webbplats.</p>
            </section>
          ) : (
            <section>
              <h2>Om</h2>
              <p>Här är lite information om mig.</p>
            </section>
          )}

          {/* Slumpmässigt namn-knapp */}
          <div className="name-container">
            <button className="name-button" onClick={showRandomName}>
              Visa Namn
            </button>
            {name && <p>Ditt slumpmässiga namn är: <strong>{name}</strong></p>}
          </div>
        </main>

        <button className="reset-button" onClick={() => setPage("home")}>
          Återställ
        </button>
      </div>
    </>
  );
};

export default App;
