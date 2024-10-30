'use client';

import  { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function User() {
  const router = useRouter();
  const { userfirstname } = router.query;
  const  [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (router.isReady && userfirstname) {  
      const token = localStorage.getItem('jwtToken');

      if (!token) {
        router.push('/');
        return;
      }

      fetch(`http://localhost:8000/${userfirstname}`, {
        credentials: 'include',
          headers: {
            'Content-Type': 'application/json',
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
    }
  }, [router.isReady, userfirstname]);

  if (!userfirstname) {
    return <h1>Still loading your garden...</h1>;
  }
  
  
  return (
    <>
      <h1>Welcome, {userfirstname}</h1>
      <h2>Let's Grow Your Garden</h2>
      <p>Here's some personalized data:</p>
      <pre>{JSON.stringify(userData, null, 2)}</pre>
    </>
  )
}