'use client';
import { useState } from "react";
import Home from "../home/page";
import '../globals.css';

export default function PlantSeeds() {
  const [prompt, setPrompt] = useState('');
  const [plantSeed, setPlantSeed] = useState(false);
  const [error, setError] = useState(null);

  const handleGoals = (e) => {
    setPrompt(e.target.value);
  }

  const handleClick = async () => {
    if (!prompt) {
      setError('Please enter a goal.');
      return;
    }

    try {
      const response = await fetch('http://localhost:8000/plantseeds', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ goal: prompt }),
      });

      if (!response.ok) {
        throw new Error('Failed to plant seed.');
      }

      const data = await response.json();
      console.log(data.message);

      setPlantSeed(true);
    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <>
      <Home />
      <div className='plantseeds'>
        <h2 className="sub-title">Plants Goals</h2>

        <div className="plantseeds-input-box">
          <input className='plantseeds-input' value={prompt} placeholder='Your Goals' onChange={handleGoals}></input>
          <button type="submit" onClick={handleClick}>Submit</button>
        </div>

        {plantSeed && (
          <div className='planting'>
            <p className="goal">{prompt}</p>
            <br />
            <img src='/images/seed.jpg' alt='Seed' className="seed" />
          </div>
        )}
      </div>
    </>
  )
}