import { motion } from 'framer-motion'

const testimonials = [
  {
    quote:
      'I never realized how many hidden additives I was buying. This literally changed what ends up in my cart.',
    name: 'Riley',
    role: 'Nutrition Enthusiast',
  },
  {
    quote:
      'Fast, slick, and surprisingly fun to use. The health score breakdown is insanely helpful.',
    name: 'Casey',
    role: 'Busy Parent',
  },
  {
    quote:
      'As a label nerd, this app feels like a superpower. The alternatives feature is clutch.',
    name: 'Jordan',
    role: 'Food Researcher',
  },
]

export default function Testimonials() {
  return (
    <section className="relative py-20 md:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(600px_300px_at_0%_100%,rgba(20,184,166,0.12),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-extrabold text-white text-center"
        >
          Loved by our community
        </motion.h2>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="rounded-2xl p-6 bg-white/10 backdrop-blur-xl border border-white/20 text-white"
            >
              <p className="text-white/90">“{t.quote}”</p>
              <div className="mt-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-emerald-400 to-lime-300" />
                <div>
                  <div className="font-bold">{t.name}</div>
                  <div className="text-white/70 text-sm">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
