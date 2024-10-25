'use client';
import { useState, useEffect } from "react";
import Home from "./home";
import "../globals.css"; 

export default function GrowthMindSet() {
  const [ramble, setRamble] = useState('');
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');

  const fetchResponse = async () => {
    try {
      const response = await fetch('http://localhost:8000/growthmindset', {
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

  const handleThoughts = (e) => {
    const thought = e.target.value;
    console.log(thought);
    setPrompt(thought);
  }

  const handleClick = async (e) => {
    e.preventDefault();
    console.log(prompt);
    fetchResponse();

    // save response to BE under :user
  };

  return (
    <>
      <Home />
      <div className='growthmindset'>
        <h2 className="sub-title">Growth Mind Set Reframer</h2>
        
        <div className="growthmindset-input-box">
            <input className="growthmindset-input" value={prompt} placeholder="Your thoughts" onChange={handleThoughts}>
            </input>
            <button type="submit" onClick={handleClick}>Reframe</button>

            <div className="growthmindset-response">
              {response && <h3>{response}</h3>}
            </div>
        </div>
      </div>
    </>
  );
}
