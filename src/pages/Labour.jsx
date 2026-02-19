import { useState } from 'react'
import { motion } from 'framer-motion'
import { HandHeart, Truck, Boxes, MessageCircle, PhoneCall, Construction } from 'lucide-react'
import ScheduleModal from '../components/ScheduleModal'

const services = [
  {
    title: 'Loading / Unloading',
    detail: 'Trained handlers for safe lifting of appliances, furniture, and fragile items.',
    badge: 'Per day / shift',
  },
  {
    title: 'Construction Helper',
    detail: 'Skilled labour for material mixing, site prep, and assisting mistris on schedule.',
    badge: 'Weekly & monthly',
  },
  {
    title: 'House Shifting Help',
    detail: 'Extra hands for organized packing, labeling, and room-wise placement.',
    badge: 'Same-day support',
  },
]

const rates = [
  { label: 'Daily rate', value: '₹800 / day' },
  { label: 'Half-day rate', value: 'from ₹400 / shift*' },
  { label: 'Overtime', value: 'As agreed per hour' },
]

const cta = {
  phone: 'tel:+919162903405',
  whatsapp: 'https://wa.me/919162903405',
}

const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: 0.08 * i, duration: 0.45 } }),
}

function Labour() {
  const [open, setOpen] = useState(false)
  return (
    <div className="relative overflow-hidden pb-16">
      <div className="absolute inset-0 bg-hero-gradient" />
      <div className="section-padding relative pt-20">
        <div className="surface-strong p-8">
          <div className="grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="space-y-4">
              <p className="badge bg-white/10">Labour Services</p>
              <h1 className="font-display text-3xl font-semibold text-white leading-tight">Trusted hands on demand.</h1>
              <p className="max-w-2xl text-white/75">Punctual labour teams for loading, unloading, construction support, and shifting — supervised for quality and safety.</p>
            </div>
            <div className="relative">
              <div className="absolute -left-6 -top-6 h-20 w-20 rounded-full bg-brand-500/20 blur-3xl" />
              <div className="absolute -right-6 -bottom-6 h-16 w-16 rounded-full bg-accent-500/20 blur-3xl" />
              <div className="overflow-hidden rounded-3xl border border-white/10 shadow-2xl shadow-black/40">
                <img
                  src="/LABOUR.png"
                  alt="Labour services poster"
                  className="w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.45 }}
              custom={index}
              whileHover={{ y: -8, scale: 1.01 }}
              className="surface p-6"
            >
              <div className="flex items-center justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-brand-100">
                  {index === 0 && <Boxes className="h-5 w-5" />}
                  {index === 1 && <HandHeart className="h-5 w-5" />}
                  {index === 2 && <Truck className="h-5 w-5" />}
                </div>
                <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/70">{service.badge}</span>
              </div>
              <h3 className="mt-3 font-display text-xl font-semibold text-white">{service.title}</h3>
              <p className="mt-2 text-sm text-white/70">{service.detail}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <div className="surface p-7">
            <p className="badge bg-white/10">Rates</p>
            <div className="mt-4 space-y-3">
              {rates.map((rate, index) => (
                <motion.div
                  key={rate.label}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.45 }}
                  custom={index}
                  className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3"
                >
                  <p className="text-white font-semibold">{rate.label}</p>
                  <span className="text-brand-100 font-semibold">{rate.value}</span>
                </motion.div>
              ))}
            </div>
            <p className="mt-2 text-xs text-white/60">*Rates depend on scope, shift timings, and travel.</p>
          </div>

          <div className="surface-strong p-7">
            <p className="badge bg-white/10">Quick Contact</p>
            <h3 className="mt-3 font-display text-2xl font-semibold text-white">Book labour in minutes.</h3>
            <p className="text-white/70">Share location, timing, and scope. We align the right team size and supervisor.</p>
            <div className="mt-4 flex flex-wrap gap-3">
              <button type="button" onClick={() => setOpen(true)} className="button-primary">
                <Construction className="h-4 w-4" /> Schedule Visit
              </button>
              <a href={cta.phone} className="button-secondary">
                <PhoneCall className="h-4 w-4" /> Call Now
              </a>
              <a href={cta.whatsapp} className="button-secondary" target="_blank" rel="noreferrer">
                <MessageCircle className="h-4 w-4" /> WhatsApp Direct
              </a>
            </div>
            <div className="mt-4 flex flex-col gap-2 text-sm text-white/70">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-brand-400" /> Availability: 7 AM – 8 PM
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-brand-400" /> Uniformed, ID-verified teams
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-brand-400" /> Tools and PPE arranged on request
              </div>
            </div>
          </div>
        </div>
      </div>
      <ScheduleModal open={open} onClose={() => setOpen(false)} defaultService="Labour" />
    </div>
  )
}

export default Labour
