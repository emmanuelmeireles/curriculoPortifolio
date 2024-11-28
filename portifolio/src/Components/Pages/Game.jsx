import { useState } from "react";

const generateCombination = () => {
  return Array.from({ length: 4 }, () => Math.floor(Math.random() * 10)).join("");
};

const Game = () => {
  const [secret, setSecret] = useState(generateCombination());
  const [guess, setGuess] = useState("");
  const [attempts, setAttempts] = useState([]);

  const handleGuess = () => {
    const bulls = secret.split("").filter((digit, i) => digit === guess[i]).length;
    const cows = guess.split("").filter((digit) => secret.includes(digit)).length - bulls;

    setAttempts([{ guess, bulls, cows }, ...attempts]);
    setGuess("");
  };

  const revealSecret = () => alert(`A combinação secreta é: ${secret}`);

  return (
    <div>
      <h1>Jogo Senha (Bulls and Cows)</h1>
      <input
        type="text"
        value={guess}
        maxLength="4"
        onChange={(e) => setGuess(e.target.value)}
        placeholder="Digite sua tentativa (4 dígitos)"
      />
      <button onClick={handleGuess} disabled={guess.length !== 4}>
        Adivinhar
      </button>
      <button onClick={revealSecret}>Mostrar Senha</button>
      <ul>
        {attempts.map((attempt, index) => (
          <li key={index}>
            Tentativa: {attempt.guess} | Bulls: {attempt.bulls}, Cows: {attempt.cows}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Game;
