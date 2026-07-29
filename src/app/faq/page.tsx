import FadeIn from "@/components/FadeIn";
import FaqAccordion from "@/components/FaqAccordion";

export default function FAQ() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-20">
      <FadeIn>
        <p className="font-mono text-xs tracking-widest text-accent uppercase mb-4">Suallar</p>
        <h1 className="font-display text-3xl sm:text-4xl mb-4">Tez-tez verilən suallar</h1>
        <p className="text-graphite/60 max-w-xl mb-12">
          Ən çox soruşulan sualların cavablarını burada tapa bilərsən. Başqa sualın varsa,
          bizimlə birbaşa əlaqə saxlaya bilərsən.
        </p>
      </FadeIn>

      <FaqAccordion />
    </section>
  );
}