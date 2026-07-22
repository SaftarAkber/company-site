export default function Footer() {
  return (
    <footer className="bg-ink border-t border-line">
      <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div>
          <p className="font-display text-xl text-paper mb-2">Şirkət Adı</p>
          <p className="text-sm text-paper/60 max-w-sm">
            Fikirlərdən nəticəyə — rəqəmsal məhsullar quraşdırırıq.
          </p>
        </div>

        <div className="flex flex-col gap-1 text-sm text-paper/60 md:text-right">
          <a href="mailto:info@sirket.az" className="hover:text-accent transition-colors">
            info@sirket.az
          </a>
          <span>© {new Date().getFullYear()} Şirkət Adı. Bütün hüquqlar qorunur.</span>
        </div>
      </div>
    </footer>
  );
}