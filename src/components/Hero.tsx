"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink text-paper">
      {/* Animasiyalı gradient "blob"lar */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-accent-2/30 rounded-full blur-3xl animate-blob" />
        <div className="absolute top-1/3 -right-24 w-96 h-96 bg-accent-3/30 rounded-full blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute -bottom-24 left-1/3 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-blob animation-delay-4000" />
      </div>

      {/* İstəsən öz videonu bura qoya bilərsən:
          1) videonu public/videos/hero.mp4 yerinə qoy
          2) aşağıdakı şərhi (comment) sil */}
      {/*
      <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover opacity-30">
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>
      */}

      <div className="relative max-w-6xl mx-auto px-6 py-28 md:py-36">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-mono text-xs tracking-widest text-accent uppercase mb-6"
        >
          Rəqəmsal Studiya
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display text-4xl sm:text-5xl lg:text-7xl leading-[1.05] max-w-3xl mb-6"
        >
          Fikirləri{" "}
          <span className="bg-gradient-to-r from-accent via-accent-3 to-accent-2 bg-clip-text text-transparent">
            məhsula
          </span>{" "}
          çeviririk.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-paper/70 text-base sm:text-lg max-w-xl mb-10"
        >
          Konsepdən istehsala qədər rəqəmsal məhsullar quraşdırırıq. Aşağıda öz
          işlərimizdən bir neçəsini tapa bilərsiniz.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-wrap gap-4"
        >
          <Link
            href="/projects"
            className="bg-accent text-paper px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 hover:bg-accent-2 hover:scale-105"
          >
            Layihələrə bax
          </Link>
          <Link
            href="/about"
            className="border border-paper/30 text-paper px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 hover:bg-paper/10 hover:border-accent hover:text-accent hover:scale-105"
          >
            Haqqımızda
          </Link>
        </motion.div>
      </div>

      <motion.div
        className="hidden lg:block absolute top-24 right-16 animate-float"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        <div className="bg-paper/10 backdrop-blur border border-paper/20 rounded-2xl px-5 py-3 text-xs font-mono text-paper/80">
          ✦ 2024-dən bəri
        </div>
      </motion.div>
    </section>
  );
}
