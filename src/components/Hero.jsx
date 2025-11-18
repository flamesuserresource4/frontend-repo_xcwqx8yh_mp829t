import { Stethoscope, Star, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-rose-950 via-black to-slate-950" />
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(1200px_500px_at_10%_0%,#b91c1c,transparent),radial-gradient(1000px_500px_at_90%_100%,#111827,transparent)]" />
      <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-24 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 ring-1 ring-white/15 text-rose-200 text-sm mb-4"
          >
            <Stethoscope size={18} />
            Бариатрическая и общая хирургия
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-6xl font-extrabold text-white leading-tight"
          >
            Врач-хирург, специализация — бариатрическая хирургия
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-slate-300 mt-5 text-lg leading-relaxed"
          >
            Помогаю безопасно и эффективно бороться с ожирением и сопутствующими
            заболеваниями. Современные малоинвазивные методики, индивидуальный подход,
            сопровождение на всех этапах.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a href="#contact" className="px-5 py-3 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-medium transition">
              Записаться на консультацию
            </a>
            <a href="#services" className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-slate-100 font-medium transition">
              Операции и услуги
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="mt-8 flex items-center gap-6 text-slate-300/90"
          >
            <div className="flex items-center gap-2"><Star className="text-yellow-400" size={18}/> 4.9/5 по отзывам</div>
            <div className="flex items-center gap-2"><ShieldCheck className="text-emerald-400" size={18}/> Опыт более 10 лет</div>
          </motion.div>
        </div>
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-rose-700/30 to-slate-700/20 ring-1 ring-white/10 p-2"
          >
            <motion.div
              initial={{ clipPath: "inset(0 100% 0 0)" }}
              animate={{ clipPath: "inset(0 0% 0 0)" }}
              transition={{ duration: 1, delay: 0.3 }}
              className="w-full h-full rounded-2xl bg-[url('https://images.unsplash.com/photo-1760764541302-e3955fbc6b2b?ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80')] bg-cover bg-center"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="absolute -inset-16 bg-[radial-gradient(300px_200px_at_80%_20%,rgba(244,63,94,0.25),transparent)]"
          />
        </div>
      </div>
    </section>
  );
}
