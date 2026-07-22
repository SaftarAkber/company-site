import { prisma } from "@/lib/prisma";
import ProjectsGrid from "@/components/ProjectsGrid";
import FadeIn from "@/components/FadeIn";

export default async function Projects() {
  const projects = await prisma.project.findMany({ orderBy: { createdAt: "desc" } });

  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <FadeIn>
        <p className="font-mono text-xs tracking-widest text-accent uppercase mb-4">Arxiv</p>
        <h1 className="font-display text-3xl sm:text-4xl mb-4">Layihələr</h1>
        <p className="text-graphite/60 max-w-xl mb-12">
          Həyata keçirdiyimiz seçilmiş işlərin siyahısı.
        </p>
      </FadeIn>

      {projects.length === 0 ? (
        <div className="border border-line-light rounded-lg p-12 text-center text-graphite/60">
          Hələ heç bir layihə əlavə olunmayıb.
        </div>
      ) : (
        <ProjectsGrid projects={projects} />
      )}
    </section>
  );
}