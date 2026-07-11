import { useEffect, useState } from 'react'
import { profile } from '../data/content.js'
import './Navbar.css'

const links = [
  { label: 'About', href: '#about', num: '01' },
  { label: 'Skills', href: '#skills', num: '02' },
  { label: 'Expertise', href: '#knowledge', num: '03' },
  { label: 'Projects', href: '#projects', num: '04' },
  { label: 'Experience', href: '#experience', num: '05' },
  { label: 'Contact', href: '#contact', num: '06' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">
        <a href="#" className="navbar__logo">
          {profile.name.split(' ').map((w) => w[0]).join('')}
        </a>

        <nav className="navbar__links navbar__links--desktop">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="navbar__link">
              <span className="navbar__num">{l.num}</span>
              {l.label}
            </a>
          ))}
        </nav>

        <a href={profile.resumeUrl} className="btn btn-outline navbar__resume" download>
          Resume
        </a>

        <button
          className="navbar__toggle"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
        </button>
      </div>

      {open && (
        <nav className="navbar__links navbar__links--mobile">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}
