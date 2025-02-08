import { useState } from "react";
import styles from "./LogicalOperators.module.css";

const LogicalOperators = () => {
  const [showAnswers, setShowAnswers] = useState(false);
  const [inputValue, setInputValue] = useState(""); 

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h1>Uppgift #2 - TSX Operator</h1>

        {/* Standardlogik */}
        <p> Är 2 mindre än 4? <span className={styles.answer}>{2 < 4 ? "✅ Ja" : "❌ Nej"}</span></p>
        <p> Är 2 större än 4? <span className={styles.answer}>{2 > 4 ? "✅ Ja" : "❌ Nej"}</span></p>
        <p> 2 + 2 == 4 <b>eller</b> 2 + 2 == 99? <span className={styles.answer}>{2 + 2 === 4 || 2 + 2 === 99 ? "✅ Ja" : "❌ Nej"}</span></p>
        <p> 2 + 2 == 4 <b>och</b> 2 + 4 == 6? <span className={styles.answer}>{2 + 2 === 4 && 2 + 4 === 6 ? "✅ Ja" : "❌ Nej"}</span></p>
        
        {/* Ny interaktiv inmatning */}
        <div className={styles.inputBox}>
          <label>Skriv ett nummer: </label>
          <input
            type="number"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </div>
        <p> Är ditt nummer större än 10? 
          <span className={styles.answer}>{Number(inputValue) > 10 ? "✅ Ja" : "❌ Nej"}</span>
        </p>

        {/* Tabell för att visa resultaten snyggt */}
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Uttryck</th>
              <th>Resultat</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>2 &lt; 4</td><td>✅ Ja</td></tr>
            <tr><td>2 &gt; 4</td><td>❌ Nej</td></tr>
            <tr><td>2 + 2 == 4 || 2 + 2 == 99</td><td>✅ Ja</td></tr>
            <tr><td>2 + 2 == 4 && 2 + 4 == 6</td><td>✅ Ja</td></tr>
          </tbody>
        </table>

        {/* Knapp för att visa/dölja svar */}
        <button className={styles.button} onClick={() => setShowAnswers(!showAnswers)}>
          {showAnswers ? "Dölj svar" : "Visa svar"}
        </button>

        {/* Box med svaren */}
        {showAnswers && (
          <div className={styles.answersBox}>
            <p>✅ <b>Förklaring:</b> 2 är alltid mindre än 4, därför är det sant.</p>
            <p>✅ <b>Förklaring:</b> 2 + 2 blir 4, så det ger uttrycket sant.</p>
            <p>❌ <b>Förklaring:</b> 2 + 2 är inte 99, så det är falskt, men 2 + 2 == 4 är sant.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default LogicalOperators;
