"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, CheckCircle2, AlertCircle, Loader2, ShieldCheck } from "lucide-react";
import Container from "@/components/ui/Container";
import { SITE_CONFIG, ENQUIRY_TYPES, DIVISIONS } from "@/lib/constants";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    enquiryType: "General Enquiry",
    requirements: "",
    consent: true,
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, page: "Contact Page Form" }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to submit enquiry");
      }

      setStatus("success");
      setFormData({
        name: "",
        phone: "",
        email: "",
        city: "",
        enquiryType: "General Enquiry",
        requirements: "",
        consent: true,
      });
    } catch (err: any) {
      setStatus("error");
      setErrorMessage(err.message || "An unexpected error occurred. Please contact us directly via phone or WhatsApp.");
    }
  };

  return (
    <div className="py-12 lg:py-16">
      {/* Header */}
      <section className="bg-[#F4F7F9] text-navy-900 py-20 lg:py-28 relative overflow-hidden border-b border-navy-200">
        <div className="absolute inset-0 bg-grid opacity-15 pointer-events-none" />
        <Container className="relative">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-green-700 font-heading">
              CORPORATE CONTACT & ENGAGEMENT
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading tracking-tight leading-tight text-navy-900">
              Connect With <span className="text-green-700">EKOSYS Engineering</span>
            </h1>
            <p className="mt-6 text-base sm:text-lg text-navy-700 leading-relaxed">
              Submit your project blueprints, tender specifications, or engineering requirements for direct evaluation by our technical directors.
            </p>
          </div>
        </Container>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <Container>
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left: Headquarters Info & Subdomains */}
            <div className="lg:col-span-5 space-y-8">
              <div className="bg-gray-50/80 p-8 sm:p-10 rounded-3xl border border-gray-100 space-y-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-green-700">
                    CENTRAL HEADQUARTERS
                  </span>
                  <h2 className="text-2xl font-bold text-navy-900 mt-2 font-heading">
                    EKOSYS CORPORATION
                  </h2>
                  <p className="mt-2 text-sm text-gray-600">
                    Hajipur corporate operations overseeing multi-state engineering, solar EPC, facade installations, healthcare systems, and IT projects.
                  </p>
                </div>

                <div className="space-y-4 pt-2 text-sm text-gray-700">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white border border-gray-200 flex items-center justify-center shrink-0 text-navy-800">
                      <MapPin className="w-5 h-5 text-green-700" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-navy-900">Headquarters Address</h4>
                      <p className="text-gray-600 mt-0.5">{SITE_CONFIG.address.full}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white border border-gray-200 flex items-center justify-center shrink-0 text-navy-800">
                      <Phone className="w-5 h-5 text-green-700" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-navy-900">Telephone / Direct Line</h4>
                      <a
                        href={`tel:${SITE_CONFIG.phoneClean}`}
                        className="text-gray-600 hover:text-green-700 transition-colors mt-0.5 block font-medium"
                      >
                        {SITE_CONFIG.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white border border-gray-200 flex items-center justify-center shrink-0 text-navy-800">
                      <Mail className="w-5 h-5 text-green-700" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-navy-900">Email Dispatch</h4>
                      <a
                        href={`mailto:${SITE_CONFIG.email}`}
                        className="text-gray-600 hover:text-green-700 transition-colors mt-0.5 block font-medium"
                      >
                        {SITE_CONFIG.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white border border-gray-200 flex items-center justify-center shrink-0 text-navy-800">
                      <Clock className="w-5 h-5 text-green-700" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-navy-900">Operating Schedule</h4>
                      <p className="text-gray-600 mt-0.5">Monday – Saturday: 9:00 AM – 7:00 PM IST</p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-200/70">
                  <a
                    href={SITE_CONFIG.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-sm transition-all flex items-center justify-center gap-2 shadow-sm"
                  >
                    <MessageCircle className="w-5 h-5 fill-current" />
                    <span>Chat Directly on WhatsApp</span>
                  </a>
                </div>
              </div>

              {/* Divisional Contacts Box */}
              <div className="p-6 rounded-3xl border border-gray-100 bg-white shadow-xs">
                <h3 className="text-sm font-bold uppercase tracking-wider text-navy-900 mb-4 font-heading">
                  Direct Division Web Portals
                </h3>
                <div className="space-y-2.5">
                  {DIVISIONS.map((d) => (
                    <a
                      key={d.id}
                      href={d.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-2.5 rounded-xl hover:bg-gray-50 text-xs font-semibold text-gray-700 hover:text-navy-900 transition-colors"
                    >
                      <span>{d.brand}</span>
                      <span className="text-green-700 font-normal">{d.subdomain} →</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Comprehensive Contact Form */}
            <div className="lg:col-span-7 bg-white p-8 sm:p-12 rounded-3xl border border-gray-200 shadow-sm">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className="text-2xl font-bold text-navy-900 font-heading">
                    Submit Technical Request
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500 mt-1">
                    Fill in your project requirements. You will be connected directly with the appropriate domain engineer.
                  </p>
                </div>
              </div>

              {status === "success" && (
                <div className="mb-8 p-6 rounded-2xl bg-green-50 border border-green-200 text-green-900 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-base">
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                    <span>Project Enquiry Submitted Successfully</span>
                  </div>
                  <p className="text-sm text-green-800">
                    Thank you. Your request has been forwarded to our engineering operations desk. An engineer will follow up with you within 24 hours.
                  </p>
                </div>
              )}

              {status === "error" && (
                <div className="mb-8 p-4 rounded-2xl bg-red-50 border border-red-200 text-red-800 flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                  <div className="text-sm">
                    <strong>Submission Notice:</strong>
                    <p className="mt-1">{errorMessage}</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="contact-name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Ramesh Chandra"
                      className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-green-600 focus:ring-1 focus:ring-green-600 outline-none transition-all text-sm"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-phone" className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="contact-phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-green-600 focus:ring-1 focus:ring-green-600 outline-none transition-all text-sm"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="contact-email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="name@organization.com"
                      className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-green-600 focus:ring-1 focus:ring-green-600 outline-none transition-all text-sm"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-city" className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                      Project Location / City *
                    </label>
                    <input
                      type="text"
                      id="contact-city"
                      name="city"
                      required
                      value={formData.city}
                      onChange={handleChange}
                      placeholder="e.g. Hajipur, Patna, Muzaffarpur..."
                      className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-green-600 focus:ring-1 focus:ring-green-600 outline-none transition-all text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-enquiryType" className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                    Engineering Discipline / Division *
                  </label>
                  <select
                    id="contact-enquiryType"
                    name="enquiryType"
                    value={formData.enquiryType}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-green-600 focus:ring-1 focus:ring-green-600 outline-none transition-all text-sm bg-white"
                  >
                    {ENQUIRY_TYPES.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="contact-requirements" className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                    Scope of Work / Technical Specifications *
                  </label>
                  <textarea
                    id="contact-requirements"
                    name="requirements"
                    rows={5}
                    required
                    value={formData.requirements}
                    onChange={handleChange}
                    placeholder="Provide details regarding project capacity, site status, timeline, equipment requirements, or RFP details..."
                    className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-green-600 focus:ring-1 focus:ring-green-600 outline-none transition-all text-sm"
                  />
                </div>

                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="consent"
                    name="consent"
                    checked={formData.consent}
                    onChange={handleChange}
                    className="mt-1 h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                  />
                  <label htmlFor="consent" className="text-xs text-gray-500 leading-normal">
                    I agree to allow EKOSYS Corporation and its authorized engineering leads to contact me regarding this proposal in accordance with privacy protocols.
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full py-4 px-8 rounded-xl bg-green-700 hover:bg-green-800 text-white font-bold text-sm transition-all flex items-center justify-center gap-2 shadow-sm disabled:opacity-60"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Transmitting Technical Request...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Submit Project Proposal Request</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Interactive Map Embed */}
          <div className="mt-16 rounded-3xl overflow-hidden border border-gray-200 shadow-sm">
            <div className="bg-gray-100 p-4 border-b border-gray-200 flex items-center justify-between text-xs text-gray-600">
              <span className="font-bold text-navy-900">Headquarters Coordinates: Opposite to Municipal Office, Hajipur - 844101, Bihar</span>
              <a
                href={`https://maps.google.com/?q=${SITE_CONFIG.address.mapQuery}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-700 font-semibold hover:underline"
              >
                Open in Google Maps ↗
              </a>
            </div>
            <iframe
              title="EKOSYS Corporation Headquarters Location"
              src="https://maps.google.com/maps?q=Opposite+to+Municipal+Office+Hajipur+844101+Bihar&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="380"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Container>
      </section>
    </div>
  );
}
