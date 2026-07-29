export default function Logo({
  variant = "white",
  className = "",
}: {
  variant?: "white" | "black";
  className?: string;
}) {
  const src = variant === "white" ? "/logo-white.png" : "/logo-black.png";
  return <img src={src} alt="Loomtra" className={`h-9 w-auto ${className}`} />;
}