import './Navbar.css'
import { useState } from 'react'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <nav className="site-navbar" aria-label="Main navigation">
      <div className="site-navbar-inner">
        <a className="navbar-brand" href="#summary" onClick={closeMenu}>
          <img src="https://ik.imagekit.io/73q3w7grn/B.png" alt="" />
          <span>M.Shaheer</span>
        </a>
        <button
          className={`navbar-toggler${menuOpen ? ' is-open' : ''}`}
          type="button"
          aria-controls="navbarNav"
          aria-expanded={menuOpen}
          aria-label="Toggle navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
        <div className={`navbar-menu${menuOpen ? ' is-open' : ''}`} id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#summary" onClick={closeMenu}>
                About Me
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#experience" onClick={closeMenu}>
                Experience
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#education-certifications" onClick={closeMenu}>
                Certifications & Skills
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#devops-projects" onClick={closeMenu}>
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact" onClick={closeMenu}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
