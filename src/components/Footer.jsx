import { motion } from 'framer-motion'
import { Twitter, Instagram, Github } from 'lucide-react'

export default function Footer() {
  const socials = [
    { icon: Twitter, href: '#' },
    { icon: Instagram, href: '#' },
    { icon: Github, href: '#' },
  ]
  return (
    <footer className="relative py-10">
      <div className="absolute inset-0 bg-[radial-gradient(600px_300px_at_50%_50%,rgba(20,184,166,0.12),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6 flex items-center justify-between text-white/80">
        <div className="font-bold text-white">LemIQ</div>
        <div className="flex items-center gap-3">
          {socials.map(({ icon: Icon, href }, i) => (
            <a
              key={i}
              href={href}
              className="group p-2 rounded-xl border border-white/20 bg-white/5 backdrop-blur-md hover:bg-white/10 transition"
            >
              <Icon className="w-5 h-5 text-white drop-shadow-[0_0_8px_rgba(16,185,129,0.6)] group-hover:drop-shadow-[0_0_12px_rgba(34,197,94,0.9)]" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
