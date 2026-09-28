import './Education.css'

function Education() {
  const educationData = [
    {
      id: 1,
      title: "Bachelor of Science in Computer Science",
      institution: "GOVT. GRADUATE COLLEGE OF COMMERCE, HUNZA BLOCK, ALLAMA IQBAL TOWN, LAHORE",
      year: "2023 - 2027",
      description: "Specialized in Computer Science"
    },
    {
      id: 2,
      title: "ICS - Physics",
      institution: "Govt. Graduate College, Sabzazar, Lahore",
      year: "2021 - 2023",
    },
    {
      id: 3,
      title: "Cloud Computing With Aws",
      institution: "ShellShift",
      year: "2025",
      description: "Specialization in AWS Cloud Platform"
    }
  ]

  const certifications = [
    {
      id: 1,
      title: "Full Stack Web Development",
      issuer: "Coursera",
      year: "2022",
      icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVm1kNv097L8tb8-3zgaeIKbTgP0RRRPnJ5Q&s"
    },
    {
      id: 2,
      title: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      year: "2023",
      icon: "https://img.icons8.com/color/96/000000/amazon-web-services.png"
    },
     {
      id: 3,
      title: "CI/CD Pipeline",
      issuer: "The Linux Foundatiob",
      year: "2022",
      icon: "https://img.icons8.com/?size=100&id=39292&format=png&color=000000"
    },
    {
      id: 4,
      title: "DevOps Engineer Professional",
      issuer: "Linux Academy",
      year: "2023",
      icon: "https://ouch-prod-var-cdn.icons8.com/nc/illustrations/thumbs/J9C9xepv1ft68Qo4.webp"
    }
  ]

  return (
    <section className="education-section" id="education-certifications">
      <div className="education-container">
        <div className="section-header">
          <h2 className="section-title">Education & Certifications</h2>
          <p className="section-subtitle">My Learning Journey</p>
        </div>

        <div className="education-wrapper">
          {/* Education Column */}
          <div className="education-column">
            <div className="column-header">
              <h3>🎓 Education</h3>
            </div>
            <div className="education-items">
              {educationData.map((edu) => (
                <div key={edu.id} className="education-card">
                  <div className="education-marker"></div>
                  <div className="education-content">
                    <h4 className="education-title">{edu.title}</h4>
                    <p className="education-institution">{edu.institution}</p>
                    <p className="education-year">{edu.year}</p>
                    <p className="education-description">{edu.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications Column */}
          <div className="certification-column">
            <div className="column-header">
              <h3>🏆 Certifications</h3>
            </div>
            <div className="certification-grid">
              {certifications.map((cert) => (
                <div key={cert.id} className="certification-card">
                  <img src={cert.icon} alt={cert.title} className="cert-icon-tag" />
                  <h4 className="cert-title">{cert.title}</h4>
                  <p className="cert-issuer">{cert.issuer}</p>
                  <p className="cert-year">{cert.year}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education
