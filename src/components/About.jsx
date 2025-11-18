import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="relative py-24 bg-gradient-to-b from-rose-900/20 to-transparent">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[1.2fr_1fr] gap-12 items-center">
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-white"
          >
            О себе
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-slate-200/90 mt-4 text-lg leading-relaxed"
          >
            Бариатрический и общий хирург. Более 10 лет клинической практики, сотни успешных
            операций, современный подход и внимательное сопровождение пациента на всех этапах.
            Работаю с международными протоколами и уделяю особое внимание реабилитации.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 grid sm:grid-cols-3 gap-4"
          >
            {[{k:"Опыт",v:"10+ лет"},{k:"Операций",v:"500+"},{k:"Рейтинг",v:"4.9/5"}].map((i,idx)=>(
              <div key={idx} className="rounded-2xl bg-white/5 ring-1 ring-white/15 p-5 text-slate-100">
                <div className="text-sm text-slate-300">{i.k}</div>
                <div className="text-2xl font-semibold">{i.v}</div>
              </div>
            ))}
          </motion.div>
        </div>
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ type: "spring", stiffness: 80, damping: 15 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-tr from-rose-600/40 to-fuchsia-600/30 blur-2xl rounded-3xl" />
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden ring-1 ring-white/20 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1604882737201-83c41b9e7c9a?q=80&w=1400&auto=format&fit=crop"
                alt="doctor"
                className="w-full h-full object-cover"
              />
              <motion.div
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent text-white"
              >
                Ваше имя, врач-хирург
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
