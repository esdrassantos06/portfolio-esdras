import React from 'react';

export default function GridBackground() {
  const gridStyle = {
    background: 'linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px)',
    backgroundSize: '2rem 2rem', // Ajuste o tamanho da grade
  };

  return (
  <div style={gridStyle} className="w-full bg-cover h-screen absolute -z-1 inset-shadow-[0px_0px_400px_40px_rgba(0,0,0,1)]">
  </div>
  )
}
