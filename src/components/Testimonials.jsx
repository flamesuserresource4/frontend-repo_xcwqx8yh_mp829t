import { Star } from "lucide-react";
import { useEffect, useState } from "react";

const API = import.meta.env.VITE_BACKEND_URL || "";

export default function Testimonials() {
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch(`${API}/api/testimonials`).then(r => r.json()).then(setList).catch(() => setList([]));
  }, []);

  return (
    <section id="reviews" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Отзывы пациентов</h2>
        <p className="text-slate-600 mt-2">Реальные истории людей, которым помогла бариатрическая хирургия.</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {(list && list.length ? list : [
            { name: "А.", text: "Похудела на 38 кг за год. Чувствую себя прекрасно!", rating: 5, procedure: "Рукавная гастрэктомия" },
            { name: "И.", text: "Прошла сахарный диабет, давление нормализовалось.", rating: 5, procedure: "Гастрошунтирование" },
            { name: "М.", text: "Очень внимательный доктор, рекомендую.", rating: 5, procedure: "Холецистэктомия" },
          ]).map((t, i) => (
            <div key={i} className="rounded-2xl p-6 ring-1 ring-slate-200 bg-white shadow-sm">
              <div className="flex items-center gap-2 text-yellow-500">
                {Array.from({ length: t.rating || 5 }).map((_, idx) => <Star key={idx} size={18} fill="#f59e0b" className="text-yellow-500" />)}
              </div>
              <p className="text-slate-700 mt-3">{t.text}</p>
              <div className="mt-4 text-sm text-slate-500">{t.name} • {t.procedure}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
