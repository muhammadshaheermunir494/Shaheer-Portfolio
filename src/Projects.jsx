import './Projects.css'

function Projects() {
  const projects = [
    {
      id: 1,
      title: "Build CI/CD Pipeline Through Jenkins",
      description: "This repository demonstrates a complete CI/CD pipeline for a React-based login application, automated using GitHub workflows and containerized with Docker. The project is designed to streamline the development-to-deployment lifecycle by automatically building, testing, and deploying the application to an AWS EC2 instance whenever changes are pushed to the repository. Docker is used to ensure a consistent runtime environment across development and production, while GitHub Actions handles continuous integration and delivery by triggering workflows for build and deployment processes. The application is hosted on an EC2 instance, enabling scalable and reliable access. This project reflects practical implementation of DevOps principles, including automation, containerization, and cloud deployment, reducing manual intervention and improving deployment efficiency.",
      image: "https://ik.imagekit.io/73q3w7grn/React%20login%20page%20CI_CD%20pipeline%20overview.png",
      link: "https://github.com/munirsons/react-login-page",
      tags: ["NodeJs", "OpenAi Ai", "Github Actions", "Docker", "Jenkins", "AWS", "EC2" ]
    },
    {
      id: 2,
      title: "Deploy 3-Tier Chat App on K8s",
      description: "This repository showcases a practical implementation of a 3-tier chat application deployed on Kubernetes using Minikube, demonstrating how modern distributed systems are structured and managed. The architecture is divided into frontend, backend, and database layers, each containerized using Docker and orchestrated through Kubernetes Deployments. Internal communication between services is handled via ClusterIP Services, enabling seamless interaction without hardcoded IP dependencies, while the frontend is exposed externally using a NodePort Service. Persistent storage is implemented using Persistent Volumes and Persistent Volume Claims to ensure data durability for the database layer. This project highlights core Kubernetes concepts such as service discovery, container orchestration, and scalable architecture design, emphasizing how real-world applications rely on reliable inter-service communication rather than isolated container execution.",
      image: "https://ik.imagekit.io/73q3w7grn/three-tier%20chat%20app%20on%20Kubernetes.png",
      link: "https://github.com/munirsons/react-login-page",
      tags: ["GitHub Actions", "AWS - EC2", "Jenkins", "Docker"]
    },
    {
      id: 3,
      title: "Deploy 3-Tier Voting-App on K8s through Helm",
      description: "I deployed a full-stack chat application as part of my DevOps learning journey, focusing entirely on infrastructure and deployment rather than development. The application consists of multiple services (frontend, backend, worker, Redis, and database) containerized using Docker and orchestrated through a scalable setup. I deployed the system on AWS EC2 and extended it using Kubernetes with Helm for better manageability and scalability. To ensure observability, I integrated Prometheus for metrics collection and Grafana for real-time monitoring and visualization. This project helped me understand how real-world applications are deployed, managed, and monitored in production environments, especially when working with systems I didn’t build myself.",
      image: "https://ik.imagekit.io/73q3w7grn/Microservices%20architecture%20with%20Kubernetes%20and%20monitoring.png",
      link: "https://github.com/munirsons/Voting-app-on-k8s",
      tags: ["Docker", "Kubernaties", "Helm", "Prometheus", "Grafana", "AWS - EC2",]
    }
  ]

  const handleProjectClick = (link) => {
    window.open(link, '_blank', 'noopener,noreferrer')
  }

  return (
    <section className="projects-section" id="devops-projects">
      <div className="projects-container">
        <div className="section-header">
          <h2 className="section-title">DevOps Projects</h2>
          <p className="section-subtitle">
            A curated series of practical DevOps projects showcasing my journey from foundational concepts to advanced workflows, including CI/CD, container orchestration, IaC, and cloud solutions—highlighting real-world expertise and continuous learning.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`project-card ${index % 2 === 0 ? 'text-first' : 'image-first'}`}
              onClick={() => handleProjectClick(project.link)}
            >
              <div className="project-content">
                <div className="project-text">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tags">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="tag">{tag}</span>
                    ))}
                  </div>
                  <div className="project-link">
                    <span className="link-text">View Project →</span>
                  </div>
                </div>

                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  <div className="image-overlay"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
