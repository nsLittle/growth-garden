'use client';
import  { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Username() {
  const router = useRouter();
  const  [username, setUsername] = useState('');
  const [loading, setLoading] = useState(true);

  
  console.log(username);
  console.log('Calling Users...');

  useEffect(() => {

    if (!username) {
      console.log('Username not available');
      return;
    }

    console.log('User First Name: ', username);
    console.log('Router is Ready: ', router.isReady);
  
    setUserData(null);
    setLoading(true);

      const token = localStorage.getItem('jwtToken');

      fetch(`http://localhost:8000/users/${username}`, {
        credentials: 'include',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          },
      })
        .then((response) => response.json())
        .then((data) => setUserData(data))
        .catch((error) =>{
          console.log('Error fetching user', error);
          router.push('/');
        })
        .finally(() => {
          setLoading(false);
        });
  }, [username]);

  if (loading) {
    return <h1>Still loading your garden...</h1>;
  }
  
  if (!userData) {
    return <h1>User not found...</h1>
  }
  
  return (
    <>
      <Home />
      <h1>Welcome, {username}</h1>
      <h2>Let's Grow Your Garden</h2>
      <p>Here's some personalized data:</p>
      <pre>{JSON.stringify(userData, null, 2)}</pre>
    </>
  )
}