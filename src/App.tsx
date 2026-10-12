import './App.css';
import { useState } from "react";

function App() {
  // 1. Daten und TypeScript
 const [selectedNote, setSelectedNote] = useState("");

  const fretboard: string[][] = [
    ["E", "F", "F#", "G", "G#", "A"],
    ["A", "A#", "B", "C", "C#", "D"],
    ["D", "D#", "E", "F", "F#", "G"],
    ["G", "G#", "A", "A#", "B", "C"],
    ["B", "C", "C#", "D", "D#", "E"],
    ["E", "F", "F#", "G", "G#", "A"]
  ];


 
  // 2. Oberfläche
  return (
    <main className="app">
      <section className="hero">
        <h1>
          <span>Fret</span>Trainer
        </h1>

        <p>Learn the guitar fretboard.</p>

        <h2>Welche Note ist gesucht?</h2>

        <div className="fretboard">
          {fretboard.map((string, stringIndex) => {
            return (
              <div className="string-row" key={stringIndex}>
                {string.map((note, fretIndex) => {
                  return (
                    <button key={fretIndex}
                    onClick={() => setSelectedNote(note)}
                    >
                      {note}
                    </button>
                  );
                })}
              </div>
            );
          })}
        <p>Ausgewählte Note: {selectedNote}</p>
        </div>


      </section>

    </main>
  );
}

export default App;