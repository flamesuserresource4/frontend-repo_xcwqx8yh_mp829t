import { motion, useAnimationFrame } from "framer-motion";
import { useRef, useState } from "react";

export default function SleeveAnimation() {
  const tubeRef = useRef(null);
  const [progress, setProgress] = useState(0.4);

  // gentle breathing animation for the stomach
  useAnimationFrame((t) => {
    const scale = 1 + Math.sin(t / 1000) * 0.02;
    if (tubeRef.current) {
      tubeRef.current.style.transform = `scale(${scale})`;
    }
  });

  return (
    <section id="education" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-rose-900">Как проходит продольная резекция желудка</h2>
            <p className="text-slate-600 mt-3">Наглядная схема, показывающая, какая часть желудка удаляется при операции.
              Это упрощённая иллюстрация для пациентов.</p>
            <div className="mt-6 p-4 rounded-2xl bg-rose-50 ring-1 ring-rose-200 text-rose-900">
              Сдвиг ползунка показывает этап удаления. Это не медицинская инструкция, а визуализация процесса.
            </div>
            <div className="mt-6">
              <label className="text-sm text-slate-600">Этап операции</label>
              <input type="range" min="0" max="100" value={progress*100}
                     onChange={(e)=>setProgress(Number(e.target.value)/100)}
                     className="w-full" />
            </div>
          </div>
          <div>
            <div className="relative aspect-[4/3] bg-slate-100 rounded-3xl overflow-hidden ring-1 ring-slate-200">
              <svg viewBox="0 0 800 600" className="absolute inset-0 w-full h-full">
                <defs>
                  <linearGradient id="stomachGrad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#fecaca"/>
                    <stop offset="100%" stopColor="#fca5a5"/>
                  </linearGradient>
                  <linearGradient id="removedGrad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#f43f5e"/>
                    <stop offset="100%" stopColor="#b91c1c"/>
                  </linearGradient>
                  <filter id="softShadow" x="-20%" y="-20%" width="140%" height="140%">
                    <feDropShadow dx="0" dy="6" stdDeviation="8" floodColor="#000" floodOpacity="0.25"/>
                  </filter>
                </defs>

                {/* Original stomach shape (bean-like) */}
                <g transform="translate(150,60)">
                  <path ref={tubeRef}
                        d="M150,120 C180,80 240,60 300,90 C340,110 360,160 350,210 C340,260 300,300 260,330 C220,360 170,370 140,340 C120,320 120,300 120,260 C120,220 120,180 100,150 C80,120 80,90 100,70 C120,50 140,60 150,120 Z"
                        fill="url(#stomachGrad)" filter="url(#softShadow)"/>

                  {/* Clip to simulate removed part */}
                  <clipPath id="cutClip">
                    <rect x="0" y="0" width={300*progress} height="400" />
                  </clipPath>

                  {/* Removed part overlay */}
                  <g clipPath="url(#cutClip)">
                    <path
                      d="M150,120 C180,80 240,60 300,90 C340,110 360,160 350,210 C340,260 300,300 260,330 C220,360 170,370 140,340 C120,320 120,300 120,260 C120,220 120,180 100,150 C80,120 80,90 100,70 C120,50 140,60 150,120 Z"
                      fill="url(#removedGrad)" opacity="0.6"
                    />
                  </g>

                  {/* Staple line */}
                  <motion.path
                    d="M200,110 C240,120 260,170 250,220 C240,270 210,310 180,330"
                    stroke="#7f1d1d"
                    strokeWidth="6"
                    strokeDasharray="6 10"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: "easeInOut" }}
                    fill="none"
                  />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
