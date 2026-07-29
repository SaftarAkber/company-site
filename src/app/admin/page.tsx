import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

async function addProject(formData: FormData) {
  "use server";
  await prisma.project.create({
    data: {
      title: formData.get("title") as string,
      description: formData.get("description") as string,
      imageUrl: formData.get("imageUrl") as string,
      link: formData.get("link") as string,
    },
  });
  revalidatePath("/admin");
  revalidatePath("/projects");
}

async function deleteProject(formData: FormData) {
  "use server";
  const id = Number(formData.get("id"));
  await prisma.project.delete({ where: { id } });
  revalidatePath("/admin");
  revalidatePath("/projects");
}

export default async function AdminDashboard() {
  const projects = await prisma.project.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="max-w-3xl mx-auto py-12 px-4">
      <h1 className="text-2xl font-bold mb-6">Admin Panel</h1>

      <form action={addProject} className="space-y-3 mb-10 border p-4 rounded">
        <input
          name="title"
          placeholder="Başlıq"
          className="border p-2 w-full"
          required
        />
        <textarea
          name="description"
          placeholder="Təsvir"
          className="border p-2 w-full"
          required
        />
        <input
          name="imageUrl"
          placeholder="Şəkil URL (opsional)"
          className="border p-2 w-full"
        />
        <input
          name="link"
          placeholder="Layihə linki (opsional)"
          className="border p-2 w-full"
        />
        <button className="bg-ink text-paper px-4 py-2 rounded transition-colors duration-300 hover:bg-accent">
          Əlavə et
        </button>
      </form>

      <div className="space-y-3">
        {projects.map((p) => (
          <div
            key={p.id}
            className="flex justify-between items-center border p-3 rounded"
          >
            <span>{p.title}</span>
            <form action={deleteProject}>
              <input type="hidden" name="id" value={p.id} />
              <button className="text-red-600 transition-colors duration-300 hover:text-red-400">
                Sil
              </button>
            </form>
          </div>
        ))}
      </div>
    </div>
  );
}
