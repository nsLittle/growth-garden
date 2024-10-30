'use client';
import React from "react";
import Link from "next/link";
import Home from "./pages/home";
import Login from "./pages/login";
import GrowthMindSet from "./pages/growthmindset";
import "./globals.css";
import PlantSeeds from "./pages/plantseeds";

export default function App() {

  return (
    <>
    <Home />
      {/* <Link href='/' element={<Home />}></Link>
        <Link href='/login' element={<Login />}></Link>
        <Link href='/plantseeds' element={<PlantSeeds />}></Link>
        <Link href='/growthmindset' element={<GrowthMindSet />}></Link> */}
    </>
  );
}
