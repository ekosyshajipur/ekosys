import { useState, useRef } from 'react';
import axios from 'axios';
import { Helmet } from 'react-helmet-async';
import { Turnstile } from '@marsidev/react-turnstile';
import { BreadcrumbSchema } from '../components/SchemaMarkup';
import { businessInfo } from '../data/seoData';

let API = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';
if (API && !API.endsWith('/api')) API += '/api';

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', city: '', enquiryType: 'General Enquiry', requirement: '' });
  const [turnstileToken, setTurnstileToken] = useState('');
  const [toast, setToast] = useState(null);
  const [loading, setLoading] = useState(false);
  const turnstileRef = useRef();

  const showToast = (msg, type = 'success') => { setToast({ msg, type }); setTimeout(() => setToast(null), 4000); };

  const submitContact = async (e) => {
    e.preventDefault(); 
    if (!turnstileToken) {
      showToast('Please complete the CAPTCHA', 'error');
      return;
    }
    setLoading(true);
    try { 
      const { data } = await axios.post(`${API}/contact`, { ...form, turnstileToken }); 
      showToast(data.message); 
      setForm({ name: '', phone: '', email: '', city: '', enquiryType: 'General Enquiry', requirement: '' });
      setTurnstileToken(''); // Reset token state
      turnstileRef.current?.reset(); // Gracefully request a new token
    } catch (err) { 
      showToast(err.response?.data?.message || 'Failed to send message. Please try again.', 'error'); 
    }
    setLoading(false);
  };

  return (
    <>
      <Helmet>
        <title>Contact EKOSYS Solar | Get Free Solar Quote | Bihar</title>
        <meta name="description" content="Contact EKOSYS Solar for free solar consultation, quotes, and support in Bihar. Call +91-8757686826 or visit our office in Hajipur, Vaishali. Get PM Surya Ghar Yojana assistance." />
        <meta name="keywords" content="contact EKOSYS solar, solar quote Bihar, solar consultation Hajipur, free solar quote, EKOSYS phone number, solar company contact Bihar" />
        <link rel="canonical" href="https://ekosys.in/contact" />
        <meta property="og:title" content="Contact EKOSYS Solar | Get Free Solar Quote | Bihar" />
        <meta property="og:description" content="Get in touch with EKOSYS Solar for free consultation, quotes, and support across Bihar. Call +91-8757686826." />
        <meta property="og:url" content="https://ekosys.in/contact" />
        <meta property="og:image" content="https://ekosys.in/images/hero-banner.webp" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact EKOSYS Solar | Get Free Solar Quote | Bihar" />
        <meta name="twitter:description" content="Contact EKOSYS Solar for free solar consultation and quotes in Bihar." />
        <meta name="twitter:image" content="https://ekosys.in/images/hero-banner.webp" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPoint",
            "telephone": businessInfo.phone,
            "contactType": "customer service",
            "areaServed": "IN",
            "availableLanguage": ["English", "Hindi"],
            "contactOption": "TollFree",
            "url": "https://ekosys.in/contact"
          })}
        </script>
      </Helmet>
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://ekosys.in/' },
        { name: 'Contact Us', url: 'https://ekosys.in/contact' }
      ]} />

      {toast && <div className={`toast ${toast.type === 'error' ? 'error' : ''}`}>{toast.msg}</div>}
      <section className="page-header">
        <div className="container">
          <h1><span className="highlight">Contact</span> Us</h1>
          <p>Get in touch with EKOSYS for free consultation, quotes, and support</p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="contact-grid">
            <div>
              <form className="contact-form" onSubmit={submitContact}>
                <h2 style={{ marginBottom: 20 }}>Send Us A Message</h2>
                <input placeholder="Full Name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} required />
                <input type="tel" placeholder="Phone Number (10 digits)" pattern="[0-9]{10}" maxLength="10" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} title="Please enter a valid 10-digit phone number" required />
                <input type="email" placeholder="Email Address" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} required />
                <input placeholder="City" value={form.city} onChange={e => setForm({ ...form, city: e.target.value })} required />
                <select value={form.enquiryType} onChange={e => setForm({ ...form, enquiryType: e.target.value })}>
                  <option value="General Enquiry">General Enquiry</option><option value="Solar Quote">Solar Quote</option><option value="Subsidy Help">Subsidy Help</option><option value="Maintenance">Maintenance</option><option value="Complaint">Complaint</option><option value="Partnership">Partnership</option>
                </select>
                <textarea placeholder="Your Requirement" value={form.requirement} onChange={e => setForm({ ...form, requirement: e.target.value })} required />
                
                <Turnstile 
                  ref={turnstileRef}
                  siteKey={import.meta.env.VITE_TURNSTILE_SITE_KEY || '0x4AAAAAADfKu-Uj__BLIWkC'} 
                  options={{ size: 'invisible' }}
                  onSuccess={(token) => setTurnstileToken(token)} 
                  onError={() => { console.error('Turnstile Error'); setTurnstileToken(''); }}
                  onExpire={() => { console.warn('Turnstile Expired'); setTurnstileToken(''); turnstileRef.current?.reset(); }}
                />

                <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }} disabled={loading || !turnstileToken}>
                  {loading ? <span className="spinner"></span> : 'Send Message →'}
                </button>
              </form>
            </div>
            <div className="contact-info-card">
              <h2 style={{ marginBottom: 24 }}>Get in Touch</h2>
              <div className="contact-info-item"><div className="icon">📞</div><div><h4>Phone</h4><p>8757686826</p></div></div>
              <div className="contact-info-item"><div className="icon">✉</div><div><h4>Email</h4><p>ekosys.corp@gmail.com</p></div></div>
              <div className="contact-info-item"><div className="icon">📍</div><div><h4>Address</h4><p>EKOSYS</p><p>Hajipur, Vaishali, Bihar</p></div></div>
              <div className="contact-info-item"><div className="icon">🕐</div><div><h4>Business Hours</h4><p>Mon - Sat: 9:00 AM - 7:00 PM</p><p>Sunday: Closed</p></div></div>
              <div style={{ background: 'rgba(245,158,11,.1)', borderRadius: 12, padding: 20, marginTop: 16 }}>
                <p style={{ color: '#f59e0b', fontWeight: 600, fontStyle: 'italic' }}>🌟 "PM सूर्य घर मुफ़्त बिजली योजना - आज ही आवेदन करें और 125 यूनिट तक मुफ़्त बिजली पाएं।"</p>
                <p style={{ color: '#94a3b8', fontSize: '.85rem', marginTop: 8 }}>We assist you with the complete PM Surya Ghar Yojana application process from start to finish.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
