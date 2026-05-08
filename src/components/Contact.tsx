'use client';

import { useState } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function Contact() {
  const { ref: sectionRef, isVisible } = useScrollReveal(0.15);
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Inquiry from ${formState.name}`);
    const body = encodeURIComponent(`Name: ${formState.name}\nEmail: ${formState.email}\n\n${formState.message}`);
    window.open(`mailto:Manuhaxr@gmail.com?subject=${subject}&body=${body}`);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section className="contact section" id="contact" ref={sectionRef}>
      <div className="container">
        <div className={`section-label reveal ${isVisible ? 'visible' : ''}`} style={{ justifyContent: 'center' }}>
          <span className="section-label__number">03</span>
          <span className="section-label__title">Contact</span>
        </div>

        <h2 className="contact__headline">
          <span className={`line-reveal ${isVisible ? 'visible' : ''}`}>
            <span className="line-reveal__inner">Got a project?</span>
          </span>
          <span className={`line-reveal ${isVisible ? 'visible' : ''}`}>
            <span className="line-reveal__inner" style={{ transitionDelay: '120ms' }}>Let&apos;s make it</span>
          </span>
          <span className={`line-reveal ${isVisible ? 'visible' : ''}`}>
            <span className="line-reveal__inner" style={{ transitionDelay: '240ms' }}><span className="accent">unforgettable.</span></span>
          </span>
        </h2>

        {/* Contact Form */}
        <form className={`contact__form reveal ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '400ms' }} onSubmit={handleSubmit}>
          <div className="contact__form-row">
            <div className="contact__form-group">
              <label htmlFor="contact-name" className="contact__form-label">Name</label>
              <input id="contact-name" type="text" className="contact__form-input" placeholder="Your name" required value={formState.name} onChange={(e) => setFormState({ ...formState, name: e.target.value })} />
            </div>
            <div className="contact__form-group">
              <label htmlFor="contact-email" className="contact__form-label">Email</label>
              <input id="contact-email" type="email" className="contact__form-input" placeholder="your@email.com" required value={formState.email} onChange={(e) => setFormState({ ...formState, email: e.target.value })} />
            </div>
          </div>

          <div className="contact__form-group">
            <label htmlFor="contact-message" className="contact__form-label">Message</label>
            <textarea id="contact-message" className="contact__form-textarea" placeholder="Tell me about your project..." rows={5} required value={formState.message} onChange={(e) => setFormState({ ...formState, message: e.target.value })} />
          </div>

          <button type="submit" className="contact__submit-btn">
            {submitted ? 'Sent ✓' : 'Send Message →'}
          </button>
        </form>

        {/* Direct contact */}
        <div className={`contact__direct reveal ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '500ms' }}>
          <p className="contact__direct-text">Or reach out directly —</p>
          <a href="mailto:Manuhaxr@gmail.com" className="contact__email-link">Manuhaxr@gmail.com</a>

          <div className="contact__socials">
            <a href="https://github.com/Jameshaxor" target="_blank" rel="noopener noreferrer" className="contact__social-link" aria-label="GitHub">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
            </a>
            <a href="https://www.linkedin.com/in/manukumarnayak" target="_blank" rel="noopener noreferrer" className="contact__social-link" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
