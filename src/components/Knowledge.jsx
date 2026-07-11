import { knowledge } from '../data/content.js'
import './Knowledge.css'

export default function Knowledge() {
  return (
    <section className="section knowledge" id="knowledge">
      <div className="container">
        <span className="section-eyebrow">03 / Expertise</span>
        <h2 className="section-title">What I bring to the table</h2>

        <div className="knowledge__grid">
          {knowledge.map((group) => (
            <div key={group.category} className="knowledge__card">
              <h3 className="knowledge__category">{group.category}</h3>
              <ul className="knowledge__list">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
