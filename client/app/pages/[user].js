import { useRouter } from 'next/router';

export default function User() {
  const router = useRouter();
  const { user } = router.query;

  if (!user) {
    return <h1>Still sowing your garden...</h1>;
  }
  
  return (
    <>
      <h1>Welcome, {user}</h1>
      <h2>Let's Grow Your Garden</h2>
    </>
  )
}