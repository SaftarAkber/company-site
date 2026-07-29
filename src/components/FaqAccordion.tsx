"use client";
import { useState } from "react";
import { faqs, type FaqItem } from "@/lib/faqs";

export type { FaqItem };

export default function FaqAccordion({ items = faqs }: { items?: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="flex flex-col divide-y divide-line-light border-t border-b border-line-light">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={item.q}>
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="w-full flex items-center justify-between gap-4 py-5 text-left group"
            >
              <span className="font-display text-base sm:text-lg text-graphite transition-colors duration-300 group-hover:text-accent">
                {item.q}
              </span>
              <span
                className={`shrink-0 w-8 h-8 rounded-full border border-line-light flex items-center justify-center text-accent transition-transform duration-300 ${
                  isOpen ? "rotate-45" : ""
                }`}
              >
                +
              </span>
            </button>
            <div
              className={`grid transition-all duration-300 ease-out ${
                isOpen ? "grid-rows-[1fr] opacity-100 pb-6" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="text-graphite/70 leading-relaxed max-w-2xl">{item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}