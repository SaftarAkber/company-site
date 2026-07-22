import Marquee from "./Marquee";

type Project = {
  id: number;
  title: string;
  description: string;
  imageUrl: string | null;
  link: string | null;
};

export default function ProjectCarousel({ projects }: { projects: Project[] }) {
  if (projects.length === 0) return null;

  return (
    <div className="marquee-wrap -mx-6 px-6">
      <Marquee speed={45}>
        {projects.map((p) => (
          <div
            key={p.id}
            className="w-72 shrink-0 mr-6 border border-line-light rounded-xl overflow-hidden bg-paper hover:-translate-y-1 transition-transform duration-300"
          >
            <img
              src={p.imageUrl || `https://picsum.photos/seed/project-${p.id}/600/400`}
              alt={p.title}
              className="w-full h-44 object-cover"
            />
            <div className="p-5">
              <h3 className="font-display text-lg mb-1">{p.title}</h3>
              <p className="text-sm text-graphite/60 line-clamp-2">{p.description}</p>
            </div>
          </div>
        ))}
      </Marquee>
    </div>
  );
}