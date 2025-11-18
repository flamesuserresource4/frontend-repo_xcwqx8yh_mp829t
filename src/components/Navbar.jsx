import { Menu } from "lucide-react";
import { useState } from "react";

const links = [
  { href: "#home", label: "Главная" },
  { href: "#services", label: "Операции" },
  { href: "#reviews", label: "Отзывы" },
  { href: "#results", label: "До/после" },
  { href: "#bmi", label: "Кальк. ИМТ" },
  { href: "#contact", label: "Контакты" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mt-4 flex items-center justify-between rounded-2xl bg-white/10 backdrop-blur supports-backdrop-blur:bg-white/10 ring-1 ring-white/15 py-3 px-4">
          <a href="#home" className="text-white font-semibold tracking-tight">Доктор • Хирург</a>
          <nav className="hidden md:flex items-center gap-6">
            {links.map(l => (
              <a key={l.href} href={l.href} className="text-slate-200 hover:text-white transition text-sm">{l.label}</a>
            ))}
          </nav>
          <button onClick={()=>setOpen(!open)} className="md:hidden text-white"><Menu /></button>
        </div>
      </div>
      {open && (
        <div className="md:hidden mt-2 mx-6 rounded-2xl bg-slate-900/90 ring-1 ring-white/10 p-4 space-y-2">
          {links.map(l => (
            <a key={l.href} href={l.href} className="block text-slate-200" onClick={()=>setOpen(false)}>{l.label}</a>
          ))}
        </div>
      )}
    </header>
  );
}
