"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className={`relative font-oswald grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      {/* Header */}
      <header className={`fixed top-0 left-0 w-full z-20 bg-gradient-to-b from-black via-black/80 to-transparent h-24 transition-all duration-1000 delay-300 ${isLoaded ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
        <nav className="flex items-center justify-between px-8 py-4 h-full">
          {/* Record Label Logo */}
          <a href="https://www.headingeastrecords.com/" target="_blank" className="hover:opacity-80 transition-opacity">
            <Image
              src="/her.png"
              alt="Record Label Logo"
              width={160}
              height={100}
            />
          </a>
          
          {/* Navigation Items */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#music" className="text-white/80 hover:text-white transition-colors text-xs sm:text-sm font-light tracking-wider uppercase">Discography</a>
            <a href="#tours" className="text-white/80 hover:text-white transition-colors text-xs sm:text-sm font-light tracking-wider uppercase">Archive</a>
            {/* <a href="#videos" className="text-white/80 hover:text-white transition-colors text-sm font-light tracking-wider uppercase">Videos</a> */}
            {/* <a href="#merch" className="text-white/80 hover:text-white transition-colors text-sm font-light tracking-wider uppercase">Merch</a> */}
            {/* <a href="#about" className="text-white/80 hover:text-white transition-colors text-sm font-light tracking-wider uppercase">About</a> */}
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMobileMenu}
              className="text-white/80 hover:text-white transition-colors"
              aria-label="Toggle mobile menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </nav>
        
        {/* Mobile Menu */}
        <div className={`md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-sm border-t border-white/20 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>
          <nav className="flex flex-col py-4">
            <a 
              // href="#music" 
              className="text-white/80 hover:text-white transition-colors text-sm font-light tracking-wider uppercase px-8 py-3 border-b border-white/10"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Discography
            </a>
            <a 
              // href="#tours" 
              className="text-white/80 hover:text-white transition-colors text-sm font-light tracking-wider uppercase px-8 py-3"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Archive
            </a>
          </nav>
        </div>
      </header>
      
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="fixed top-0 left-0 w-full h-full object-cover -z-10"
      >
        <source src="/amorafarewell.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Optional overlay for better text readability */}
      <div className="fixed top-0 left-0 w-full h-full bg-black/60 -z-5"></div>
      
      {/* Decorative Lines */}
      {/* Vertical line - left side with text */}
      <div className={`fixed left-8 top-1/2 transform -translate-y-1/2 flex flex-col items-center gap-6 z-10 transition-all duration-1000 delay-700 ${isLoaded ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0'}`}>
        {/* <span className="text-white/70 text-sm font-light tracking-widest uppercase transform -rotate-90">memories</span> */}
        <div className="w-0.5 h-24 bg-white/60"></div> {/* The line itself */}
        {/* <span className="text-white/70 text-sm font-light tracking-widest uppercase transform -rotate-90">forever</span> */}
      </div>
      
      {/* Vertical line - right side with text */}
      <div className={`fixed right-8 top-1/2 transform -translate-y-1/2 flex flex-col items-center gap-6 z-10 transition-all duration-1000 delay-700 ${isLoaded ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0'}`}>
        {/* <span className="text-white/70 text-sm font-light tracking-widest uppercase transform rotate-90">journey</span> */}
        <div className="w-0.5 h-24 bg-white/60"></div> {/* The line itself */}
        {/* <span className="text-white/70 text-sm font-light tracking-widest uppercase transform rotate-90">complete</span> */}
      </div>
      
      {/* Horizontal line - bottom middle */}
      {/* Line is now integrated with text below */}
      
      {/* Text next to bottom line */}
      <div className={`fixed bottom-14 left-1/2 transform -translate-x-1/2 flex items-center justify-center gap-6 z-10 transition-all duration-1000 delay-900 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
        <span className="text-white/70 sm:text-sm font-light tracking-widest uppercase whitespace-nowrap">farewell</span>
        <div className="w-16 h-0.5 bg-white/60"></div> {/* The line itself */}
        <span className="text-white/70 sm:text-sm font-light tracking-widest uppercase whitespace-nowrap">thank you</span>
      </div>
      
      <main className={`relative z-10 flex flex-col gap-[32px] row-start-2 items-center sm:items-start backdrop-blur-sm rounded-lg p-8 transition-all duration-1000 delay-500 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
        <Image
          className="m-auto"
          src="/amoraLogo.png"
          alt="Amora logo"
          width={650}
          height={38}
          priority
        />
        <p className="text-white text-2xl sm:text-4xl font-light tracking-wider m-auto">
          MMXIV — MMXXV
        </p>
        {/* <p className="text-white text-lg   font-light text-center m-auto max-w-md">
          Farewell, and thank you for everything
        </p> */}
        {/* <ol className="font-mono list-inside list-decimal text-sm/6 text-center sm:text-left text-white">
          <li className="mb-2 tracking-[-.01em]">
            Get started by editing{" "}
            <code className="bg-black/40 backdrop-blur-sm font-mono font-semibold px-1 py-0.5 rounded text-white">
              src/app/page.js
            </code>
            .
          </li>
          <li className="tracking-[-.01em]">
            Save and see your changes instantly.
          </li>
        </ol> */}

        {/* <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-white/30 transition-colors flex items-center justify-center bg-white/20 text-white backdrop-blur-sm gap-2 hover:bg-white/30 font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            className="rounded-full border border-solid border-white/30 transition-colors flex items-center justify-center hover:bg-white/20 backdrop-blur-sm hover:border-white/50 font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px] text-white"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </a>
        </div> */}
      </main>
      {/* <footer className="relative z-10 row-start-3 flex gap-[24px] flex-wrap items-center justify-center bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4 text-white transition-colors hover:text-white/80"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
            className="invert"
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4 text-white transition-colors hover:text-white/80"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
            className="invert"
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4 text-white transition-colors hover:text-white/80"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
            className="invert"
          />
          Go to nextjs.org →
        </a>
      </footer> */}
    </div>
  );
}
