'use client';
import Link from "next/link";
import Reframer from "../pages/reframer";

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

    <div className="intro-link">
      <Link href='/plantgoals' className='intro'>
        <h3 className='intro-title'>Plant Goals</h3>
        <p className="intro-text">Through the clarity of your desires</p>
        <p className="intro-text">sow the seeds of your future</p>
      </Link>
    </div>

    <div className="section">
      <h2 className="subtitle">Stuff and Stuff</h2>
      <p className="more">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>

    <div className="intro-link">
      <div className="intro">

      {/* <Link href='/reframer' className='intro'> */}
      <h3 className="intro-title intro-function">Growth Shift</h3>
        <Reframer />
      {/* </Link> */}
      </div>
    </div>


    <div className="section">
      <h2 className="subtitle">More Stuff and Stuff</h2>
      <p className="more">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>


    <div className='intro-link'>
      <Link href='/smoothe' className='intro'>
        <h3 className='intro-title'>Motivational Beats</h3>
        <p className="intro-text">Motivational HopeMaker</p>
        <p className="intro-text">Roy Smoothe</p>
        <p className="intro-text">shares his spoken word mix to move you into action</p>
      </Link>
    </div>

    <div className="section">
      <h2 className="subtitle">More Stuff</h2>
      <p className="more">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>

    </>
  )
}