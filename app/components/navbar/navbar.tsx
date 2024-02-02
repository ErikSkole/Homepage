'use client'
import Image from "next/image"

const isBrowser = () => typeof window !== 'undefined'; //The approach recommended by Next.js

function scrollToTop() {
    if (!isBrowser()) return;
    window.scrollTo({ top: 900, behavior: 'smooth' });
}

export default function Navbar() {
    return (
        <>
            <div className="navbar flex flex-col items-center w-full">
                <h1 className="navbarHeader">Projects</h1>
                <Image 
                src="/arrow-down.svg" 
                width={40}
                height={40}
                alt="arrow"
                onClick={scrollToTop} 
                className="arrowLower"
                />
            </div>
        </>
    )
}