import './Experience.css'
import { useEffect, useState } from 'react'

function Experience() {
    const [selectedImage, setSelectedImage] = useState(null)

    const experienceData = [
        {
            id: 1,
            title: 'MERN Stack Developer Intern',
            company: 'Ezitech Software House - Rawalpindi',
            duration: '11 May 2026 - 10 Aug 2026',
            description: [
                'Developed full-stack web applications using React.js, Node.js, Express.js, and MongoDB.',
                'Built responsive interfaces using JavaScript/TypeScript, Bootstrap, and Tailwind CSS.',
                'Developed RESTful APIs and CRUD operations with Express.js and MongoDB/Mongoose.',
                'Implemented authentication, authorization, protected routes, and secure API access.',
                'Used Git and GitHub for version control, debugging, code reviews, and collaboration.'
            ],
            imageLink: 'https://ik.imagekit.io/73q3w7grn/MERN.png?updatedAt=1790182042515'
        },
        {
            id: 2,
            title: 'DevOps Intern',
            company: 'Decodes Labs',
            duration: 'May 2026 - July 2026',
            description: [
                'Managed GitHub repositories and source-code workflows for team collaboration.',
                'Built and managed Docker images for application containerization and deployment.',
                'Designed Jenkins CI/CD pipelines for automated builds, testing, security scanning, and deployment.',
                'Scanned containers and filesystems with Trivy and deployed applications to AWS EC2 and Kubernetes.',
                'Monitored Kubernetes workloads and infrastructure using Prometheus and Grafana.'
            ],
            imageLink: 'https://ik.imagekit.io/73q3w7grn/devops-monitoring.png?updatedAt=1790172916444'
        },
        {
            id: 3,
            title: 'MERN Stack & AWS DevOps Engineer',
            company: 'Self-Employed',
            duration: 'Aug 2026 - Present',
            description: [
                'Designed and developed full-stack MERN applications with additional backend services using Python FastAPI.',
                'Containerized applications with Docker and deployed them on AWS EC2 and Kubernetes.',
                'Built Jenkins CI/CD pipelines for application builds, image creation, security testing, and deployment.',
                'Used SonarQube and Trivy for DevSecOps practices and Prometheus and Grafana for monitoring.',
                'Managed AWS infrastructure and deployment workflows with Linux, Kubernetes, and Terraform.'
            ],
            imageLink: 'https://ik.imagekit.io/73q3w7grn/ChatGPT%20Image%20Sep%2023,%202026,%2010_49_04%20PM-Picsart-BackgroundRemover.png'
        }
    ]

    useEffect(() => {
        if (!selectedImage) {
            return undefined
        }

        const closeOnEscape = (event) => {
            if (event.key === 'Escape') {
                setSelectedImage(null)
            }
        }

        document.addEventListener('keydown', closeOnEscape)
        document.body.style.overflow = 'hidden'

        return () => {
            document.removeEventListener('keydown', closeOnEscape)
            document.body.style.overflow = ''
        }
    }, [selectedImage])

    return (
        <section className="experience-section" id="experience">
            <div className="experience-container">
                <div className="experience-header">
                    <p className="experience-eyebrow">Career Path</p>
                    <h2 className="experience-title">Work Experience</h2>
                    <p className="experience-subtitle">A selection of roles where I build, deploy, and improve digital products.</p>
                </div>

                <div className="experience-list">
                    {experienceData.map((experience) => (
                        <article className="experience-card" key={experience.id}>
                            <div className="experience-card-header">
                                <h3 className="experience-role">{experience.title}</h3>
                                <div className="experience-meta">
                                    <p className="experience-company">{experience.company}</p>
                                    <p className="experience-duration">{experience.duration}</p>
                                </div>
                            </div>
                            <div className="experience-card-body">
                                <ul className="experience-description">
                                    {experience.description.map((item) => (
                                        <li key={item}>{item}</li>
                                    ))}
                                </ul>
                                <button
                                    className="experience-image"
                                    type="button"
                                    aria-label={`Open ${experience.title} image`}
                                    onClick={() => setSelectedImage(experience)}
                                >
                                    <img src={experience.imageLink} alt={`${experience.title} project`} />
                                </button>
                            </div>
                        </article>
                    ))}
                </div>
            </div>

            {selectedImage && (
                <div
                    className="experience-lightbox"
                    role="dialog"
                    aria-modal="true"
                    aria-label={`${selectedImage.title} image preview`}
                    onClick={(event) => {
                        if (event.target === event.currentTarget) {
                            setSelectedImage(null)
                        }
                    }}
                >
                    <div className="experience-lightbox-content">
                        <button
                            className="experience-lightbox-close"
                            type="button"
                            aria-label="Close image preview"
                            onClick={() => setSelectedImage(null)}
                        >
                            &times;
                        </button>
                        <img src={selectedImage.imageLink} alt={`${selectedImage.title} enlarged`} />
                        <p>{selectedImage.title}</p>
                    </div>
                </div>
            )}
        </section>
    )
}

export default Experience
