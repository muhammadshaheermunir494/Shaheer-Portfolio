import './Hero.css'
import { useState, useEffect } from 'react'

function Hero() {
  const [displayedText, setDisplayedText] = useState('')
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  
  const titles = [
    'Muhammad Shaheer',
    'Devops Enginner',
    'Aws Solution Architect'
  ]

  useEffect(() => {
    const currentTitle = titles[currentTitleIndex]
    const typingSpeed = isDeleting ? 50 : 100

    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing phase
        if (displayedText.length < currentTitle.length) {
          setDisplayedText(currentTitle.substring(0, displayedText.length + 1))
        } else {
          // Finished typing, start deleting after a pause
          setTimeout(() => setIsDeleting(true), 2000)
        }
      } else {
        // Deleting phase
        if (displayedText.length > 0) {
          setDisplayedText(displayedText.substring(0, displayedText.length - 1))
        } else {
          // Finished deleting, move to next title
          setIsDeleting(false)
          setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % titles.length)
        }
      }
    }, typingSpeed)

    return () => clearTimeout(timer)
  }, [displayedText, currentTitleIndex, isDeleting, titles])

  return (
    <section className="hero-section" id="summary">
      
      <div className="hero-wrapper">
        {/* Left Side - Summary */}
        <div className="hero-content">
          <div className="content-wrapper">
            <h1 className="hero-title">
              Hi, I'm <span className="highlight typing-text">{displayedText}<span className="cursor"></span></span>
            </h1>
            <p className="hero-subtitle">About Me</p>
            
            <p className="hero-description">I specialize in DevOps with practical experience in automating infrastructure and deploying scalable applications using Docker and Kubernetes. I have implemented CI/CD pipelines and GitOps workflows using tools like ArgoCD, along with configuration management through Ansible. For monitoring and performance tracking, I use Prometheus and Grafana to ensure system reliability and visibility. My focus is on building automated, resilient, and production-ready environments on AWS while reducing manual intervention and improving deployment efficiency.</p>

            <div className="hero-stats">
              <div className="stat">
                <h3>1+</h3>
                <p>Year Experience</p>
              </div>
              <div className="stat">
                <h3>10+</h3>
                <p>Projects Completed</p>
              </div>
              {/* <div className="stat">
                <h3>30+</h3>
                <p>Happy Clients</p>
              </div> */}
            </div>

            <div className="hero-buttons">
              <a 
                href="https://drive.google.com/file/d/1TZyMYQUOLxdOy9NUOJ3kVT8hO_pYo11F/view?usp=drive_link" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-primary btn-lg"
              >
                Download CV
              </a>
              <a 
                href="https://drive.google.com/file/d/1VUAdyVU06WeKNGeL-p-1lIHp4vNp_KpP/view?usp=drive_link" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-primary btn-lg"
              >
                Cover Letter
              </a>
            </div>
          </div>
        </div>

        {/* Right Side - Images with Coin Flip */}
        <div className="hero-images">
          <div className="image-container">
            <div className="coin-wrapper">
              <div className="coin-flip">
                <div className="coin-face coin-front">
                  <img 
                    src="https://ik.imagekit.io/73q3w7grn/primary-img.png" 
                    alt="Profile" 
                    className="profile-img"
                  />
                </div>
                <div className="coin-face coin-back">
                  <img 
                    src="https://ik.imagekit.io/73q3w7grn/secondary%20pic.jpeg" 
                    alt="Portfolio" 
                    className="portfolio-img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
