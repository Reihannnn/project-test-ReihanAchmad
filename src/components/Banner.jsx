import { useState, useEffect } from "react";

const Banner = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative h-96 overflow-hidden bg-gradient-to-br from-gray-600 to-gray-800 clip-diagonal">
      <div
        className="absolute inset-0 bg-gray-700 opacity-50"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cpath d='M20,20 L80,20 L80,80 L20,80 Z' fill='none' stroke='%23fff' stroke-width='0.5' opacity='0.1'/%3E%3C/svg%3E")`,
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      />
      <div className="relative z-10 h-full flex items-center justify-center text-white text-center">
        <div style={{ transform: `translateY(${scrollY * 0.2}px)` }}>
          <h1 className="text-6xl mb-4">Ideas</h1>
          <p className="text-xl opacity-90">Where all our great things begin</p>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-100 to-transparent"></div>
    </div>
  );
};

export default Banner;
