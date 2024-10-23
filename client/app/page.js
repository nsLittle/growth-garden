'use client';
import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./pages/home";
import Login from "./pages/login";
import GrowthMindSet from "./pages/growthmindset";
import "./globals.css";
import PlantSeeds from "./pages/plantseeds";

export default function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/plantseeds' element={<PlantSeeds />}></Route>
        <Route path='/growthmindset' element={<GrowthMindSet />}></Route>
      </Routes>
    </Router>
  );
}
