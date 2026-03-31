import { personalInfo } from '../data'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <span className="footer-brand">Moaaz Salama</span>
          <span className="footer-copy">
            © {new Date().getFullYear()} · Built with React & Framer Motion
          </span>
          <div className="footer-links">
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href={personalInfo.youtube} target="_blank" rel="noopener noreferrer">YouTube</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
