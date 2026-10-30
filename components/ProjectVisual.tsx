import { BarChart3, Dumbbell, CalendarDays, ArrowUpRight } from "lucide-react";

export default function ProjectVisual({ type }: { type: "bazardor" | "fitlog" | "devconf" }) {
  if (type === "bazardor") return (
    <div className="project-art bg-gradient-to-br from-emerald-50 via-white to-teal-100 p-5">
      <div className="flex items-center justify-between"><span className="font-black text-emerald-900">বাজারদর</span><span className="rounded-full bg-white px-3 py-1 text-xs text-emerald-800">আজকের দাম</span></div>
      <div className="mt-7 grid grid-cols-2 gap-3">
        {["চাল","আলু","পেঁয়াজ","ডিম"].map((x,i)=><div key={x} className="rounded-xl border border-emerald-100 bg-white/90 p-3"><div className="text-xs text-slate-500">{x}</div><div className="mt-2 h-2 rounded bg-emerald-100"/><div className="mt-2 text-xs font-bold text-emerald-800">{i%2===0?"দাম বেড়েছে":"দাম কমেছে"}</div></div>)}
      </div>
      <BarChart3 className="absolute bottom-4 right-5 text-emerald-300" size={28}/>
    </div>
  );
  if (type === "fitlog") return (
    <div className="project-art bg-gradient-to-br from-violet-100 via-white to-indigo-100 p-5">
      <div className="flex items-center justify-between"><span className="font-extrabold text-violet-950">FitLog</span><span className="rounded-full bg-white px-3 py-1 text-xs text-violet-700">My workouts</span></div>
      <div className="mt-7 flex items-end gap-3">
        {[42,65,52,82,60,94,72].map((h,i)=><div key={i} className="flex-1 rounded-t-lg bg-violet-300" style={{height:`${h}px`}}/>)}
      </div>
      <div className="mt-3 flex items-center gap-2 text-xs font-semibold text-violet-800"><Dumbbell size={16}/> Build your routine</div>
    </div>
  );
  return (
    <div className="project-art bg-gradient-to-br from-orange-50 via-white to-rose-100 p-5">
      <div className="flex items-center justify-between"><span className="font-black tracking-tight text-slate-900">DEVCONF <span className="text-rose-500">2026</span></span><CalendarDays className="text-rose-400"/></div>
      <div className="mt-8 max-w-[230px] text-3xl font-black leading-none tracking-tight text-slate-900">Ideas into <span className="text-rose-500">impact.</span></div>
      <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-xs font-bold text-white">Explore event <ArrowUpRight size={13}/></div>
    </div>
  );
}
