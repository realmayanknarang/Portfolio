import { useEffect, useState } from 'react'
import { FiArrowDown } from 'react-icons/fi'
import { profile } from '../data/content.js'
import './Hero.css'

export default function Hero() {
  const [typed, setTyped] = useState('')
  const full = profile.name

  useEffect(() => {
    let i = 0
    const interval = setInterval(() => {
      i += 1
      setTyped(full.slice(0, i))
      if (i >= full.length) clearInterval(interval)
    }, 70)
    return () => clearInterval(interval)
  }, [full])

  return (
    <section className="hero" id="home">
      <div className="hero__glow" aria-hidden="true" />
      <div className="container hero__inner">
        <p className="hero__terminal">
          <span className="hero__prompt">Software Engineer</span>
        </p>
        <h1 className="hero__name">
          {typed}
          <span className="hero__cursor" aria-hidden="true">|</span>
        </h1>
        <p className="hero__role">{profile.role}</p>
        <p className="hero__tagline">{profile.tagline}</p>

        <div className="hero__cta">
          <a href="#projects" className="btn btn-primary">View Projects</a>
          <a href="#contact" className="btn btn-outline">Get in Touch</a>
        </div>
      </div>

      <a href="#about" className="hero__scroll" aria-label="Scroll to About section">
        <FiArrowDown />
      </a>
    </section>
  )
}
