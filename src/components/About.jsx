import { about, profile } from '../data/content.js'
import './About.css'

export default function About() {
  return (
    <section className="section about" id="about">
      <div className="container about__grid">
        <div>
          <span className="section-eyebrow">01 / About</span>
          <h2 className="section-title">A bit about me</h2>
          <p className="about__bio">{about.bio}</p>
          <p className="about__location">📍 {profile.location}</p>

          {about.highlights?.length > 0 && (
            <ul className="about__highlights">
              {about.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          )}
        </div>

        <div className="about__photo">
          {about.photoUrl ? (
            <img src={about.photoUrl} alt={profile.name} />
          ) : (
            <div className="about__photo-placeholder">
              <span>Photo</span>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
