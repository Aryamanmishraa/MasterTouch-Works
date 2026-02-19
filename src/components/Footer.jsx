import { Link } from 'react-router-dom'
import { MapPin, PhoneCall, MessageCircle, Paintbrush, Hammer, HandHeart } from 'lucide-react'

const quickLinks = [
  { label: 'Home', to: '/' },
  { label: 'Painting', to: '/painting' },
  { label: 'Mistri', to: '/mistri' },
  { label: 'Labour', to: '/labour' },
]

const phone = 'tel:+919162903405'
const whatsapp = 'https://wa.me/919162903405'
const email = 'mailto:satya.painter@email.com'

function Footer() {
  return (
    <footer className="relative z-10 mt-16 bg-slate-950/70 text-white">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-black/60" />
      <div className="section-padding relative py-12 sm:py-16">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="badge">Satya Painter & Decorators 🖌️</p>
            <h3 className="mt-4 font-display text-2xl font-semibold leading-tight">Home, Office & Commercial Painting Experts.</h3>
            <p className="mt-3 text-sm text-white/70">
              End-to-end finishing and construction support backed by experienced crews, safety-first process, and reliable timelines.
            </p>
            <div className="mt-4 flex items-center gap-3 text-white/80">
              <Paintbrush className="h-4 w-4" /> <Hammer className="h-4 w-4" /> <HandHeart className="h-4 w-4" />
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-white/60">Quick Links</h4>
            <div className="mt-4 grid grid-cols-2 gap-3">
              {quickLinks.map((item) => (
                <Link key={item.to} to={item.to} className="text-white/80 transition hover:text-white">
                  {item.label}
                </Link>
              ))}
            </div>
            <div className="mt-6 text-white/70">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" /> Delhi NCR, India
              </div>
              <div className="mt-2 flex items-center gap-2">
                <PhoneCall className="h-4 w-4" /> +91 91629 03405 (Satya Kumar, Proprietor)
              </div>
              <div className="mt-2 flex items-center gap-2">
                <MessageCircle className="h-4 w-4" /> WhatsApp available
              </div>
              <div className="mt-2 flex items-center gap-2">
                <MessageCircle className="h-4 w-4" /> satya.painter@email.com
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-white/60">Get in touch</h4>
            <a href={phone} className="button-primary w-full justify-center">
              <PhoneCall className="h-4 w-4" /> Call Now
            </a>
            <a href={whatsapp} target="_blank" rel="noreferrer" className="button-secondary w-full justify-center">
              <MessageCircle className="h-4 w-4" /> WhatsApp Message
            </a>
            <a href={email} className="button-secondary w-full justify-center">
              <MessageCircle className="h-4 w-4" /> Email Satya
            </a>
            <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-xs text-white/70">
              <p className="font-semibold text-white">Working Hours</p>
              <p>Mon - Sat: 8 AM - 6 PM</p>
              <p className="mt-1">Emergency support on request.</p>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-xs text-white/60">
          <p>© {new Date().getFullYear()} MasterTouch Works. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
