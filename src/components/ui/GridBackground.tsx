export default function GridBackground() {
  const gridStyle = {
    background:
      "linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px)",
    backgroundSize: "2rem 2rem",
  };

  return (
    <div
      style={gridStyle}
      className="w-full gridbg bg-cover h-screen absolute top-0 left-0 -z-10 pointer-events-none"
    />
  );
}
