'use client'
import TempLowerPage from "./components/tempComponents/tempLowerPage";
import Image from 'next/image';

const isBrowser = () => typeof window !== 'undefined'; //The approach recommended by Next.js

function scrollToTop() {
    if (!isBrowser()) return;
    window.scrollTo({ top: 900, behavior: 'smooth' });
}

export default function Home() {
  return (
    <main className='mainContent flex flex-col'>
      <div className='mainHeaderContainer flex flex-col items-center justify-center mb-80 p-48'>
        <h1 className='mainHeader flex'>Welcome</h1>
        <p className='mainUnder flex'>This is my website</p>
      </div>
      <div className="lowerPage flex items-start justify-evenly pt-80">
        <Image 
        src="/arrow-down.svg" 
        alt="arrow" 
        width={40}
        height={40}
        onClick={scrollToTop} 
        className="arrowLower"
        />
        <div className="rightCol flex flex-col">
          <TempLowerPage />
          <TempLowerPage />
        </div>
        <div className="leftCol flex flex-col mt-80">
          <TempLowerPage />
        </div>
      </div>
    </main>
  )
}
