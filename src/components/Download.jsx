import { motion } from 'framer-motion'
import { Apple, Play } from 'lucide-react'

export default function Download() {
  return (
    <section id="download" className="relative py-20 md:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(600px_300px_at_100%_50%,rgba(132,204,22,0.12),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-extrabold text-white"
            >
              Get the app
            </motion.h2>
            <p className="mt-3 text-white/80">Start scanning smarter today and shop with confidence.</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-slate-900 bg-white/90 backdrop-blur-md hover:bg-white transition shadow-[0_10px_30px_rgba(132,204,22,0.25)]">
                <Play className="w-5 h-5" /> Play Store
              </a>
              <a href="#" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white border border-white/40 hover:text-white hover:bg-white/10 backdrop-blur-md transition">
                <Apple className="w-5 h-5" /> App Store
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-10 blur-3xl bg-gradient-to-tr from-emerald-300 via-teal-300 to-lime-200 rounded-[40px] opacity-60" />
            <div className="relative grid grid-cols-2 gap-4">
              <div className="h-72 rounded-[28px] bg-white/10 backdrop-blur-xl border border-white/30" />
              <div className="h-96 rounded-[28px] bg-white/10 backdrop-blur-xl border border-white/30" />
              <div className="col-span-2 h-64 rounded-[28px] bg-white/10 backdrop-blur-xl border border-white/30" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
