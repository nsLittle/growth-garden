'use client';
import { useState, useEffect } from "react";

export default function Reframer() {
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
        body: JSON.stringify({ prompt }),
        credentials: 'include'
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

  const handleThoughts = (e) => {
    const thought = e.target.value;
    console.log(thought);
    setPrompt(thought);
  }

  const handleClick = async (e) => {
    e.preventDefault();
    console.log(prompt);

    if (prompt.trim()!== '') {
      await fetchResponse();
    }

    // save response to BE under :user
  };

  return (
    <>
      <div className='banner-mini'>
        {/* <h2 className="title-mini">Reframer</h2> */}
      </div>

      <div className="reframer-box">
        <p>Turning negativetThoughts into</p>
        <p>Fuel for Growth</p>
        <input className="reframer-input" value={prompt} placeholder="Your thoughts" onChange={handleThoughts}>
        </input>
        
        <br />
        
        <button className="reframer-submit" type="reframer-submit" onClick={handleClick}>Reframer</button>

         <div className="reframer-output">
            {response && <h3>{response}</h3>}
          </div>
      </div>
    </>
  );
}
