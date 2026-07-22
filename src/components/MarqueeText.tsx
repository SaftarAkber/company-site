import Marquee from "./Marquee";

export default function MarqueeText() {
  const words = ["DİZAYN", "KOD", "STRATEGİYA", "BREND", "MƏHSUL", "İNNOVASİYA"];

  return (
    <div className="marquee-wrap bg-accent text-ink py-3 border-y border-line">
      <Marquee speed={60}>
        {words.map((w, i) => (
          <span key={i} className="font-mono text-sm font-medium px-6 whitespace-nowrap">
            {w} ✦
          </span>
        ))}
      </Marquee>
    </div>
  );
}