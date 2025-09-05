"use client";
import { useState, useEffect, useRef } from "react";

export default function SurpresaBruna() {
  const [showMessage, setShowMessage] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const photoRefs = useRef([]);
  const confettiRef = useRef(null);

  const photoFiles = [
    "/fotos/foto1.jpg",
    "/fotos/foto2.jpg",
    "/fotos/foto3.jpg",
    "/fotos/foto4.jpg",
    "/fotos/foto5.jpg",
    "/fotos/foto6.jpg",
    "/fotos/foto7.jpg",
    "/fotos/foto8.jpg",
    "/fotos/foto9.jpg",
    "/fotos/foto10.jpg",
  ];

  const heartPoint = (t) => {
    const x = 16 * Math.sin(t) ** 3;
    const y = 13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t);
    return { x: (x + 16) / 32 * 100, y: (1 - (y + 17) / 30) * 100 };
  };

  useEffect(() => {
    audioRef.current = new Audio("/musica/musica.mp3");
    audioRef.current.loop = true;
    audioRef.current.volume = 0.5;
  }, []);

  const toggleMusic = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().catch(() => alert("Clique novamente para tocar a música!"));
      setIsPlaying(true);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 to-rose-200 flex flex-col items-center justify-center p-6 relative overflow-hidden">
      <h1 className="text-3xl md:text-4xl font-bold text-pink-800 mb-6 text-center drop-shadow">
        Para Bruna, com todo meu carinho ❤️
      </h1>
      <button
        onClick={toggleMusic}
        className="fixed bottom-5 right-5 px-4 py-2 rounded-full shadow-lg bg-white/80 backdrop-blur border hover:scale-105 transition"
      >
        {isPlaying ? "⏸ Pausar música" : "▶️ Tocar música"}
      </button>
    </div>
  );
}
