"use client";
import { useEffect, useState } from "react";

const ScrollProgressBar = () => {
  const [scroll, setScroll] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const winScroll = window.scrollY;
      const height = doc.scrollHeight - window.innerHeight;
      setScroll(height > 0 ? (winScroll / height) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: `${scroll}%`, height: '4px', background: 'linear-gradient(90deg, #b39ddb, #a5b4fc)', zIndex: 50, transition: 'width 0.2s cubic-bezier(0.4,0,0.2,1)' }} />
  );
};

export default ScrollProgressBar; 