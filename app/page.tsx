
"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  Download,
  Code2,
  Braces,
  Database,
  GraduationCap,
  BriefcaseBusiness,
  Sparkles,
  ExternalLink,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import { useContactModal } from "@/components/ContactModalContext";
import { getAssetPath } from "@/lib/utils";

const skillGroups = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML & CSS", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "TypeScript", level: 78 },
      { name: "React", level: 85 },
      { name: "Next.js", level: 82 },
      { name: "Tailwind CSS", level: 82 },
    ],
  },
  {
    title: "Backend & Database",
    skills: [
      { name: "Better Auth", level: 72 },
      { name: "MongoDB", level: 75 },
      { name: "REST API integration", level: 78 },
    ],
  },
  {
    title: "Tools & Workflow",
    skills: [
      { name: "Git & GitHub", level: 78 },
      { name: "Vercel", level: 75 },
      { name: "Responsive design", level: 88 },
    ],
  },
];

export default function Home() {
  const { openContactModal } = useContactModal();

  // Always start at the top when the homepage is refreshed.
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <section id="home" className="relative overflow-hidden">
          <div className="pointer-events-none absolute -right-32 -top-28 h-[440px] w-[440px] rounded-full bg-violet-100/70 blur-3xl" />
          <div className="container-width relative grid min-h-[650px] items-center gap-12 py-20 md:grid-cols-[1.15fr_.85fr]">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-100 bg-white px-4 py-2 text-sm font-semibold text-violet-700 shadow-sm">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                Open to exciting opportunities
              </div>
              <p className="eyebrow">Hello, I&apos;m</p>
              <h1 className="mt-3 text-5xl font-black leading-[1.06] tracking-[-.055em] text-ink sm:text-6xl lg:text-7xl">
                Aysha <span className="gradient-text">Akter</span>
              </h1>
              <h2 className="mt-5 text-2xl font-bold text-slate-700 sm:text-3xl">
                Full Stack Developer
              </h2>
              <p className="mt-6 max-w-xl text-base leading-8 text-muted">
                I build responsive, user-friendly web applications with modern
                technologies. I enjoy turning ideas into practical digital
                experiences and continuously learning how to build better
                products.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <a href="#projects" className="btn-primary">
                  Explore my work <ArrowUpRight size={17} />
                </a>
                <button
                  type="button"
                  onClick={openContactModal}
                  className="btn-secondary"
                >
                  Let&apos;s talk <Mail size={16} />
                </button>
                <a
                  href={getAssetPath("/resume.pdf")}
                  download="Aisha_Akter_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  Resume <Download size={16} />
                </a>
              </div>
              <div className="mt-9 flex items-center gap-4">
                <a
                  aria-label="GitHub"
                  href="https://github.com/aysha014"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-slate-200 bg-white p-3 text-slate-600 transition hover:border-brand hover:text-brand"
                >
                  <Github size={19} />
                </a>
                <a
                  aria-label="LinkedIn"
                  href="https://www.linkedin.com/in/aysha-akter-tisha/"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-slate-200 bg-white p-3 text-slate-600 transition hover:border-brand hover:text-brand"
                >
                  <Linkedin size={19} />
                </a>
                <a
                  aria-label="Email"
                  href="mailto:aishaakter014@gmail.com"
                  className="rounded-full border border-slate-200 bg-white p-3 text-slate-600 transition hover:border-brand hover:text-brand"
                >
                  <Mail size={19} />
                </a>
              </div>
              <a
                href="#about"
                className="mt-12 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-brand"
              >
                Scroll to explore <ArrowDown size={14} />
              </a>
            </div>

            <div className="relative mx-auto w-full max-w-[390px]">
              <div className="absolute -inset-5 rounded-[42px] bg-gradient-to-br from-violet-200 via-indigo-100 to-pink-100 blur-sm" />
              <div className="relative rounded-[36px] border border-white bg-white p-5 shadow-soft">
                <div className="flex aspect-[4/4.5] flex-col items-center justify-center rounded-[26px] bg-gradient-to-br from-[#eeeaff] via-[#f8f7ff] to-[#fcecf4]">
                  <div className="relative flex h-36 w-36 items-center justify-center overflow-hidden rounded-full border-8 border-white shadow-lg">
                    <Image
                      src={getAssetPath("/profile.jpg")}
                      alt="Aysha Akter"
                      width={144}
                      height={144}
                      priority
                      className="h-full w-full rounded-full object-cover"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        borderRadius: "50%",
                      }}
                    />
                  </div>
                  <p className="mt-6 text-xl font-extrabold text-ink">
                    Aysha Akter
                  </p>
                  <p className="mt-1 text-sm font-semibold text-brand">
                    Full Stack Developer
                  </p>
                </div>
                <div className="mt-4 flex items-center justify-between rounded-2xl bg-slate-50 px-4 py-3">
                  <span className="text-xs font-semibold text-slate-500">
                    Building with curiosity
                  </span>
                  <Sparkles size={18} className="text-brand" />
                </div>
              </div>
              <div className="absolute -left-8 top-14 hidden rounded-2xl border border-slate-100 bg-white p-4 shadow-soft sm:block">
                <Code2 className="text-brand" />
                <p className="mt-2 text-xs font-bold">Clean code</p>
              </div>
              <div className="absolute -right-8 bottom-14 hidden rounded-2xl border border-slate-100 bg-white p-4 shadow-soft sm:block">
                <Braces className="text-fuchsia-500" />
                <p className="mt-2 text-xs font-bold">Creative ideas</p>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="section-space bg-white">
          <div className="container-width grid gap-12 md:grid-cols-[.8fr_1.2fr]">
            <div>
              <p className="eyebrow">About me</p>
              <h2 className="section-title mt-3">
                Curious mind.
                <br />
                <span className="gradient-text">Builder at heart.</span>
              </h2>
            </div>
            <div className="space-y-5 text-[15px] leading-8 text-muted">
              <p>
                I am Aysha Akter, a Full Stack Developer with an academic
                background in Mathematics and a growing passion for software
                development. My journey combines analytical thinking with
                hands-on learning in frontend and backend technologies.
              </p>
              <p>
                I enjoy building responsive interfaces, connecting
                applications to APIs and databases, and solving the small
                details that make a product easier to use. Working with HTML,
                CSS, JavaScript, TypeScript, React, Next.js, Better Auth, and
                MongoDB has helped me understand how modern web applications
                come together.
              </p>
              <p>
                My mathematics education has strengthened my logical thinking
                and problem-solving approach. I value curiosity, consistency,
                and learning by building real projects. Outside coding, I
                enjoy exploring new ideas, learning digital tools, and spending
                time with my family.
              </p>
              <div className="grid gap-3 pt-2 sm:grid-cols-3">
                {[
                  ["10+", "Featured projects"],
                  ["MSc", "Mathematics"],
                  ["Full Stack", "Development focus"],
                ].map(([n, l]) => (
                  <div key={l} className="rounded-2xl bg-soft p-4">
                    <p className="text-2xl font-black text-brand">{n}</p>
                    <p className="mt-1 text-xs font-semibold text-slate-500">
                      {l}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="section-space bg-[#f8f9ff]">
          <div className="container-width">
            <p className="eyebrow">What I work with</p>
            <h2 className="section-title mt-3">
              Technical <span className="gradient-text">skills</span>
            </h2>
            <p className="mt-4 max-w-xl leading-7 text-muted">
              Technologies and tools I use while designing, developing, and
              improving web applications.
            </p>
            <div className="mt-10 grid gap-5 lg:grid-cols-3">
              {skillGroups.map((group) => (
                <div key={group.title} className="card p-6">
                  <div className="mb-6 flex items-center gap-3">
                    <div className="rounded-xl bg-soft p-3 text-brand">
                      <Code2 size={20} />
                    </div>
                    <h3 className="font-extrabold">{group.title}</h3>
                  </div>
                  <div className="space-y-5">
                    {group.skills.map((skill) => (
                      <div key={skill.name}>
                        <div className="mb-2 flex justify-between text-sm">
                          <span className="font-semibold text-slate-700">
                            {skill.name}
                          </span>
                          <span className="text-xs font-bold text-slate-400">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="skill-track">
                          <div
                            className="skill-fill"
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="education" className="section-space bg-white">
          <div className="container-width">
            <p className="eyebrow">Academic background</p>
            <h2 className="section-title mt-3">Education</h2>

            <div className="card mt-9 flex gap-5 p-6 sm:p-8">
              <div className="h-fit rounded-2xl bg-soft p-4 text-brand">
                <GraduationCap size={27} />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-brand">
                  Undergraduate degree
                </p>
                <h3 className="mt-2 text-xl font-extrabold">
                  Bachelor of Science (BSc) in Mathematics
                </h3>
                <p className="mt-2 text-sm leading-6 text-muted">
                  National University, Bangladesh
                </p>
                <p className="mt-3 text-sm leading-6 text-muted">
                  Built a strong foundation in pure and applied mathematics,
                  logical reasoning, analytical thinking, and quantitative
                  problem-solving.
                </p>
              </div>
            </div>

            <div className="card mt-9 flex gap-5 p-6 sm:p-8">
              <div className="h-fit rounded-2xl bg-soft p-4 text-brand">
                <GraduationCap size={27} />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-brand">
                  Postgraduate degree
                </p>
                <h3 className="mt-2 text-xl font-extrabold">
                  Master of Science (MSc) in Mathematics
                </h3>
                <p className="mt-2 text-sm leading-6 text-muted">
                  National University, Bangladesh
                </p>
                <p className="mt-3 text-sm leading-6 text-muted">
                  Developed advanced knowledge of mathematical theories,
                  analytical reasoning, differential equations, mathematical
                  modelling, and complex problem-solving.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="experience" className="section-space bg-[#f8f9ff]">
          <div className="container-width">
            <p className="eyebrow">What I do</p>
            <h2 className="section-title mt-3">
              Experience & <span className="gradient-text">focus</span>
            </h2>

            <div className="card mt-9 flex gap-5 p-6 sm:p-8">
              <div className="h-fit rounded-2xl bg-soft p-4 text-brand">
                <BriefcaseBusiness size={26} />
              </div>
              <div>
                <h3 className="text-xl font-extrabold">
                  Front-end Developer at Tarlton Technologies
                </h3>
                <p className="mt-1 text-sm font-semibold text-brand">
                  Jan 2022 – April 2026 (Remotely in USA)
                </p>
                <p className="mt-4 text-sm leading-7 text-muted">
                  Managed and maintained 2–3 WordPress websites, creating and
                  updating content while customizing designs using HTML, CSS,
                  and WordPress tools. Monitored project progress, maintained
                  content accuracy, and supported website functionality and
                  user experience through effective reporting and organization.
                </p>
              </div>
            </div>

            <div className="card mt-9 flex gap-5 p-6 sm:p-8">
              <div className="h-fit rounded-2xl bg-soft p-4 text-brand">
                <BriefcaseBusiness size={26} />
              </div>
              <div>
                <h3 className="text-xl font-extrabold">
                  Full Stack Web Development
                </h3>
                <p className="mt-1 text-sm font-semibold text-brand">
                  Project-based development
                </p>
                <p className="mt-4 text-sm leading-7 text-muted">
                  Building web applications with HTML, CSS, JavaScript,
                  TypeScript, React, Next.js, Better Auth, and MongoDB. My work
                  includes responsive UI development, API integration,
                  authentication, and database-connected application features.
                </p>
              </div>
            </div>
          </div>
        </section>

        <Projects />

        <section id="contact" className="section-space bg-[#f8f9ff]">
          <div className="container-width">
            <div className="rounded-[30px] bg-[#191d35] px-6 py-12 text-white sm:px-12 sm:py-16">
              <p className="text-xs font-extrabold uppercase tracking-[.18em] text-violet-300">
                Get in touch
              </p>
              <div className="mt-4 grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
                <div>
                  <h2 className="max-w-2xl text-3xl font-black leading-tight tracking-tight sm:text-5xl">
                    Have a project in mind? Let&apos;s build something meaningful.
                  </h2>
                  <p className="mt-5 max-w-xl text-sm leading-7 text-slate-300">
                    I&apos;m happy to connect about web development
                    opportunities, collaborations, and interesting ideas.
                  </p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <button
                    type="button"
                    onClick={openContactModal}
                    className="inline-flex w-fit items-center gap-2 rounded-full bg-[#ff6265] px-6 py-3 font-bold text-white shadow-md shadow-[#ff6265]/25 transition hover:bg-[#e85356]"
                  >
                    Let&apos;s talk <ArrowUpRight size={17} />
                  </button>
                  <a
                    href="mailto:aishaakter014@gmail.com"
                    className="inline-flex w-fit items-center gap-2 rounded-full bg-white px-6 py-3 font-bold text-ink transition hover:bg-violet-100"
                  >
                    Email me <Mail size={16} />
                  </a>
                </div>
              </div>
              <div className="mt-10 flex flex-wrap gap-x-8 gap-y-4 border-t border-white/15 pt-7 text-sm text-slate-300">
                <a
                  className="inline-flex items-center gap-2 hover:text-white"
                  href="mailto:aishaakter014@gmail.com"
                >
                  <Mail size={16} /> aishaakter014@gmail.com
                </a>
                <a
                  className="inline-flex items-center gap-2 hover:text-white"
                  href="https://github.com/aysha014"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Github size={16} /> GitHub
                </a>
                <a
                  className="inline-flex items-center gap-2 hover:text-white"
                  href="https://www.linkedin.com/in/aysha-akter-tisha/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Linkedin size={16} /> LinkedIn
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-white py-7">
        <div className="container-width flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} Aysha Akter. All rights reserved.</p>
          <a href="#home" className="font-bold text-brand">
            Back to top ↑
          </a>
        </div>
      </footer>
    </>
  );
}
