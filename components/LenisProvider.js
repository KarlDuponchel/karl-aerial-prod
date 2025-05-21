// components/LenisProvider.js
"use client";

import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";

export default function LenisProvider({ children }) {
  const lenisRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smooth: true,
      smoothTouch: false,
    });

    lenisRef.current = lenis;

    function raf(time) {
      console.log("Lenis RAF running");
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
