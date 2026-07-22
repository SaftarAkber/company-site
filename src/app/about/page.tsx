export default function About() {
  return (
    <>
      <section className="max-w-6xl mx-auto px-6 py-20">
        <p className="font-mono text-xs tracking-widest text-accent uppercase mb-4">
          Haqqımızda
        </p>
        <h1 className="font-display text-3xl sm:text-4xl max-w-2xl mb-6">
          Kiçik komanda, böyük diqqət.
        </h1>
        <p className="text-graphite/70 max-w-2xl text-base sm:text-lg">
          Burada şirkət haqqında qısa məlumat yazılacaq — nə edirik, kimlər üçün
          işləyirik, hansı sahədə ixtisaslaşmışıq.
        </p>
      </section>

      <section className="border-t border-line-light">
        <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="font-display text-2xl mb-4">Missiyamız</h2>
            <p className="text-graphite/70 leading-relaxed">
              Burada şirkətin missiyası, fəlsəfəsi və işləmə prinsipləri haqqında
              bir neçə paraqraf yazıla bilər. Real məzmun əlavə et.
            </p>
          </div>

          <div className="bg-ink text-paper rounded-lg p-8 flex flex-col gap-4">
            <div className="flex justify-between border-b border-paper/10 pb-3">
              <span className="text-paper/60 text-sm">Qurulub</span>
              <span className="font-mono text-sm">2024</span>
            </div>
            <div className="flex justify-between border-b border-paper/10 pb-3">
              <span className="text-paper/60 text-sm">Yer</span>
              <span className="font-mono text-sm">Gəncə, Azərbaycan</span>
            </div>
            <div className="flex justify-between">
              <span className="text-paper/60 text-sm">Fokus</span>
              <span className="font-mono text-sm">Rəqəmsal məhsullar</span>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-line-light bg-line-light/30">
        <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-3 gap-10">
          {[
            { title: "Etibarlılıq", desc: "Verdiyimiz sözü tuturuq, deadline-lara sadiqik." },
            { title: "Sadəlik", desc: "Mürəkkəb problemlərə sadə həllər tapırıq." },
            { title: "Əməkdaşlıq", desc: "Müştəri ilə bir komanda kimi işləyirik." },
          ].map((v) => (
            <div key={v.title} className="border border-line-light bg-paper rounded-lg p-6">
              <h3 className="font-display text-lg mb-2">{v.title}</h3>
              <p className="text-sm text-graphite/60">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}