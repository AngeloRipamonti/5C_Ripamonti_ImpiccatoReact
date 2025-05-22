import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const words = [
  "Albero",
  "Amico", 
  "Anello",
  "Ape",
  "Azzurro",
  "Banana",
  "Barile",
  "Bosco",
  "Braccio",
  "Calcio",
  "Cane",
  "Carta",
  "Castello",
  "Cavallo",
  "Cielo",
  "Città",
  "Collina",
  "Colore",
  "Cometa",
  "Cuore",
  "Delfino",
  "Deserto",
  "Diamante",
  "Dinosauro",
  "Disco",
  "Donna",
  "Drago",
  "Eclissi",
  "Elefante",
  "Erba",
  "Farfalla",
  "Fiume",
  "Fiore",
  "Forno",
  "Fortezza",
  "Fragola",
  "Fuoco",
  "Fungo",
  "Gatto",
  "Gelato",
  "Giornale",
  "Giungla",
  "Gioco",
  "Guerra",
  "Isola",
  "Italia",
  "Lago",
  "Lampada",
  "Leone",
  "Letto",
  "Libro",
  "Luna",
  "Mare",
  "Matita",
  "Medusa",
  "Melone",
  "Miele",
  "Mondo",
  "Montagna",
  "Nave",
  "Neve",
  "Nuvola",
  "Occhiali",
  "Oceano",
  "Ombrello",
  "Orso",
  "Ospedale",
  "Orologio",
  "Paese",
  "Palazzo",
  "Panda",
  "Pantera",
  "Papavero",
  "Parco",
  "Pasta",
  "Pecora",
  "Penna",
  "Pesce",
  "Pianeta",
  "Pinguino",
  "Piramide",
  "Pizza",
  "Ponte",
  "Porta",
  "Quaderno",
  "Quercia",
  "Rana",
  "Razzo",
  "Rete",
  "Robot",
  "Rosa",
  "Sedia",
  "Sole",
  "Spada",
  "Stella",
  "Tempesta",
  "Tigre",
  "Treno",
  "Uccello",
  "Zucchero"
];

function App() {
  let [word] = useState(words[Math.floor(Math.random() * words.length)]);
  word = word.toLowerCase();
  const [guesses, setGuesses] = useState([]);
  const [error, setError] = useState(0);

  const attempts = 6;

  const handleLetterClick = (letter) => {
    if (guesses.includes(letter)) return;
    setGuesses([...guesses, letter]);
    if (!word.includes(letter)) setError(error + 1);
  };

  const renderWord = () => {
    return (
      <div className="word d-flex justify-content-center mb-3">
        {word.split("").map((letter, i) => (
          <span
            key={i}
            className="letter border-bottom border-dark mx-1 px-2 fs-3"
            style={{ minWidth: "32px", display: "inline-block" }}
          >
            {guesses.includes(letter) ? letter : "_"}
          </span>
        ))}
      </div>
    );
  };

  const renderKeyboard = () => {
    const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    return (
      <div className="keyboard d-flex flex-wrap justify-content-center">
        {alphabet.map((letter) => (
          <button
            key={letter}
            onClick={() => handleLetterClick(letter)}
            disabled={guesses.includes(letter) || victory || defeat}
            className="btn btn-outline-primary m-1"
            style={{ width: "40px", height: "40px", padding: 0 }}
          >
            {letter}
          </button>
        ))}
      </div>
    );
  };


  const victory = word.split("").every((letter) => guesses.includes(letter));
  const defeat = error >= attempts;

  return (
    <div className="App container py-5">
      <h1 className="text-center mb-4">Gioca all'impiccato</h1>
      <div className="mb-3 text-center">
        <p className="lead">
          Tentativi rimasti: <strong>{attempts - error}</strong>
        </p>
      </div>
      <div className="d-flex justify-content-center mb-4">{renderWord()}</div>
      <div className="d-flex justify-content-center">{renderKeyboard()}</div>
      {victory && (
        <div className="alert alert-success mt-4 text-center" role="alert">
          Hai vinto!
        </div>
      )}
      {defeat && (
        <div className="alert alert-danger mt-4 text-center" role="alert">
          Hai perso! La parola era: <strong>{word}</strong>
        </div>
      )}
    </div>
  );
}

export default App;
