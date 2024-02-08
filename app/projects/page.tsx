'use client'
import Navbar from "../components/navbar/navbar"
import { useEffect, useState } from "react";


export default function Projects() {
    const [showNavbar, setShowNavbar] = useState(false);

    useEffect(() => {
        const checkScroll = () => {
            if (!showNavbar && window.pageYOffset > 500) {
                setShowNavbar(true);
            } else if (showNavbar && window.pageYOffset <= 500) {
                setShowNavbar(false);
            }
        };

        window.addEventListener('scroll', checkScroll);

        // Clean up the component
        return () => window.removeEventListener('scroll', checkScroll);
    }, [showNavbar]);
    return (
        <>
            {showNavbar && <Navbar />}
            <div className="projectsHeaderContainer flex justify-center p-20">
                <h1 className="mainHeader projectsHeader flex">Projects</h1>
            </div>
            <div className="lowerProjects flex flex-col">

            </div>
        </>
    )
}