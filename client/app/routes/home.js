'use client';
import { Link } from 'react-router-dom'
import "../globals.css";

export default function Home() {

  return(
    <>
    <div className='home-banner'>
      <h1 className="title">
          Personal Growth Garden
      </h1>
      <p className='image'>Image by <a href="https://www.freepik.com/free-photo/nature-scene-yoga-mediation_94485505.htm#query=serene%20garden&position=29&from_view=keyword&track=ais_hybrid&uuid=bae2e6ce-2f51-4b30-ab56-536c3a6447f3" className='pic-link'>Freepik</a></p>
    </div>
    <div className='grid'>
      <Link to='/home' className='function-one'>Home</Link>
      <Link to='/login' className='function-two'>Login to Personal Garden</Link>
      <Link to='/growthmindset' className='function-three'>Growth Mind Set Reframer</Link>
    </div>
    </>
  )
}