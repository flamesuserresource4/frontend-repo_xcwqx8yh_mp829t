import { useState } from "react";

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
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Калькулятор ИМТ</h2>
        <p className="text-slate-600 mt-2">Рассчитайте индекс массы тела и узнайте свою категорию.</p>

        <div className="mt-8 grid sm:grid-cols-3 gap-4">
          <div>
            <label className="text-sm text-slate-600">Рост (см)</label>
            <input type="number" value={height} onChange={e=>setHeight(e.target.value)} className="w-full mt-1 px-3 py-2 rounded-xl ring-1 ring-slate-300 focus:ring-sky-400 outline-none" />
          </div>
          <div>
            <label className="text-sm text-slate-600">Вес (кг)</label>
            <input type="number" value={weight} onChange={e=>setWeight(e.target.value)} className="w-full mt-1 px-3 py-2 rounded-xl ring-1 ring-slate-300 focus:ring-sky-400 outline-none" />
          </div>
          <div className="flex items-end">
            <button onClick={handleCalc} className="w-full px-4 py-2 rounded-xl bg-sky-500 hover:bg-sky-400 text-white font-medium">Рассчитать</button>
          </div>
        </div>

        {result && (
          <div className="mt-6 p-4 rounded-xl bg-sky-50 ring-1 ring-sky-200 text-sky-900">
            Ваш ИМТ: <span className="font-semibold">{result.bmi}</span>{result.category ? ` — ${result.category}` : ''}
          </div>
        )}
      </div>
    </section>
  );
}
