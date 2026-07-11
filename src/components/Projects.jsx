import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import { FiExternalLink, FiGithub } from 'react-icons/fi'
import { projects } from '../data/content.js'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import './Projects.css'

function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <div className="project-card__image">
        {project.image ? (
          <img src={project.image} alt={project.title} />
        ) : (
          <div className="project-card__image-placeholder">Screenshot</div>
        )}
      </div>
      <div className="project-card__body">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="project-card__tech">
          {project.tech.map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>
        <div className="project-card__links">
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
            <FiExternalLink /> Live
          </a>
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
            <FiGithub /> Code
          </a>
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <section className="section projects" id="projects">
      <div className="container">
        <span className="section-eyebrow">04 / Projects</span>
        <h2 className="section-title">Things I've built</h2>

        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={24}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            700: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="projects__swiper"
        >
          {projects.map((project) => (
            <SwiperSlide key={project.id}>
              <ProjectCard project={project} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
