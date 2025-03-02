'use client'

export default function Navbar() {
  return (
    <header
      className={`fixed top-12 left-1/2 transform -translate-x-1/2 flex justify-center z-50 transition-all duration-300
      }`}
    >
      <nav className="flex bg-fundo2 w-80 h-14 items-center text-principal justify-around border border-gray-200/50 rounded-lg">
        <ul className="flex gap-4 items-center">
          <li className="text-lg transition-all duration-300 hover:text-principal/60"><a href="#home">Home</a></li>
          <li className="text-lg transition-all duration-300 hover:text-principal/60"><a href="#about">About</a></li>
          <li className="text-lg transition-all duration-300 hover:text-principal/60"><a href="#work">Work</a></li>
          <li className="text-lg transition-all duration-300  hover:text-principal/60"><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}