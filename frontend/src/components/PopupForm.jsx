import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Turnstile } from '@marsidev/react-turnstile';
import "./Popup.css";

let API = import.meta.env.VITE_API_URL || "http://localhost:5000/api";
if (API && !API.endsWith('/api')) API += '/api';

export default function PopupForm() {
  const [show, setShow] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    enquiryType: "General Enquiry",
    requirement: "",
  });
  const [turnstileToken, setTurnstileToken] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [filled, setFilled] = useState(false);
  const turnstileRef = useRef();
  const timersRef = useRef([]);

  useEffect(() => {
    // Clear any old persistent storage from previous versions.
    if (localStorage.getItem("ekosys_popup_filled")) {
      localStorage.removeItem("ekosys_popup_filled");
    }

    // Check if user already filled the form in this browser session
    const alreadyFilled = sessionStorage.getItem("ekosys_popup_filled");
    if (alreadyFilled) {
      setFilled(true);
    } else {
      // First popup after 1 minute (60000ms)
      const firstTimer = setTimeout(() => {
        if (!sessionStorage.getItem("ekosys_popup_filled")) {
          setShow(true);
        }

        // Subsequent popups every 10 minutes (600000ms)
        const recurring = setInterval(() => {
          if (sessionStorage.getItem("ekosys_popup_filled")) {
            clearInterval(recurring);
            return;
          }
          setShow(true);
        }, 600000);
        timersRef.current.push(recurring);
      }, 60000);
      
      timersRef.current.push(firstTimer);
    }

    // Also listen for manual open events (from "Get Free Quote" buttons)
    const handleOpenPopup = () => {
      // Always show on manual trigger and reset submitted state so they can submit again if they want
      setSubmitted(false);
      setShow(true);
      turnstileRef.current?.reset(); // Get a fresh token when explicitly reopened
    };
    window.addEventListener("openPopup", handleOpenPopup);

    return () => {
      timersRef.current.forEach((t) => clearTimeout(t));
      timersRef.current.forEach((t) => clearInterval(t));
      window.removeEventListener("openPopup", handleOpenPopup);
    };
  }, []);

  const closePopup = () => {
    setShow(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!turnstileToken) {
      alert("Please complete the CAPTCHA");
      return;
    }
    setLoading(true);
    try {
      await axios.post(`${API}/popup`, { ...form, turnstileToken });
      setSubmitted(true);
      setFilled(true);
      sessionStorage.setItem("ekosys_popup_filled", "true");
      setForm({ name: "", phone: "", email: "", city: "", enquiryType: "General Enquiry", requirement: "" });
      setTurnstileToken("");
      turnstileRef.current?.reset();
      
      // Stop the recurring popups because they successfully filled the form
      timersRef.current.forEach((t) => {
        clearTimeout(t);
        clearInterval(t);
      });
      setTimeout(() => {
        setShow(false);
        setSubmitted(false); // Reset to form view for the next time it pops up
      }, 3000);
    } catch (err) {
      alert(err.response?.data?.message || "Failed to submit. Please try again.");
    }
    setLoading(false);
  };

  return (
    <div
      className="popup-overlay"
      style={{ display: show ? 'flex' : 'none' }}
      onClick={(e) => {
        if (e.target === e.currentTarget) closePopup();
      }}
    >
      <div className="popup-container">
        <button className="popup-close" onClick={closePopup}>
          ✕
        </button>
        <div className="popup-header">
          <img
            src="/images/ekosys-logo.webp"
            alt="EKOSYS"
            className="popup-logo"
            loading="lazy"
            decoding="async"
            width="240"
            height="75"
          />
        </div>
        <div className="popup-content">
          {!submitted ? (
            <>
              <h3>Get a Free Solar Quote!</h3>
              <p>
                Fill in your details and our solar expert will contact you
                within 24 hours.
              </p>
              <form onSubmit={handleSubmit} className="popup-form">
                <input
                  type="text"
                  placeholder="Your Name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                />
                <input
                  type="tel"
                  placeholder="Your Phone (10 digits)"
                  pattern="[0-9]{10}"
                  maxLength="10"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  title="Please enter a valid 10-digit phone number"
                  required
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  required
                />
                <input
                  type="text"
                  placeholder="Your City"
                  value={form.city}
                  onChange={(e) => setForm({ ...form, city: e.target.value })}
                  required
                />
                <select
                  value={form.enquiryType}
                  onChange={(e) => setForm({ ...form, enquiryType: e.target.value })}
                  required
                >
                  <option value="General Enquiry">General Enquiry</option>
                  <option value="Solar Quote">Solar Quote</option>
                  <option value="Subsidy Help">Subsidy Help</option>
                  <option value="Maintenance">Maintenance</option>
                  <option value="Complaint">Complaint</option>
                  <option value="Partnership">Partnership</option>
                </select>
                <textarea
                  placeholder="Your Requirement"
                  value={form.requirement}
                  onChange={(e) =>
                    setForm({ ...form, requirement: e.target.value })
                  }
                ></textarea>

                <Turnstile 
                  ref={turnstileRef}
                  siteKey={import.meta.env.VITE_TURNSTILE_SITE_KEY || '0x4AAAAAADfKu-Uj__BLIWkC'} 
                  options={{ size: 'invisible' }}
                  onSuccess={(token) => setTurnstileToken(token)} 
                  onError={() => { console.error('Turnstile Error'); setTurnstileToken(''); }}
                  onExpire={() => { console.warn('Turnstile Expired'); setTurnstileToken(''); turnstileRef.current?.reset(); }}
                />

                <button
                  type="submit"
                  disabled={loading || !turnstileToken}
                  className="btn btn-primary"
                >
                  {loading ? "Submitting..." : "Get Free Quote →"}
                </button>
              </form>
            </>
          ) : (
            <div className="popup-success">
              <div className="success-icon">✅</div>
              <h3>Thank You!</h3>
              <p>
                Your details have been submitted successfully. Our team from
                EKOSYS will contact you shortly.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
