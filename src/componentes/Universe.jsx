import React, { useEffect, useRef } from "react";
import "../estilos/Universe.css";

export default function Universe() {
  const universeRef = useRef(null);

  useEffect(() => {
    const universe = universeRef.current;
    if (!universe) return;

    const starCount = 300;
    const width = window.innerWidth;
    const height = window.innerHeight;

    for (let i = 0; i < starCount; i++) {
      const ypos = Math.random() * height;
      const xposStart = width;

      const star = document.createElement("div");

      const size = Math.floor(Math.random() * 3) + 1;
      star.className = `star${size}`;

      star.style.backgroundColor = "white";

      star.style.top = `${ypos}px`;
      star.style.left = `${xposStart}px`;

      universe.appendChild(star);

      const speed = Math.random() * 20 + 10;

      star.animate(
        [
          { transform: `translateX(0px)` },
          { transform: `translateX(-${width + 200}px)` },
        ],
        {
          duration: speed * 1000,
          iterations: Infinity,
          easing: "linear",
          delay: Math.random() * -speed * 1000,
        }
      );
    }
  }, []);

  return <div id="universe" ref={universeRef}></div>;
}
