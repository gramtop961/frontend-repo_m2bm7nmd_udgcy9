import { useEffect, useState } from 'react'
import { motion, useAnimation } from 'framer-motion'

function useCounter(to, duration = 1600) {
  const [value, setValue] = useState(0)
  useEffect(() => {
    let start = 0
    const startTime = performance.now()
    const tick = (now) => {
      const elapsed = now - startTime
      const progress = Math.min(1, elapsed / duration)
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(Math.floor(eased * to))
      if (progress < 1) requestAnimationFrame(tick)
    }
    const id = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(id)
  }, [to, duration])
  return value
}

export default function Impact() {
  const downloads = useCounter(20000)
  const decisions = useCounter(120000)

  return (
    <section className="relative py-20 md:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(600px_300px_at_50%_100%,rgba(132,204,22,0.12),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-extrabold text-white text-center"
        >
          Real impact
        </motion.h2>

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl p-8 bg-white/10 backdrop-blur-xl border border-white/20 text-white text-center">
            <div className="text-5xl font-extrabold">{downloads.toLocaleString()}+</div>
            <p className="mt-2 text-white/80">Downloads</p>
          </div>
          <div className="rounded-2xl p-8 bg-white/10 backdrop-blur-xl border border-white/20 text-white text-center">
            <div className="text-5xl font-extrabold">{decisions.toLocaleString()}</div>
            <p className="mt-2 text-white/80">Healthier decisions made</p>
          </div>
        </div>
      </div>
    </section>
  )
}
