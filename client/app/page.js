'use client';
import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./routes/home";
import Login from "./routes/login";
import GrowthMindSet from "./routes/growthmindset";
import "./globals.css";

export default function App() {

  return (
    <Router>
      <div>
        <Home />
      </div>
      
      <Routes>
        <Route path='/growthmindset' element={<GrowthMindSet />}></Route>
        <Route path='/login' element={<Login />}></Route>
      </Routes>
    </Router>
  );
}
