import React from 'react';
import Confetti from 'react-confetti';

export default function App() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-pink-200 via-pink-100 to-pink-200 overflow-hidden">
      <Confetti width={window.innerWidth} height={window.innerHeight} />
      <div className="absolute top-20 left-10 p-4 bg-yellow-200 rounded-lg shadow-lg max-w-xs">
        <p className="text-pink-700 font-semibold">Meu amor por você é infinito 💖</p>
      </div>
      <div className="absolute top-60 right-10 p-4 bg-yellow-200 rounded-lg shadow-lg max-w-xs">
        <p className="text-pink-700 font-semibold">Cada dia contigo é meu presente favorito 🌸</p>
      </div>
      <audio src="/musica/sua-musica.mp3" autoPlay loop />
      <div className="flex flex-wrap justify-center mt-40 gap-4">
        <img src="/fotos/foto1.jpg" className="w-40 h-40 rounded-full object-cover shadow-lg" alt="Foto 1" />
        <img src="/fotos/foto2.jpg" className="w-40 h-40 rounded-full object-cover shadow-lg" alt="Foto 2" />
        <img src="/fotos/foto3.jpg" className="w-40 h-40 rounded-full object-cover shadow-lg" alt="Foto 3" />
      </div>
    </div>
  );
}