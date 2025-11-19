import { motion } from 'framer-motion'
import { ScanLine, ShieldCheck, Activity, Wand2 } from 'lucide-react'

const features = [
  {
    title: 'Scan Products Instantly',
    icon: ScanLine,
    desc: 'Point, scan, and get instant clarity powered by on-device AI.',
  },
  {
    title: 'Detect Harmful Ingredients',
    icon: ShieldCheck,
    desc: 'Flags additives, allergens, and risky chemicals in a snap.',
  },
  {
    title: 'Health Score Breakdown',
    icon: Activity,
    desc: 'A transparent score with easy-to-read reasoning and impact.',
  },
  {
    title: 'Smarter Alternatives',
    icon: Wand2,
    desc: 'Find better options matched to your preferences and budget.',
  },
]

export default function Features() {
  return (
    <section id="features" className="relative py-20 md:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(600px_300px_at_10%_0%,rgba(34,197,94,0.15),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-extrabold text-white text-center"
        >
          Features that feel like magic
        </motion.h2>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ title, icon: Icon, desc }, idx) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.05 }}
              className="group relative rounded-2xl p-5 min-h-[180px] bg-white/10 backdrop-blur-xl border border-white/20 shadow-[inset_0_1px_0_rgba(255,255,255,0.25),0_20px_80px_rgba(16,185,129,0.15)] overflow-hidden"
            >
              <div className="absolute -top-24 -right-24 w-56 h-56 rounded-full bg-emerald-400/20 blur-3xl" />
              <div className="flex items-start gap-4">
                <div className="relative">
                  <div className="absolute -inset-2 rounded-xl bg-gradient-to-tr from-emerald-400 to-lime-300 blur-xl opacity-40 group-hover:opacity-70 transition" />
                  <div className="relative rounded-xl p-3 bg-white/10 border border-white/30 backdrop-blur-md">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg">{title}</h3>
                  <p className="text-white/80 text-sm mt-1">{desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
