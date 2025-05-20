"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed h-20 w-full flex justify-between transition-colors duration-300 items-center px-10 font-unbounded ${scrolled ? 'bg-primary shadow-md' : 'bg-transparent ' } top-0 z-20`}> 
        <div className="">
            <Link className={`cursor-pointer hover:text-third ${scrolled ? 'text-secondary' : 'text-primary' }`} href="/">
                <h1 className="text-xl">Karl Duponchel</h1>
            </Link> 
        </div>
        <div className={`flex flex-row gap-8 **:cursor-pointer **:hover:text-third ${scrolled ? 'text-secondary' : 'text-primary' }`}>
            <Link href="#">A propos</Link> 
            <Link href="#">Réalisations</Link> 
            <Link href="#">Contact</Link> 
        </div>
    </header>
  );
}