'use client';
import { useState } from "react";
import "../../globals.css";

export default function Reframe({ ramble, setRamble, prompt,setPrompt,response,handleSubmit }) {

  const handleThoughts = (e) => {
    const thought = e.target.value;
    console.log(thought);
    setPrompt(thought);
  }

  const handleClick = async (e) => {
    console.log(prompt);
    e.preventDefault();
    handleSubmit();
  };

  return (
    <div>
      <input value={prompt} placeholder="Your thoughts" onChange={handleThoughts}></input>
      <button type="submit" onClick={handleClick}>Reframe</button>

        {response && <h3>{response}</h3>}
    </div>
  );
}
