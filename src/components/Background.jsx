const Background = () => {
  return (
    <div
      className="pointer-events-none absolute left-1/2 top-0 -z-10 h-full min-h-screen w-screen -translate-x-1/2"
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-black/40" />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url(/assets/herobg.webp)",
          backgroundPosition: "bottom center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      />
    </div>
  );
};

export default Background;
