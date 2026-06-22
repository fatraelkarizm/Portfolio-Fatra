// src/components/Navbar.jsx
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Link } from 'react-scroll';
import { navItems } from "../constants/navItems";

function Navigation({ activeLink, onLinkClick }) {
    return (
        <ul className="nav-ul">
            {navItems.map((item) => (
                <li key={item.id} className="nav-li">
                    <Link
                        className={`nav-link ${activeLink === item.id ? 'text-purple-600 font-bold' : 'text-neutral-400'} hover:text-purple-600 transition-colors duration-300`}
                        to={item.id}
                        href={`#${item.id}`}
                        smooth={true}
                        duration={500}
                        onClick={() => onLinkClick(item.id)}
                    >
                        {item.title}
                    </Link>
                </li>
            ))}
        </ul>
    );
}

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeLink, setActiveLink] = useState('hero');
    const isScrollingFromClick = useRef(false);

    const handleLinkClick = (id) => {
        setIsOpen(false);
        setActiveLink(id);
        isScrollingFromClick.current = true;

        setTimeout(() => {
            isScrollingFromClick.current = false;
        }, 600);
    };

    useEffect(() => {
        const handleScroll = () => {
            // Skip if user just clicked a nav link
            if (isScrollingFromClick.current) {
                return;
            }

            const navbarElement = document.getElementById('main-navbar');
            const NAVBAR_HEIGHT = navbarElement ? navbarElement.offsetHeight : 80;
            const scrollPosition = window.scrollY + NAVBAR_HEIGHT + 50; // Add some offset

            // Get all sections
            const sections = navItems.map(item => {
                const element = document.getElementById(item.id);
                if (element) {
                    return {
                        id: item.id,
                        element: element,
                        offsetTop: element.offsetTop,
                        offsetBottom: element.offsetTop + element.offsetHeight
                    };
                }
                return null;
            }).filter(Boolean);

            // Sort sections by their position
            sections.sort((a, b) => a.offsetTop - b.offsetTop);

            // Check if we're at the very top (first 200px)
            if (window.scrollY < 200) {
                if (activeLink !== 'hero') {
                    setActiveLink('hero');
                }
                return;
            }

            // Check if we're at the very bottom
            const isAtBottom = (window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 10);
            if (isAtBottom) {
                const lastSection = sections[sections.length - 1];
                if (lastSection && activeLink !== lastSection.id) {
                    setActiveLink(lastSection.id);
                }
                return;
            }

            // Find the current section based on scroll position
            let currentSection = sections[0]; // Default to first section

            for (let i = 0; i < sections.length; i++) {
                const section = sections[i];
                
                // If scroll position is past this section's start
                if (scrollPosition >= section.offsetTop) {
                    currentSection = section;
                } else {
                    break;
                }
            }

            // Update active link if it changed
            if (currentSection && currentSection.id !== activeLink) {
                setActiveLink(currentSection.id);
            }
        };

        // Add scroll event listener
        window.addEventListener('scroll', handleScroll);
        
        // Call once to set initial state
        handleScroll();

        // Cleanup
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [activeLink]);

    return (
        <div id="main-navbar" className="fixed inset-x-0 z-20 w-full backdrop-blur-lg bg-primary/40 cursor-pointer">
            <div className="mx-auto c-space max-w-7xl">
                <div className="flex items-center justify-between py-2 sm:py-0">
                    <a href="/"
                        className="text-xl font-bold transition-colors text-neutral-400 hover:text-purple-600"
                        onClick={() => handleLinkClick('hero')}
                    >
                        Fatra
                    </a>
                    <button onClick={() => setIsOpen(!isOpen)} className="flex cursor-pointer text-neutral-400
                    hover:text-purple-600 focus:outline-none sm:hidden">
                        <img src={isOpen ? "assets/close.svg" : "assets/menu.svg"}
                            alt="toggle"
                            className="w-6 h-6" />
                    </button>
                    <nav className="hidden sm:flex">
                        <Navigation activeLink={activeLink} onLinkClick={handleLinkClick} />
                    </nav>
                </div>
            </div>
            {isOpen &&
                (<motion.div className="block overflow-hidden
                text-center sm:hidden"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    style={{ maxHeight: "100vh" }}
                    transition={{ duration: 1 }}
                >
                    <nav className="pb-5">
                        <Navigation activeLink={activeLink} onLinkClick={handleLinkClick} />
                    </nav>
                </motion.div>)}
        </div>
    );
};

export default Navbar;