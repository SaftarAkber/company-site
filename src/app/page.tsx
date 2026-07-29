import Link from "next/link";
import { prisma } from "@/lib/prisma";
import Hero from "@/components/Hero";
import MarqueeText from "@/components/MarqueeText";
import ProjectCarousel from "@/components/ProjectCarousel";
import FadeIn from "@/components/FadeIn";
import FaqAccordion from "@/components/FaqAccordion";
import { faqs } from "@/lib/faqs";

export default async function Home() {
  const projects = await prisma.project.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <>
      <Hero />
      <MarqueeText />

      <section className="max-w-6xl mx-auto px-6 py-20">
        <FadeIn>
          <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
            <div>
              <p className="font-mono text-xs tracking-widest text-accent uppercase mb-3">
                Seçilmiş işlər
              </p>
              <h2 className="font-display text-2xl sm:text-3xl">
                Son layihələrimiz
              </h2>
            </div>
            <Link
              href="/projects"
              className="text-sm text-graphite/60 hover:text-accent transition-colors"
            >
              Hamısına bax →
            </Link>
          </div>
        </FadeIn>

        {projects.length === 0 ? (
          <p className="text-graphite/60 border border-line-light rounded-lg p-8 text-center">
            Hələ heç bir layihə əlavə olunmayıb.
          </p>
        ) : (
          <ProjectCarousel projects={projects} />
        )}
      </section>

      <section className="bg-line-light/30 border-t border-line-light">
        <div className="max-w-6xl mx-auto px-6 py-20 grid grid-cols-1 sm:grid-cols-3 gap-10">
          {[
            {
              title: "Keyfiyyət",
              desc: "Hər detala diqqət yetiririk, tələsik iş görmürük.",
            },
            {
              title: "Şəffaflıq",
              desc: "Prosesin hər addımında müştəri ilə açıq ünsiyyət.",
            },
            {
              title: "Sürət",
              desc: "Vaxtında təhvil, lazımsız gecikmə olmadan.",
            },
          ].map((item, i) => (
            <FadeIn key={item.title} delay={i * 0.1}>
              <h3 className="font-display text-xl mb-2">{item.title}</h3>
              <p className="text-sm text-graphite/60">{item.desc}</p>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-20 border-t border-line-light">
        <FadeIn>
          <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
            <div>
              <p className="font-mono text-xs tracking-widest text-accent uppercase mb-3">
                Suallar
              </p>
              <h2 className="font-display text-2xl sm:text-3xl">
                Tez-tez verilən suallar
              </h2>
            </div>
            <Link
              href="/faq"
              className="text-sm text-graphite/60 hover:text-accent transition-colors"
            >
              Hamısına bax →
            </Link>
          </div>
        </FadeIn>

        <FaqAccordion items={faqs.slice(0, 4)} />
      </section>
    </>
  );
}
