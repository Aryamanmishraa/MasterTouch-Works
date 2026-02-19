import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, PhoneCall, X, MessageCircle, ArrowUpRight } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Painting', to: '/painting' },
  { label: 'Mistri', to: '/mistri' },
  { label: 'Labour', to: '/labour' },
]

const cta = {
  phone: 'tel:+919162903405',
  whatsapp: 'https://wa.me/919162903405',
}

const navLinkClasses = ({ isActive }) =>
  `text-sm font-semibold transition-colors duration-200 ${
    isActive ? 'text-white' : 'text-white/70 hover:text-white'
  }`

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!isOpen) return
    const handler = (event) => {
      if (event.key === 'Escape') setIsOpen(false)
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [isOpen])

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-slate-950/80 shadow-2xl shadow-black/40 backdrop-blur-xl' : 'bg-transparent'
      }`}
    >
      <div className="section-padding">
        <div className="flex items-center justify-between py-4">
          <Link className="flex items-center gap-3" to="/">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-xl font-black text-white shadow-glow">
              SP
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-[0.2em] text-white/60">Home · Office · Commercial</p>
              <p className="font-display text-lg font-semibold text-white leading-tight">Satya Painter & Decorators 🖌️</p>
            </div>
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {navItems.map((item) => (
              <NavLink key={item.to} to={item.to} className={navLinkClasses}>
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a href={cta.whatsapp} className="button-secondary" target="_blank" rel="noreferrer">
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
            <a href={cta.phone} className="button-primary">
              <PhoneCall className="h-4 w-4" /> Call Now
            </a>
          </div>

          <button
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 text-white/90 lg:hidden"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label="Toggle navigation"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden"
          >
            <div className="section-padding pb-6">
              <div className="glass rounded-2xl p-4 shadow-2xl shadow-black/40">
                <div className="flex flex-col gap-2">
                  {navItems.map((item) => (
                    <NavLink
                      key={item.to}
                      to={item.to}
                      className={({ isActive }) =>
                        `flex items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold ${
                          isActive ? 'bg-white/10 text-white' : 'text-white/80 hover:bg-white/5 hover:text-white'
                        }`
                      }
                      onClick={() => setIsOpen(false)}
                    >
                      <span>{item.label}</span>
                      <ArrowUpRight className="h-4 w-4" />
                    </NavLink>
                  ))}
                </div>
                <div className="mt-4 flex flex-col gap-2">
                  <a
                    href={cta.phone}
                    className="button-primary w-full justify-center"
                    onClick={() => setIsOpen(false)}
                  >
                    <PhoneCall className="h-4 w-4" /> Call Now
                  </a>
                  <a
                    href={cta.whatsapp}
                    className="button-secondary w-full justify-center"
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => setIsOpen(false)}
                  >
                    <MessageCircle className="h-4 w-4" /> WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Navbar
