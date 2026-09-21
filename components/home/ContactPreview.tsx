"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { SITE_CONFIG, ENQUIRY_TYPES } from "@/lib/constants";

export default function ContactPreview() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    city: "Hajipur",
    enquiryType: "General Enquiry",
    requirements: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, page: "Home Quick Enquiry" }),
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
        city: "Hajipur",
        enquiryType: "General Enquiry",
        requirements: "",
      });
    } catch (err: any) {
      setStatus("error");
      setErrorMessage(err.message || "An unexpected error occurred. Please try again or call us directly.");
    }
  };

  return (
    <section className="py-20 lg:py-32 bg-white relative" id="contact-preview">
      <Container>
        <SectionHeading
          tag="GET IN TOUCH"
          title="Direct Consultation with Engineering Leadership"
          description="Submit your technical requirements or project scope for comprehensive review and proposal estimation."
        />

        <div className="mt-16 grid lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Office Details */}
          <div className="lg:col-span-5 space-y-8 bg-gray-50/80 p-8 sm:p-10 rounded-3xl border border-gray-100">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-green-700">
                CORPORATE HEADQUARTERS
              </span>
              <h3 className="text-2xl font-bold text-navy-900 mt-2 font-heading">
                EKOSYS CORPORATION
              </h3>
              <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                Central management and project coordination hub in Bihar, overseeing engineering operations nationwide.
              </p>
            </div>

            <div className="space-y-5 text-sm text-gray-700">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white border border-gray-200 flex items-center justify-center shrink-0 text-navy-800">
                  <MapPin className="w-5 h-5 text-green-700" />
                </div>
                <div>
                  <h4 className="font-semibold text-navy-900">Office Address</h4>
                  <p className="text-gray-600 mt-0.5">{SITE_CONFIG.address.full}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white border border-gray-200 flex items-center justify-center shrink-0 text-navy-800">
                  <Phone className="w-5 h-5 text-green-700" />
                </div>
                <div>
                  <h4 className="font-semibold text-navy-900">Direct Phone Line</h4>
                  <a
                    href={`tel:${SITE_CONFIG.phoneClean}`}
                    className="text-gray-600 hover:text-green-700 transition-colors mt-0.5 block"
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
                  <h4 className="font-semibold text-navy-900">Official Inquiries</h4>
                  <a
                    href={`mailto:${SITE_CONFIG.email}`}
                    className="text-gray-600 hover:text-green-700 transition-colors mt-0.5 block"
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
                  <h4 className="font-semibold text-navy-900">Operating Hours</h4>
                  <p className="text-gray-600 mt-0.5">Monday – Saturday: 9:00 AM – 7:00 PM IST</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border border-gray-200 shadow-sm">
            <h3 className="text-2xl font-bold text-navy-900 font-heading mb-6">
              Request Project Assessment
            </h3>

            {status === "success" && (
              <div className="mb-6 p-4 rounded-2xl bg-green-50 border border-green-200 text-green-800 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                <div className="text-sm">
                  <strong className="font-bold">Thank you for contacting EKOSYS.</strong>
                  <p className="mt-1">
                    Your requirements have been securely recorded. Our domain engineering team will contact you within 24 business hours.
                  </p>
                </div>
              </div>
            )}

            {status === "error" && (
              <div className="mb-6 p-4 rounded-2xl bg-red-50 border border-red-200 text-red-800 flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                <div className="text-sm">
                  <strong className="font-bold">Submission Notice:</strong>
                  <p className="mt-1">{errorMessage}</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Rajesh Kumar"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-green-600 focus:ring-1 focus:ring-green-600 outline-none transition-all text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="e.g. +91 98765 43210"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-green-600 focus:ring-1 focus:ring-green-600 outline-none transition-all text-sm"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="email" className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@company.com"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-green-600 focus:ring-1 focus:ring-green-600 outline-none transition-all text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="city" className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
                    City / Project Location
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="e.g. Hajipur / Patna"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-green-600 focus:ring-1 focus:ring-green-600 outline-none transition-all text-sm"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="enquiryType" className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
                  Engineering Division / Service Interest *
                </label>
                <select
                  id="enquiryType"
                  name="enquiryType"
                  value={formData.enquiryType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-green-600 focus:ring-1 focus:ring-green-600 outline-none transition-all text-sm bg-white"
                >
                  {ENQUIRY_TYPES.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="requirements" className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
                  Project Requirements / Specifications *
                </label>
                <textarea
                  id="requirements"
                  name="requirements"
                  rows={4}
                  required
                  value={formData.requirements}
                  onChange={handleChange}
                  placeholder="Describe project capacity, location, timeline, or engineering questions..."
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-green-600 focus:ring-1 focus:ring-green-600 outline-none transition-all text-sm"
                />
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full py-4 px-6 rounded-xl bg-green-700 hover:bg-green-800 text-white font-bold text-sm transition-all flex items-center justify-center gap-2 shadow-sm disabled:opacity-60"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Processing Submission...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Submit Engineering Enquiry</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
}
