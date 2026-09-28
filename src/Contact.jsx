import { useState } from 'react'
import emailjs from '@emailjs/browser'
import './Contact.css'

// Initialize EmailJS
emailjs.init('8cpWxcWz4ridUx76u')

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)
  const [submitMessage, setSubmitMessage] = useState({ type: '', text: '' })

  const validateForm = () => {
    const newErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    }

    return newErrors
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    const newErrors = validateForm()
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setLoading(true)
    setSubmitMessage({ type: '', text: '' })

    try {
      // Email 1: Send to your email (338msm338@gmail.com) with visitor's message
      const adminEmailResponse = await emailjs.send(
        'service_y6matsu',
        'template_3dy30s9',
        {
          to_email: '338msm338@gmail.com',
          name: formData.name,
          email: formData.email,
          title: 'New Contact Message',
          message: formData.message,
          reply_to: formData.email
        }
      )

      // Email 2: Send auto-reply to visitor's email
      const visitorEmailResponse = await emailjs.send(
        'service_y6matsu',
        'template_jje92ti',
        {
          to_email: formData.email,
          name: formData.name
        }
      )

      if (adminEmailResponse.status === 200 && visitorEmailResponse.status === 200) {
        setSubmitMessage({
          type: 'success',
          text: 'Thank you! Your message has been sent successfully. A confirmation email has been sent to your email address.'
        })
        setFormData({ name: '', email: '', message: '' })
        setErrors({})
      } else {
        setSubmitMessage({
          type: 'error',
          text: 'Failed to send message. Please try again later.'
        })
      }
    } catch (error) {
      console.error('Error sending message:', error)
      setSubmitMessage({
        type: 'error',
        text: 'Error sending message. Please try again.'
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <div className="section-header">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Have a project in mind? Let's collaborate and create something amazing together!
          </p>
          <p className="contact-response-note">
            Please fill the correct information in all required fields, to contact me & I will contact within 24 working hours.
          </p>
        </div>

        <div className="contact-wrapper">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name" className="form-label">Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                className={`form-input ${errors.name ? 'error' : ''}`}
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && <span className="error-message">{errors.name}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="email" className="form-label">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                className={`form-input ${errors.email ? 'error' : ''}`}
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <span className="error-message">{errors.email}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea
                id="message"
                name="message"
                className={`form-textarea ${errors.message ? 'error' : ''}`}
                placeholder="Tell me about your project..."
                rows="6"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
              {errors.message && <span className="error-message">{errors.message}</span>}
            </div>

            {submitMessage.text && (
              <div className={`submit-message ${submitMessage.type}`}>
                {submitMessage.type === 'success' ? '✓' : '✕'} {submitMessage.text}
              </div>
            )}

            <button
              type="submit"
              className="submit-btn"
              disabled={loading}
            >
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </form>

          <div className="contact-info">
            <div className="info-item">
              <div className="info-icon">📧</div>
              <div className="info-content">
                <h4>Email</h4>
                <p>muhammadshaheermunir494@gmail.com</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">📍</div>
              <div className="info-content">
                <h4>Location</h4>
                <p>Pakistan</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">⏰</div>
              <div className="info-content">
                <h4>Response Time</h4>
                <p>24-48 hours</p>
              </div>
            </div>

            <div className="social-links">
              <a href="https://github.com/munirsons" target="_blank" rel="noopener noreferrer" className="social-link">
                GitHub
              </a>
              <a href="https://linkedin.com/in/muhammad-shaheer-munir" target="_blank" rel="noopener noreferrer" className="social-link">
                LinkedIn
              </a>
              <a href="https://wa.me/923234136936" target="_blank" rel="noopener noreferrer" className="social-link">
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
