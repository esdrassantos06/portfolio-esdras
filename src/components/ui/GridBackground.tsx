import { memo } from "react";

function GridBackground() {
  const gridStyle = {
    background:
      "linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px)",
    backgroundSize: "2rem 2rem",
  };

  return (
    <div
      style={gridStyle}
      className="gridbg pointer-events-none absolute top-0 left-0 -z-10 h-screen w-full bg-cover"
    />
  );
}

export default memo(GridBackground);
