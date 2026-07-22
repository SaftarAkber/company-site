"use client";
import { motion } from "framer-motion";

type Project = {
  id: number;
  title: string;
  description: string;
  imageUrl: string | null;
  link: string | null;
};

export default function ProjectsGrid({ projects }: { projects: Project[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((p, i) => (
        <motion.div
          key={p.id}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: (i % 6) * 0.08 }}
          className="group relative rounded-2xl overflow-hidden border border-line-light bg-ink h-72"
        >
          <img
            src={p.imageUrl || `https://picsum.photos/seed/project-${p.id}/800/600`}
            alt={p.title}
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />

          <span className="absolute top-4 left-4 font-mono text-[10px] tracking-widest text-accent uppercase bg-ink/60 backdrop-blur px-2 py-1 rounded-full">
            {String(i + 1).padStart(2, "0")}
          </span>

          <div className="absolute bottom-0 left-0 right-0 p-5">
            <h3 className="font-display text-xl text-paper mb-1">{p.title}</h3>
            <p className="text-sm text-paper/70 line-clamp-2 mb-3">{p.description}</p>
            {p.link && (
              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm text-accent opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all"
              >
                Bax →
              </a>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  );
}