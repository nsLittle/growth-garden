'use client';
import  { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Username() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!username) {
      return;
    }

    setLoading(true);
    setUserData(null);

    const token = localStorage.getItem('jwtToken');

    fetch(`http://localhost:8000/${username}`, {
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
    })
    .then((response) => response.json())
    .then((data) => {
      setUserData(data);
      setLoading(false);
    })
    .catch((error) => {
      console.error('Error fetching user data: ', error);
      setLoading(false);
    });
  }, [username]);
  
  return (
    <>
      <div className='banner-mini'>
      </div>

      <h2 className='title-mini'>Welcome, {username}</h2>

      <div className="body-mini">
          <h2>Let's start your habit journey</h2>
          <p>Here's some personalized data:</p>
          <pre>{JSON.stringify(userData, null, 2)}</pre>

      </div>
    </>
  )
}