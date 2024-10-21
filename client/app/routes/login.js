'use client';
import { useState } from "react";
import "../globals.css"; 

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsername = () => {
    setUsername(e.target.value);
  }

  const handlePassword = () => {
    setPassword(e.target.value);
  }

  const handleClick = () => {
    
  }

  return (
    <>

      <h2 className="sub-title">Login to Personal Garden</h2>
      
      <div className="login-box">
        <div>
          <input className="login-username" value={username} placeholder="Username" onChange={handleUsername}>
          </input>
          <input className="login-password" value={password} placeholder="Password" onChange={handlePassword}>
          </input>
          <button type="submit" onClick={handleClick}>Submit</button>
        </div>
      </div>
    </>
  );
}
