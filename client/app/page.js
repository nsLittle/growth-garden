'use client';
import React from "react";
import { useState, useEffect } from "react";
import Home from "./routes/home";
import GrowthMindSet from "./routes/growthmindset";
import "./globals.css";

export default function App() {
  const [ramble, setRamble] = useState('');
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');

  const fetchResponse = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/gpt', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt })
      });

      if (response.ok) {
        const data = await response.json();
         setResponse(data.completion);
      } else {
        console.log('Error', response.status)
      }

    } catch (error) {
      console.log('Error fetching response :',error);
    }
  };

  useEffect(() => {
    if (prompt) {
      fetchResponse();
    }
  }, [prompt]);

  return (
    <div>
      <Home />
      <GrowthMindSet ramble={ramble} setRamble={setRamble} prompt={prompt} setPrompt={setPrompt} response={response} handleSubmit={fetchResponse}  />

    </div>
  );
}
