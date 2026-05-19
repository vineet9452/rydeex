"use client";

import { useEffect, useRef, useState } from "react";

interface StatItem {
  value: number;
  suffix: string;
  prefix?: string;
  label: string;
  decimals?: number;
}

function Counter({ value, suffix, prefix = "", decimals = 0 }: StatItem) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true); },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    const STEPS = 60;
    const DURATION = 1800;
    const increment = value / STEPS;
    let current = 0;
    const id = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(id);
      } else {
        setCount(parseFloat(current.toFixed(decimals)));
      }
    }, DURATION / STEPS);
    return () => clearInterval(id);
  }, [started, value, decimals]);

  const display =
    decimals && decimals > 0 ? count.toFixed(decimals) : Math.floor(count).toString();

  return (
    <span ref={ref}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}

interface Props {
  stats: StatItem[];
  accentColor: string;
}

export default function StatsStrip({ stats, accentColor }: Props) {
  return (
    <section className="bg-[#0d0d12] border-b border-white/5 py-14 relative overflow-hidden">
      {/* Ambient glow */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[200px] rounded-full blur-3xl opacity-[0.07] pointer-events-none"
        style={{ background: accentColor }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x md:divide-white/8">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              data-aos="fade-up"
              data-aos-delay={idx * 80}
              className="flex flex-col items-center text-center px-4 py-2"
            >
              <span
                className="font-montserrat font-black text-4xl md:text-5xl leading-none mb-2"
                style={{ color: accentColor }}
              >
                <Counter {...stat} />
              </span>
              <span className="text-gray-500 text-xs uppercase tracking-[0.18em] font-semibold">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
