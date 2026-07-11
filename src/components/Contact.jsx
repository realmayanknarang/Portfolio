import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { FiGithub, FiLinkedin, FiTwitter, FiMail } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import { profile } from '../data/content.js'
import './Contact.css'

// ── EmailJS setup (all free on emailjs.com) ────────────────────────
// 1. Create an account at https://www.emailjs.com
// 2. Add an Email Service (e.g. Gmail) -> copy the Service ID
// 3. Create an Email Template -> copy the Template ID
// 4. Account > General -> copy your Public Key
// 5. Paste the three values below.
const SERVICE_ID = 'service_l4ygpxa'
const TEMPLATE_ID = 'template_4bf2y4u'
const PUBLIC_KEY = 'adEN_eCJUGwhjwr17'

export default function Contact() {
  const formRef = useRef()
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  const handleSubmit = (e) => {
    e.preventDefault()

    if (SERVICE_ID === 'YOUR_SERVICE_ID') {
      setStatus('error')
      return
    }

    setStatus('sending')
    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then(() => {
        setStatus('sent')
        formRef.current.reset()
      })
      .catch(() => setStatus('error'))
  }

  return (
    <section className="section contact" id="contact">
      <div className="container contact__grid">
        <div>
          <span className="section-eyebrow">06 / Contact</span>
          <h2 className="section-title">Let's talk</h2>
          <p className="contact__intro">
            Have a project in mind, or just want to say hi? My inbox is open.
          </p>

          <div className="contact__links">
            <a href={`mailto:${profile.email}`}><FiMail /> {profile.email}</a>
            {profile.whatsapp && (
              <a
                href={`https://api.whatsapp.com/send?text=${encodeURIComponent('Hi Mayank, I saw your portfolio and wanted to reach out.')}&phone=${profile.whatsapp.replace('+', '')}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp /> WhatsApp
              </a>
            )}
            {profile.social.github && (
              <a href={profile.social.github} target="_blank" rel="noopener noreferrer"><FiGithub /> GitHub</a>
            )}
            {profile.social.linkedin && (
              <a href={profile.social.linkedin} target="_blank" rel="noopener noreferrer"><FiLinkedin /> LinkedIn</a>
            )}
            {profile.social.twitter && (
              <a href={profile.social.twitter} target="_blank" rel="noopener noreferrer"><FiTwitter /> Twitter</a>
            )}
          </div>
        </div>

        <form ref={formRef} onSubmit={handleSubmit} className="contact__form">
          <label>
            Name
            <input type="text" name="user_name" required />
          </label>
          <label>
            Email
            <input type="email" name="user_email" required />
          </label>
          <label>
            Message
            <textarea name="message" rows="5" required />
          </label>

          <button type="submit" className="btn btn-primary" disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending…' : 'Send Message'}
          </button>

          {status === 'sent' && <p className="contact__status contact__status--ok">Message sent — I'll reply soon.</p>}
          {status === 'error' && (
            <p className="contact__status contact__status--err">
              EmailJS isn't configured yet — add your Service/Template/Public keys in Contact.jsx.
            </p>
          )}
        </form>
      </div>
    </section>
  )
}
