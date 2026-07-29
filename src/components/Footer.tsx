import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-ink border-t border-line">
      <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div className="flex items-center gap-3">
          <Logo variant="white" />
          <div>
            <p className="font-display text-xl text-paper mb-1">
              Loomtra Web Technologies
            </p>
            <p className="text-sm text-paper/60 max-w-sm">
              Fikirlərdən nəticəyə — rəqəmsal məhsullar quraşdırırıq.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-1 text-sm text-paper/60 md:text-right">
          <a href="mailto:info@loomtra.az" className="transition-colors duration-300 hover:text-accent">
            info@loomtra.az
          </a>
          <span>© {new Date().getFullYear()} Loomtra Web Technologies. Bütün hüquqlar qorunur.</span>
        </div>
      </div>
    </footer>
  );
}