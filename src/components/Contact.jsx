import { useState } from "react";
import { MapPin, Phone, Mail } from "lucide-react";

const API = import.meta.env.VITE_BACKEND_URL || "";

export default function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });
  const [status, setStatus] = useState(null);

  const submit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch(`${API}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });
      const data = await res.json();
      if (res.ok && data.ok) setStatus("success"); else setStatus("error");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Контакты</h2>
          <p className="text-slate-600 mt-2">Запишитесь на консультацию или задайте вопрос.</p>

          <div className="mt-6 space-y-3 text-slate-700">
            <div className="flex items-center gap-3"><MapPin /> Адрес клиники: Москва, ул. Примерная, 10</div>
            <div className="flex items-center gap-3"><Phone /> Телефон регистратуры: +7 (999) 000-00-00</div>
            <div className="flex items-center gap-3"><Mail /> Email: clinic@example.com</div>
          </div>

          <div className="mt-6 rounded-2xl overflow-hidden ring-1 ring-slate-200 bg-white">
            <iframe title="map" src="https://www.openstreetmap.org/export/embed.html?bbox=37.60%2C55.70%2C37.75%2C55.80&layer=mapnik" className="w-full h-[300px]" />
          </div>
        </div>
        <div>
          <div className="rounded-2xl bg-white p-6 ring-1 ring-slate-200 shadow-sm">
            <form onSubmit={submit} className="space-y-4">
              <div>
                <label className="text-sm text-slate-600">Имя</label>
                <input required value={form.name} onChange={e=>setForm({...form, name:e.target.value})} className="w-full mt-1 px-3 py-2 rounded-xl ring-1 ring-slate-300 focus:ring-sky-400 outline-none" />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-slate-600">Телефон</label>
                  <input value={form.phone} onChange={e=>setForm({...form, phone:e.target.value})} className="w-full mt-1 px-3 py-2 rounded-xl ring-1 ring-slate-300 focus:ring-sky-400 outline-none" />
                </div>
                <div>
                  <label className="text-sm text-slate-600">Email</label>
                  <input type="email" value={form.email} onChange={e=>setForm({...form, email:e.target.value})} className="w-full mt-1 px-3 py-2 rounded-xl ring-1 ring-slate-300 focus:ring-sky-400 outline-none" />
                </div>
              </div>
              <div>
                <label className="text-sm text-slate-600">Сообщение</label>
                <textarea required rows="4" value={form.message} onChange={e=>setForm({...form, message:e.target.value})} className="w-full mt-1 px-3 py-2 rounded-xl ring-1 ring-slate-300 focus:ring-sky-400 outline-none" />
              </div>
              <button className="w-full px-4 py-3 rounded-xl bg-sky-500 hover:bg-sky-400 text-white font-medium">Отправить</button>
              {status === "success" && <div className="text-emerald-700 bg-emerald-50 ring-1 ring-emerald-200 rounded-xl p-3">Спасибо! Мы свяжемся с вами.</div>}
              {status === "error" && <div className="text-red-700 bg-red-50 ring-1 ring-red-200 rounded-xl p-3">Не удалось отправить. Попробуйте позже.</div>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
