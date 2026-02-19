import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { X, PhoneCall, MessageCircle, CheckCircle2 } from 'lucide-react'

const services = ['Painting', 'Mistri', 'Labour']

const overlay = { hidden: { opacity: 0 }, visible: { opacity: 1 } }
const dialog = {
  hidden: { opacity: 0, scale: 0.96, y: 20 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.2, ease: 'easeOut' } },
  exit: { opacity: 0, scale: 0.95, y: 10, transition: { duration: 0.15 } },
}

function ScheduleModal({ open, onClose, defaultService = 'Mistri' }) {
  const [mounted, setMounted] = useState(false)
  const [form, setForm] = useState({ name: '', phone: '', datetime: '', address: '', service: defaultService })
  const [toast, setToast] = useState(false)

  useEffect(() => setMounted(true), [])

  useEffect(() => {
    if (open) {
      setForm((prev) => ({ ...prev, service: defaultService }))
    }
  }, [open, defaultService])

  useEffect(() => {
    if (!toast) return
    const id = setTimeout(() => setToast(false), 2400)
    return () => clearTimeout(id)
  }, [toast])

  if (!mounted) return null

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const submit = (e) => {
    e.preventDefault()
    const { name, phone, datetime, address, service } = form
    if (!name || !phone || !datetime || !address) return
    const msg = encodeURIComponent(
      `Schedule Visit Request\nName: ${name}\nPhone: ${phone}\nService: ${service}\nPreferred: ${datetime}\nAddress: ${address}`,
    )
    const wa = `https://wa.me/919162903405?text=${msg}`
    window.open(wa, '_blank', 'noopener')
    setToast(true)
    onClose?.()
  }

  const content = (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center px-4"
          variants={overlay}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <div className="absolute inset-0 bg-black/70" onClick={onClose} />
          <motion.div
            variants={dialog}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="relative w-full max-w-md rounded-2xl border border-white/10 bg-[#0f1116] p-6 shadow-2xl shadow-black/60"
          >
            <button
              className="absolute right-3 top-3 rounded-full border border-white/10 p-2 text-white/70 hover:text-white"
              onClick={onClose}
              aria-label="Close"
            >
              <X className="h-4 w-4" />
            </button>
            <div className="space-y-1">
              <p className="badge bg-white/10">Schedule a Visit</p>
              <h3 className="font-display text-xl font-semibold text-white">Share your preferred slot</h3>
              <p className="text-sm text-white/60">We confirm on WhatsApp and can call if needed.</p>
            </div>
            <form className="mt-4 space-y-3" onSubmit={submit}>
              <div>
                <label className="text-xs uppercase tracking-wide text-white/60">Name</label>
                <input
                  name="name"
                  value={form.name}
                  onChange={onChange}
                  className="mt-1 w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white outline-none focus:border-brand-400"
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label className="text-xs uppercase tracking-wide text-white/60">Phone</label>
                <input
                  name="phone"
                  value={form.phone}
                  onChange={onChange}
                  className="mt-1 w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white outline-none focus:border-brand-400"
                  placeholder="e.g. +91 9xxxxxxxxx"
                  required
                />
              </div>
              <div>
                <label className="text-xs uppercase tracking-wide text-white/60">Preferred date & time</label>
                <input
                  name="datetime"
                  value={form.datetime}
                  onChange={onChange}
                  className="mt-1 w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white outline-none focus:border-brand-400"
                  placeholder="Tomorrow 11 AM or 22 Feb 4 PM"
                  required
                />
              </div>
              <div>
                <label className="text-xs uppercase tracking-wide text-white/60">Address</label>
                <input
                  name="address"
                  value={form.address}
                  onChange={onChange}
                  className="mt-1 w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white outline-none focus:border-brand-400"
                  placeholder="Flat/House, Street, City"
                  required
                />
              </div>
              <div>
                <label className="text-xs uppercase tracking-wide text-white/60">Service</label>
                <select
                  name="service"
                  value={form.service}
                  onChange={onChange}
                  className="mt-1 w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white outline-none focus:border-brand-400 bg-[#0f1116]"
                >
                  {services.map((s) => (
                    <option key={s} value={s} className="bg-[#0f1116] text-white">
                      {s}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex flex-wrap gap-2 pt-2">
                <button type="submit" className="button-primary">
                  <MessageCircle className="h-4 w-4" /> Send via WhatsApp
                </button>
                <a href="tel:+919162903405" className="button-secondary">
                  <PhoneCall className="h-4 w-4" /> Call Instead
                </a>
              </div>
            </form>
          </motion.div>
          <AnimatePresence>
            {toast && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-xl border border-green-400/30 bg-green-500/15 px-4 py-3 text-sm text-white"
              >
                <CheckCircle2 className="h-4 w-4 text-green-300" />
                Sent to WhatsApp. We will confirm shortly.
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  )

  return createPortal(content, document.body)
}

export default ScheduleModal
