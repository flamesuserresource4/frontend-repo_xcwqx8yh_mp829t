import { Scissors, Activity, HeartPulse, Pill, Stethoscope, Syringe } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  { icon: Scissors, title: "Рукавная гастрэктомия", type: "Бариатрическая", desc: "Лапароскопическое уменьшение объёма желудка." },
  { icon: Activity, title: "Гастрошунтирование", type: "Бариатрическая", desc: "Комбинированная операция для стойкого снижения веса." },
  { icon: Pill, title: "ВЖБ (баллон)", type: "Бариатрическая", desc: "Временная методика коррекции веса." },
  { icon: HeartPulse, title: "Холецистэктомия", type: "Общая", desc: "Удаление желчного пузыря лапароскопически." },
  { icon: Stethoscope, title: "Грыжесечение", type: "Общая", desc: "Паховые, пупочные, послеоперационные грыжи." },
  { icon: Syringe, title: "Аппендэктомия", type: "Общая", desc: "Малоинвазивное удаление аппендикса." },
];

export default function Services() {
  return (
    <section id="services" className="relative py-20 bg-slate-50">
      <div className="absolute inset-0 bg-[radial-gradient(600px_300px_at_10%_0%,rgba(190,18,60,0.08),transparent)]" />
      <div className="relative max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-rose-950">Операции и услуги</h2>
        <p className="text-slate-600 mt-2">Современные методики, безопасность и доказательная медицина.</p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="rounded-2xl bg-white p-6 ring-1 ring-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-0.5 transition will-change-transform"
            >
              <div className="w-12 h-12 rounded-xl bg-rose-100 text-rose-700 flex items-center justify-center">
                <s.icon />
              </div>
              <div className="mt-4">
                <div className="text-xs uppercase tracking-wide text-slate-500">{s.type}</div>
                <h3 className="text-xl font-semibold text-slate-900 mt-1">{s.title}</h3>
                <p className="text-slate-600 mt-2">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
