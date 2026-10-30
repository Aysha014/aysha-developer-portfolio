import Link from "next/link";
import { ArrowUpRight, Github } from "lucide-react";
import { projects } from "@/data/projects";
import ProjectVisual from "@/components/ProjectVisual";

export default function Projects() {
  return (
    <section id="projects" className="section-space bg-white">
      <div className="container-width">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div><p className="eyebrow">Selected work</p><h2 className="section-title mt-3">Projects I&apos;ve <span className="gradient-text">built</span></h2></div>
          
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article key={project.slug} className="card group p-4 transition duration-300 hover:-translate-y-1 hover:shadow-soft">
              <ProjectVisual type={project.visual}/>
              <div className="px-1 pb-1 pt-5">
                <p className="text-xs font-bold uppercase tracking-wider text-brand">{project.subtitle}</p>
                <h3 className="mt-2 text-xl font-extrabold">{project.name}</h3>
                <p className="mt-3 min-h-[72px] text-sm leading-6 text-muted">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">{project.stack.slice(0,4).map(s=><span key={s} className="rounded-full bg-soft px-3 py-1 text-xs font-semibold text-slate-600">{s}</span>)}</div>
                <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4">
                  <Link href={`/projects/${project.slug}`} className="inline-flex items-center gap-2 text-sm font-bold text-brand hover:gap-3">View details <ArrowUpRight size={16}/></Link>
                  <a href={project.githubUrl} target="_blank" rel="noreferrer" aria-label={`${project.name} GitHub profile`} className="rounded-full p-2 text-slate-500 hover:bg-soft hover:text-brand"><Github size={18}/></a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
