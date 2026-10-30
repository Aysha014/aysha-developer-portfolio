"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { useContactModal } from "@/components/ContactModalContext";

const links = [
  ["About", "#about"],
  ["Skills", "#skills"],
  ["Education", "#education"],
  ["Experience", "#experience"],
  ["Projects", "#projects"],
  ["Contact", "#contact"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { openContactModal } = useContactModal();

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100/80 bg-white/85 backdrop-blur-xl">
      <nav className="container-width flex h-[76px] items-center justify-between">
        <Link href="/" className="text-xl font-black tracking-tight text-ink">
          Aysha<span className="text-brand">.</span>
        </Link>
        <div className="hidden items-center gap-7 md:flex">
          {links.map(([label, href]) => (
            <a key={label} href={href} className="text-sm font-semibold text-slate-600 transition hover:text-brand">
              {label}
            </a>
          ))}
          <button
            type="button"
            onClick={openContactModal}
            className="btn-primary !px-5 !py-2.5 text-sm"
          >
            Let&apos;s talk <ArrowUpRight size={16} />
          </button>
        </div>
        <button aria-label="Toggle navigation" onClick={() => setOpen(!open)} className="rounded-xl border border-slate-200 p-2 md:hidden">
          {open ? <X size={21} /> : <Menu size={21} />}
        </button>
      </nav>
      {open && (
        <div className="container-width grid gap-1 pb-5 md:hidden">
          {links.map(([label, href]) => (
            <a key={label} href={href} onClick={() => setOpen(false)} className="rounded-xl px-3 py-3 font-semibold text-slate-700 hover:bg-soft">
              {label}
            </a>
          ))}
          <button
            type="button"
            onClick={() => {
              setOpen(false);
              openContactModal();
            }}
            className="btn-primary mt-2"
          >
            Let&apos;s talk <ArrowUpRight size={16} />
          </button>
        </div>
      )}
    </header>
  );
}
