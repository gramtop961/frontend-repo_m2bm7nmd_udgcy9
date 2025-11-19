import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

const bubbles = Array.from({ length: 14 }).map((_, i) => ({
  id: i,
  size: 20 + Math.random() * 60,
  left: Math.random() * 100,
  top: Math.random() * 100,
  delay: Math.random() * 2,
  opacity: 0.3 + Math.random() * 0.6,
}))

function LemonMascot() {
  // Playful lemon SVG with soft glow
  return (
    <motion.svg
      initial={{ y: 20, rotate: -4 }}
      animate={{ y: [-4, 6, -4], rotate: [-6, -2, -6] }}
      transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      width="360"
      height="360"
      viewBox="0 0 360 360"
      className="drop-shadow-[0_0_40px_rgba(34,197,94,0.45)]"
    >
      <defs>
        <radialGradient id="lemonGrad" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stopColor="#fef9c3" />
          <stop offset="70%" stopColor="#fde047" />
          <stop offset="100%" stopColor="#f59e0b" />
        </radialGradient>
        <linearGradient id="leafGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#10b981" />
          <stop offset="100%" stopColor="#06b6d4" />
        </linearGradient>
      </defs>
      <g filter="url(#shadow)">
        <ellipse cx="170" cy="180" rx="120" ry="100" fill="url(#lemonGrad)" />
        <circle cx="120" cy="160" r="12" fill="#1f2937" />
        <circle cx="200" cy="160" r="12" fill="#1f2937" />
        <path d="M135 205 C160 225, 180 225, 205 205" stroke="#1f2937" strokeWidth="6" fill="none" strokeLinecap="round" />
        <path d="M245 125 C270 115, 290 120, 305 140 C285 148, 265 145, 245 125 Z" fill="url(#leafGrad)" />
        <circle cx="112" cy="152" r="4" fill="#fff" opacity="0.7" />
        <circle cx="192" cy="152" r="4" fill="#fff" opacity="0.7" />
      </g>
    </motion.svg>
  )
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-teal-400 via-emerald-400 to-lime-300 opacity-40" />
      <div className="absolute inset-0" style={{
        background:
          'radial-gradient(800px 400px at 10% 20%, rgba(16,185,129,0.35), transparent 60%), radial-gradient(700px 400px at 90% 30%, rgba(34,211,238,0.35), transparent 60%), radial-gradient(600px 400px at 50% 90%, rgba(190,242,100,0.35), transparent 60%)',
      }} />

      {bubbles.map((b) => (
        <motion.span
          key={b.id}
          className="absolute rounded-full backdrop-blur-xl"
          style={{
            width: b.size,
            height: b.size,
            left: `${b.left}%`,
            top: `${b.top}%`,
            background: 'rgba(255,255,255,0.15)',
            boxShadow: '0 0 40px rgba(34,197,94,0.35)',
          }}
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 8 + b.delay, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}

      <div className="relative mx-auto max-w-7xl px-6 pt-28 pb-24 md:pt-36 md:pb-36">
        <div className="grid md:grid-cols-2 items-center gap-12">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-extrabold tracking-tight text-white drop-shadow-[0_0_25px_rgba(16,185,129,0.35)]"
            >
              Smarter Choices Start Here
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-4 text-lg md:text-xl text-white/80"
            >
              AI-powered product scanning for transparency and better decisions.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <a
                href="#download"
                className="group relative inline-flex items-center justify-center px-6 py-3 rounded-xl font-semibold text-slate-900 bg-white/90 backdrop-blur-md hover:bg-white transition shadow-[0_10px_30px_rgba(16,185,129,0.35)]"
              >
                <span className="relative z-10">Download App</span>
                <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-emerald-400 to-lime-300 opacity-0 group-hover:opacity-100 transition" />
              </a>
              <a
                href="#features"
                className="inline-flex items-center px-6 py-3 rounded-xl font-semibold border border-white/40 text-white/90 hover:text-white hover:bg-white/10 backdrop-blur-md transition"
              >
                Explore Features
              </a>
            </motion.div>
          </div>

          <div className="relative flex justify-center">
            <div className="absolute -inset-10 md:-inset-16 blur-3xl opacity-60 bg-gradient-to-tr from-emerald-300 via-teal-300 to-lime-200 rounded-full" />
            <div className="relative z-10 w-[320px] h-[320px] md:w-[420px] md:h-[420px] rounded-[36px] bg-white/10 backdrop-blur-xl border border-white/30 shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_20px_60px_rgba(20,184,166,0.35)] flex items-center justify-center">
              <LemonMascot />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
