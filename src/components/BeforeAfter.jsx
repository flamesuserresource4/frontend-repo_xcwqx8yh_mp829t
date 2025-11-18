import { useEffect, useState } from "react";

const API = import.meta.env.VITE_BACKEND_URL || "";

export default function BeforeAfter() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`${API}/api/before-after`).then(r => r.json()).then(setItems).catch(() => setItems([]));
  }, []);

  const data = items && items.length ? items : [
    { image_before_url: "https://images.unsplash.com/photo-1579751626657-72bc17010498?q=80&w=1200&auto=format&fit=crop", image_after_url: "https://images.unsplash.com/photo-1576765608839-5cbf399c0b0a?q=80&w=1200&auto=format&fit=crop", description: "-42 кг за 12 месяцев" },
    { image_before_url: "https://images.unsplash.com/photo-1535914254981-b5012eebbd15?q=80&w=1200&auto=format&fit=crop", image_after_url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1200&auto=format&fit=crop", description: "-35 кг, ремиссия СД2" },
  ];

  return (
    <section id="results" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Результаты «до/после»</h2>
        <p className="text-slate-600 mt-2">Некоторые иллюстративные примеры послеоперационных изменений.</p>

        <div className="grid md:grid-cols-2 gap-6 mt-10">
          {data.map((i, idx) => (
            <div key={idx} className="rounded-2xl overflow-hidden ring-1 ring-slate-200 bg-white">
              <div className="grid grid-cols-2">
                <div className="aspect-[4/3] bg-slate-100" style={{backgroundImage:`url(${i.image_before_url})`, backgroundSize:'cover', backgroundPosition:'center'}} />
                <div className="aspect-[4/3] bg-slate-100" style={{backgroundImage:`url(${i.image_after_url})`, backgroundSize:'cover', backgroundPosition:'center'}} />
              </div>
              <div className="p-4 text-slate-700">{i.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
