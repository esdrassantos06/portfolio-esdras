export default function AuroraFallback() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-20"
      style={{
        backgroundColor: "#0a0a0a",
        backgroundImage: [
          "radial-gradient(75% 60% at 18% 8%, rgba(126, 42, 168, 0.42), transparent 62%)",
          "radial-gradient(65% 55% at 88% 72%, rgba(96, 30, 140, 0.38), transparent 64%)",
          "radial-gradient(90% 65% at 55% 108%, rgba(150, 66, 200, 0.30), transparent 66%)",
        ].join(","),
      }}
    />
  );
}
