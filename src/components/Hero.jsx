import { Stethoscope, Star, ShieldCheck } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-sky-900 via-slate-900 to-slate-950" />
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(1000px_500px_at_10%_0%,#38bdf8,transparent),radial-gradient(800px_400px_at_90%_100%,#818cf8,transparent)]" />
      <div className="relative max-w-7xl mx-auto px-6 pt-28 pb-20 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 ring-1 ring-white/15 text-sky-200 text-sm mb-4">
            <Stethoscope size={18} />
            Бариатрическая и общая хирургия
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Врач-хирург, специализация — бариатрическая хирургия
          </h1>
          <p className="text-slate-300 mt-5 text-lg leading-relaxed">
            Помогаю безопасно и эффективно бороться с ожирением и сопутствующими
            заболеваниями. Современные малоинвазивные методики, индивидуальный подход,
            сопровождение на всех этапах.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#contact" className="px-5 py-3 rounded-xl bg-sky-500 hover:bg-sky-400 text-white font-medium transition">
              Записаться на консультацию
            </a>
            <a href="#services" className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-slate-100 font-medium transition">
              Операции и услуги
            </a>
          </div>
          <div className="mt-8 flex items-center gap-6 text-slate-300/90">
            <div className="flex items-center gap-2"><Star className="text-yellow-400" size={18}/> 4.9/5 по отзывам</div>
            <div className="flex items-center gap-2"><ShieldCheck className="text-emerald-400" size={18}/> Опыт более 10 лет</div>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-sky-600/30 to-indigo-600/20 ring-1 ring-white/10 p-2">
            <div className="w-full h-full rounded-2xl bg-[url('https://images.unsplash.com/photo-1760764541302-e3955fbc6b2b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjM0MTE5NzJ8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80')] bg-cover bg-center" />
          </div>
        </div>
      </div>
    </section>
  );
}
