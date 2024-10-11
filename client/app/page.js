'use client';
import React from "react";
import { useState, useEffect } from "react";
import Reframe from "./routes/Reframe/page";
// import Login from "./Login/page";
import "./globals.css";

export default function Home() {
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
      <h1 className="title">
        Personal Growth Garden
        <Reframe ramble={ramble} setRamble={setRamble} prompt={prompt} setPrompt={setPrompt} response={response} handleSubmit={fetchResponse}  />
        {/* <Login /> */}
      </h1>
    </div>
  );
}
