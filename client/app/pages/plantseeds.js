'use client';
import { useState } from "react";
import Home from "./home";
import '../globals.css';

export default function PlantSeeds() {
  const [prompt, setPrompt] = useState('');

  const handleGoals = (e) => {
    setPrompt(e.target.value);
  }

  const handleClick = {
    // return image of seed plus input;
  }

  return (
    <>
      <Home />
      <div>
        <input className='plantseeds-input' value={prompt} placeholder='Your Goals' onChange={handleGoals}></input>
        <button type="submit" onClick={handleClick}>Submit</button>
      </div>
    </>
  )
}