'use client';
import { useState } from "react";
import Home from "./home";
import "../globals.css"; 
import { useRouter } from "next/navigation";

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const router = useRouter();

  const handleUsername = (e) => {
    setUsername(e.target.value);
    console.log(e.target.value);
  }

  const handlePassword = (e) => {
    setPassword(e.target.value);
    console.log(e.target.value);
  }

  const handleClick = async () => {
    setError(null);
    console.log('Username: ', username);
    console.log('Password: ', password);

    if (!username || !password) {
      setError('Username and password required.');
      return;
    }

    try {
      const encodedCredentials = btoa(`${username}:${password}`);
      const response = await fetch('http://localhost:8000/login', {
        method: 'POST',
        headers: {
          'Authorization': `Basic ${encodedCredentials}`,
          'Content-Type': 'application/json',
        },
        credentials: 'include',
      });
      if (!response.ok) {
        throw new Error('Login failed');
      }
      const data = await response.json();
      const token = data.token;
      const redirectUrl = data.redirectUrl;

      // localStorage.setItem('jwtToken', token);

      router.push(redirectUrl);
    } catch (error) {
      console.error('Error: ', error.message);
      setError('Invalid username or password');
    }
  }

  return (
    <>
      <Home />
      <h2 className="sub-title">Login to Personal Garden</h2>
      
      <div className='login-body'>
        <div className="login-box">
          <input className="login-username" value={username} type='text' placeholder="Username" onChange={handleUsername}>
          </input>
          <br />
          <input className="login-password" value={password} type='password' placeholder="Password" onChange={handlePassword}>
          </input>
          <br></br>
          <button type="submit" onClick={handleClick}>Submit</button>
        </div>
      </div>
    </>
  );
}
