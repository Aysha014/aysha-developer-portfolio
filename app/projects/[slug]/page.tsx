import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Github, ExternalLink, CheckCircle2 } from "lucide-react";
import { getProject, projects } from "@/data/projects";
import ProjectVisual from "@/components/ProjectVisual";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectDetails({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <main className="min-h-screen bg-[#fbfcff] py-10 sm:py-16">
      <div className="container-width">
        <Link href="/#projects" className="inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-brand"><ArrowLeft size={16}/> Back to portfolio</Link>
        <div className="mt-8 grid gap-8 lg:grid-cols-[1.05fr_.95fr] lg:items-center">
          <div><p className="eyebrow">Project case study</p><h1 className="mt-3 text-4xl font-black tracking-tight sm:text-6xl">{project.name}</h1><p className="mt-4 text-lg font-semibold text-brand">{project.subtitle}</p><p className="mt-5 max-w-2xl leading-8 text-muted">{project.description}</p><div className="mt-8 flex flex-wrap gap-3"><a href={project.liveUrl} target="_blank" rel="noreferrer" className="btn-primary">View live project <ExternalLink size={16}/></a><a href={project.githubUrl} target="_blank" rel="noreferrer" className="btn-secondary">GitHub profile <Github size={16}/></a></div></div>
          <ProjectVisual type={project.visual}/>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          <section className="card p-6 sm:p-8"><h2 className="text-xl font-extrabold">Technology stack</h2><div className="mt-5 flex flex-wrap gap-2">{project.stack.map(item=><span key={item} className="rounded-full bg-soft px-4 py-2 text-sm font-semibold text-slate-700">{item}</span>)}</div></section>
          <section className="card p-6 sm:p-8"><h2 className="text-xl font-extrabold">Key features</h2><ul className="mt-5 space-y-3">{project.features.map(item=><li key={item} className="flex gap-3 text-sm leading-6 text-muted"><CheckCircle2 size={18} className="mt-0.5 shrink-0 text-brand"/>{item}</li>)}</ul></section>
          <section className="card p-6 sm:p-8"><h2 className="text-xl font-extrabold">Challenges faced</h2><p className="mt-4 text-sm leading-7 text-muted">{project.challenge}</p></section>
          <section className="card p-6 sm:p-8"><h2 className="text-xl font-extrabold">Future improvements</h2><ul className="mt-5 space-y-3">{project.improvements.map(item=><li key={item} className="flex gap-3 text-sm leading-6 text-muted"><span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-brand"/>{item}</li>)}</ul></section>
        </div>
        <div className="mt-10 text-center"><Link href="/#projects" className="inline-flex items-center gap-2 text-sm font-bold text-brand">Explore more projects <ArrowUpRight size={16}/></Link></div>
        <p className="mt-12 text-center text-xs text-slate-400">© {new Date().getFullYear()} Aysha Akter</p>
      </div>
    </main>
  );
}
