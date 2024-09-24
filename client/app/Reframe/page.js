'use client';
import { useState } from "react";
import "../globals.css";

export default function Reframe({ prompt }) {

  const handleThoughts = (e) => {
    const ramble = e.target.value;
    console.log(ramble);
    setPrompt(ramble);
  }

  const handleSubmit = async (e) => {
    console.log(prompt);
  };

  return (
    <div>
      <input value={prompt} placeholder="Your thoughts" onChange={handleThoughts}></input>
      <button type="submit" onClick={handleSubmit}>Reframe</button>
    </div>
  );
}
