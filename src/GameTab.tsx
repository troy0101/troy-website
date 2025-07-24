import React, { useState } from 'react';

// Simple Number Guessing Game
const getRandom = () => Math.floor(Math.random() * 100) + 1;

const GameTab = () => {
  const [number, setNumber] = useState(getRandom());
  const [guess, setGuess] = useState('');
  const [message, setMessage] = useState('Guess a number between 1 and 100!');
  const [attempts, setAttempts] = useState(0);

  const handleGuess = (e: React.FormEvent) => {
    e.preventDefault();
    const num = parseInt(guess, 10);
    if (isNaN(num)) {
      setMessage('Please enter a valid number.');
      return;
    }
    setAttempts(a => a + 1);
    if (num === number) {
      setMessage(`🎉 Correct! The number was ${number}. Attempts: ${attempts + 1}`);
    } else if (num < number) {
      setMessage('Too low! Try again.');
    } else {
      setMessage('Too high! Try again.');
    }
  };

  const resetGame = () => {
    setNumber(getRandom());
    setGuess('');
    setMessage('Guess a number between 1 and 100!');
    setAttempts(0);
  };

  return (
    <section style={{
      background: 'rgba(255,255,255,0.85)',
      borderRadius: 28,
      padding: '2.5rem',
      marginBottom: '2.5rem',
      boxShadow: '0 8px 32px 0 rgba(0, 180, 216, 0.13)',
      border: '1.5px solid rgba(0,180,216,0.10)',
      backdropFilter: 'blur(10px)',
      WebkitBackdropFilter: 'blur(10px)',
      width: '100%',
      maxWidth: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
      color: '#1a2a33',
      textAlign: 'center'
    }}>
      <h2 style={{ fontSize: '2.2rem', marginBottom: 18, fontWeight: 700, letterSpacing: 1 }}>Number Guessing Game</h2>
      <p style={{ fontSize: '1.1rem', marginBottom: 18 }}>{message}</p>
      <form onSubmit={handleGuess} style={{ display: 'flex', justifyContent: 'center', gap: 12, marginBottom: 18 }}>
        <input
          type="number"
          min="1"
          max="100"
          value={guess}
          onChange={e => setGuess(e.target.value)}
          style={{ padding: 8, borderRadius: 8, border: '1px solid #90e0ef', fontSize: '1.1rem', width: 100 }}
          aria-label="Enter your guess"
        />
        <button type="submit" style={{
          background: 'linear-gradient(90deg, #00b4d8 0%, #48cae4 100%)',
          color: '#fff',
          border: 'none',
          borderRadius: 12,
          padding: '8px 20px',
          fontSize: '1.1rem',
          fontWeight: 600,
          cursor: 'pointer',
        }}>Guess</button>
      </form>
      <button onClick={resetGame} style={{
        background: '#fff',
        color: '#00b4d8',
        border: '1.5px solid #00b4d8',
        borderRadius: 12,
        padding: '8px 20px',
        fontSize: '1.1rem',
        fontWeight: 600,
        cursor: 'pointer',
      }}>Restart</button>
    </section>
  );
};

export default GameTab;
