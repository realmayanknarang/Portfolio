import { skills } from '../data/content.js'
import './Skills.css'

export default function Skills() {
  return (
    <section className="section skills" id="skills">
      <div className="container">
        <span className="section-eyebrow">02 / Skills</span>
        <h2 className="section-title">Tools I work with</h2>

        <div className="skills__grid">
          {skills.map((group) => (
            <div key={group.category} className="skills__group">
              <h3 className="skills__category">{group.category}</h3>
              <div className="skills__pills">
                {group.items.map((item) => (
                  <span key={item} className="skills__pill">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
