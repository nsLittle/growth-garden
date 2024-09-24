
'use client';
import React from "react";
import { useState, useEffect } from "react";
import Reframe from "./Reframe/page";
import "./globals.css";

export default function Home() {
  const [prompt, setPrompt] = useState('');

  useEffect(() => {
    const fetchResponse = async () => {
      try {
        const res = await fetch('http://localhost:8000/api/gpt', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ prompt })
        });
        const data = await res.json();
        setResponse(data.message);
      } catch (error) {
        console.log('Error fetching response :', error);
      }
    };
    if (prompt) {
      fetchResponse();
    }
  }, [prompt]);

  return (
    <div>
      <h1 className="title">
        Personal Growth Garden
        <Reframe />
      </h1>
    </div>
  );
}
