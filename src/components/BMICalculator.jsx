import { useState } from "react";
import { motion } from "framer-motion";

const API = import.meta.env.VITE_BACKEND_URL || "";

export default function BMICalculator() {
  const [height, setHeight] = useState(170);
  const [weight, setWeight] = useState(80);
  const [result, setResult] = useState(null);

  const calcLocal = () => {
    const h = Number(height) / 100;
    if (!h) return;
    const bmi = Number(weight) / (h * h);
    return { bmi: Math.round(bmi * 10) / 10 };
  };

  const handleCalc = async () => {
    try {
      const res = await fetch(`${API}/api/bmi`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ height_cm: Number(height), weight_kg: Number(weight) }),
      });
      if (res.ok) {
        const data = await res.json();
        setResult(data);
        return;
      }
    } catch {}
    // Fallback local calculation
    setResult(calcLocal());
  };

  return (
    <section id="bmi" className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-rose-950">Калькулятор ИМТ</h2>
        <p className="text-slate-600 mt-2">Рассчитайте индекс массы тела и узнайте свою категорию.</p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mt-8 grid sm:grid-cols-3 gap-4"
        >
          <div>
            <label className="text-sm text-slate-600">Рост (см)</label>
            <input type="number" value={height} onChange={e=>setHeight(e.target.value)} className="w-full mt-1 px-3 py-2 rounded-xl ring-1 ring-slate-300 focus:ring-rose-400 outline-none" />
          </div>
          <div>
            <label className="text-sm text-slate-600">Вес (кг)</label>
            <input type="number" value={weight} onChange={e=>setWeight(e.target.value)} className="w-full mt-1 px-3 py-2 rounded-xl ring-1 ring-slate-300 focus:ring-rose-400 outline-none" />
          </div>
          <div className="flex items-end">
            <button onClick={handleCalc} className="w-full px-4 py-2 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-medium">Рассчитать</button>
          </div>
        </motion.div>

        {result && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 p-4 rounded-xl bg-rose-50 ring-1 ring-rose-200 text-rose-900"
          >
            Ваш ИМТ: <span className="font-semibold">{result.bmi}</span>{result.category ? ` — ${result.category}` : ''}
          </motion.div>
        )}
      </div>
    </section>
  );
}
