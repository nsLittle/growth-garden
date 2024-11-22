'use client';
import Link from "next/link";
import Reframer from "./reframer";

export default function Navigation() {

  return (
    <>
    <div className="intro-link">
      <Link href='/login' className='intro'>
      <h3 className='intro-title'>Login</h3>
      <p className="intro-text">Unlock the key to your own journey</p>
      </Link>
    </div>

    <div className="section">
      <h2 className="subtitle">Living at Cause</h2>
      <p className="at-cause">I know you’ve felt it—that deep disconnect,</p>
      <p className="at-cause">the sense that something isn’t quite aligned within you. </p>
      <p className="at-cause">You're ready to re-align yourself.</p>
      <p className="at-cause">You’re here, and you’re ready to be at cause in your life.</p>
    </div>

    <div className='intro-link'>
      <Link href='/smoothe' className='intro'>
        <h3 className='intro-title'>Smoothe Motivations</h3>
        <p className="intro-text">Roy Smoothe, Motivational HopeMaker,</p>
        <p className="intro-text">is someone who embodies the power of gentle leadership,</p>
        <p className="intro-text">creating ripples of positivity wherever he goes with his motivational music.</p>
      </Link>
    </div>

    <div className="section">
      <h2 className="subtitle">More Stuff</h2>
      <p className="more">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>

    <div className="intro-link">
      <Link href='/plantseeds' className='intro'>
        <h3 className='intro-title'>Plant Goals</h3>
        <p className="intro-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </Link>
    </div>

    <div className="section">
      <h2 className="subtitle">Stuff and Stuff</h2>
      <p className="more">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>

    <div className="intro-link">
      <h3 className="intro-title">Reframer</h3>
        <Reframer />

    </div>

    </>
  )
}