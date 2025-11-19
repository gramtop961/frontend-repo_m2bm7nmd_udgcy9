import { motion } from 'framer-motion'

const steps = [
  { title: 'Scan', desc: 'Snap a photo or barcode of any product.' },
  { title: 'Analyze', desc: 'AI decodes the label and ingredients.' },
  { title: 'Score', desc: 'See health impact and risk levels instantly.' },
  { title: 'Choose', desc: 'Get alternatives tailored to your goals.' },
]

export default function HowItWorks() {
  return (
    <section className="relative py-20 md:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(600px_300px_at_100%_0%,rgba(20,184,166,0.12),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-extrabold text-white text-center"
        >
          How it works
        </motion.h2>

        <div className="mt-12 grid md:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="relative rounded-2xl p-6 bg-white/10 backdrop-blur-xl border border-white/20 text-white text-center"
            >
              <div className="absolute left-1/2 -translate-x-1/2 -top-4 w-24 h-24 rounded-full bg-gradient-to-tr from-emerald-400 to-lime-300 blur-2xl opacity-30" />
              <div className="relative">
                <div className="mx-auto w-12 h-12 rounded-full bg-white/10 border border-white/30 flex items-center justify-center font-bold text-emerald-300">{i + 1}</div>
                <h3 className="mt-4 text-xl font-bold">{s.title}</h3>
                <p className="mt-1 text-white/80 text-sm">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
