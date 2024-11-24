'use client';
import { useState } from "react";
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
        body: JSON.stringify({ username, password }),
      });
      if (!response.ok) {
        throw new Error('Login failed');
      }
      const data = await response.json();
      const { redirectUrl } = data;

      router.push(`${redirectUrl}`);
    } catch (error) {
      console.error('Error: ', error.message);
      setError('Invalid username or password');
    }
  }

  return (
    <>
      <div className='banner-mini'>
      </div>

      <h2 className="title-mini">Login</h2>

      <div className='body-mini'>
        <div className="login-box">
          <input className="login-username" value={username} type='text' placeholder="Username" onChange={handleUsername}>
          </input>
          <br />
          <input className="login-password" value={password} type='password' placeholder="Password" onChange={handlePassword}>
          </input>
          <br></br>
          <button type="login-submit" onClick={handleClick}>Submit</button>
        </div>
      </div>
    </>
  );
}
