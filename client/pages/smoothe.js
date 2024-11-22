'use client';
import { useState } from "react";

export default function Smoothe() {

  return (
    <>
      <div className='banner-mini'>
        <h2 className="title-mini">Smoothe Motivations</h2>

       

      </div>
      <div>
        <div className="smoothe-tracks">

          <h6 className="smoothe-track-one">hello</h6>
          <iframe 
            allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
            frameborder="0"
            height="175"
            sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
            src="https://embed.music.apple.com/us/album/big-5-goals-for-life/553461271?i=553461276"></iframe>
        </div>

        <h6 className="smoothe-track-one">world</h6>
          <iframe
            allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
            frameborder="0" 
            height="175" 
            sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
            src="https://embed.music.apple.com/us/album/set-goals/553461271?i=553461277"></iframe>

      </div>
    </>
  )
}