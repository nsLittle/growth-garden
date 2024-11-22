'use client';
import Header from "./Header";
import About from "./About";
import Navigation from "./Navigation";

export default function Home() {

  return (
    <>
        <Header />
        <main>
            <About />
            <Navigation />
        </main>
    </>
  )
}