import './App.css';
import { useState } from "react";
import { fretboard } from "./fretboard";
import { checkNotes, getRandomNote } from "./noteUtils";

function App() {
  // 1. Daten und TypeScript
  const [selectedNote, setSelectedNote] = useState("");
  const [randomNote, setRandomNote] = useState(getRandomNote);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  // 2. Oberfläche
  return (
    <main className="app">
      <section className="hero">
        <h1>
          <span>Fret</span>Trainer
        </h1>

        <p>Learn the guitar fretboard.</p>

        <h2>Drücke Note {randomNote}</h2>



        <div className="fretboard">
          {fretboard.map((string, stringIndex) => {
            return (
              <div className="string-row" key={stringIndex}>
                {string.map((note, fretIndex) => {
                  return (
                    <button key={fretIndex}
                      className={fretIndex === 0 ? "open-string" : ""}
                      onClick={() => {
                        setSelectedNote(note);
                        setIsCorrect(checkNotes(note, randomNote));
                        setRandomNote(getRandomNote());
                        
                      }}

                    >
                      {note}
                    </button>
                  );
                })}
              </div>
            );
          })}
          
          {isCorrect !== null && (
            <p>
              {isCorrect ? "Richtig! 🎉" : "Leider falsch!"}
            </p>
          )}


        </div>


      </section>

    </main>
  );
}


export default App;