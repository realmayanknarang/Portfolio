import { experience } from '../data/content.js'
import './Experience.css'

export default function Experience() {
  return (
    <section className="section experience" id="experience">
      <div className="container">
        <span className="section-eyebrow">05 / Experience</span>
        <h2 className="section-title">Where I've been</h2>

        <div className="timeline">
          {experience.map((item) => (
            <div key={item.id} className="timeline__item">
              <div className="timeline__marker" />
              <div className="timeline__content">
                <span className="timeline__date">{item.date}</span>
                <h3>{item.title}</h3>
                <p className="timeline__org">{item.org}</p>
                <p className="timeline__desc">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
