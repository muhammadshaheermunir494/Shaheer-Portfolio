import './LogoLoop.css'

function LogoLoop() {
  const logos = [
    { id: 1, name: 'GitHub', logo: 'https://icon.icepanel.io/Technology/png-shadow-512/GitHub.png' },
    { id: 2, name: 'Docker', logo: 'https://img.icons8.com/?size=100&id=LdUzF8b5sz2R&format=png&color=000000' },
    { id: 3, name: 'React', logo: 'https://icon.icepanel.io/Technology/svg/React.svg' },
    { id: 4, name: 'Node.js', logo: 'https://nodejs.org/static/images/logo.svg' },
    { id: 5, name: 'JavaScript', logo: 'https://icon.icepanel.io/Technology/svg/JavaScript.svg' },
    { id: 7, name: 'MongoDB', logo: 'https://icon.icepanel.io/Technology/svg/MongoDB.svg' },
    { id: 8, name: 'AWS', logo: 'https://icon.icepanel.io/Technology/png-shadow-512/AWS.png' },
    { id: 10, name: 'Linux', logo: 'https://www.kernel.org/theme/images/logos/tux.png' },
    { id: 11, name: 'Git', logo: 'https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png' },
    { id: 12, name: 'VS Code', logo: 'https://icon.icepanel.io/Technology/svg/Visual-Studio-Code-%28VS-Code%29.svg' },
    { id: 13, name: 'Jenkins', logo: 'https://img.icons8.com/?size=100&id=39292&format=png&color=000000' },
    { id: 14, name: 'Kubernetes', logo: 'https://icon.icepanel.io/Technology/svg/Kubernetes.svg' },
    { id: 15, name: 'Helm', logo: 'https://icon.icepanel.io/Technology/png-shadow-512/Helm.png' },
    { id: 16, name: 'Terraform', logo: 'https://icon.icepanel.io/Technology/svg/HashiCorp-Terraform.svg://www.vectorlogo.zone/logos/terraform/terraform-icon.svg' },
    { id: 17, name: 'Ansible', logo: 'https://icon.icepanel.io/Technology/png-shadow-512/Ansible.png' },
    { id: 18, name: 'EKS', logo: 'https://a0.awsstatic.com/libra-css/images/logos/aws_logo_smile_1200x630.png' },
    { id: 19, name: 'CSS', logo: 'https://icon.icepanel.io/Technology/svg/CSS3.svg' },
    { id: 20, name: 'Bootstrap', logo: 'https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png' },
    { id: 21, name: 'Prometheus', logo: 'https://www.vectorlogo.zone/logos/prometheusio/prometheusio-icon.svg' },
    { id: 22, name: 'Grafana', logo: 'https://www.vectorlogo.zone/logos/grafana/grafana-icon.svg' },
    { id: 23, name: 'GitLab', logo: 'https://about.gitlab.com/images/press/logo/png/gitlab-icon-rgb.png' },
    { id: 24, name: 'ArgoCD', logo: 'https://icon.icepanel.io/Technology/svg/Argo-CD.svg' },
    { id: 24, name: 'Vercel', logo: 'https://techicons.dev/icons/vercel' },
    { id: 24, name: 'MYSQL', logo: 'https://icon.icepanel.io/Technology/svg/MySQL.svg' }

  ]

  return (
    <section className="logo-loop-section container rounded-5">
      {/* <div className="container logo-loop-container"> */}
        <div className="logo-loop-wrapper container">
          <div className="logo-loop container">
            {[...logos, ...logos].map((logo, index) => (
              <div key={index} className="logo-item">
                <div className="logo-card">
                  <img src={logo.logo} alt={logo.name} className="logo-image" onError={(e) => e.target.style.display = 'none'} />
                  <p className="logo-name">{logo.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      {/* </div> */}
    </section>
  )
}

export default LogoLoop
