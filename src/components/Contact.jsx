import { useState } from "react";
import AnimatedSection from "./AnimatedSection";
import SectionHeader from "./SectionHeader";

const CONTACT_INFO = [
  {
    title: "Location",
    content:
      "1st Floor, 50 Manish Market, Mata Ramabai Ambedkar Marg (Palton Road), Mumbai 400 001. INDIA",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
        <path d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
    color: "emerald",
  },
  {
    title: "Email",
    content: null,
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
        <path d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
    emails: ["eat@eastasiatrading.com", "eat@vsnl.com"],
    color: "amber",
  },
  {
    title: "Phone",
    content: "+91-22-2264 1122",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
        <path d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
    link: "tel:+91-22-22641122",
    color: "emerald",
  },
];

const FORM_FIELDS = [
  {
    name: "name",
    type: "text",
    placeholder: "Your Name",
    required: true,
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
        <path d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
  },
  {
    name: "email",
    type: "email",
    placeholder: "Your Email",
    required: true,
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
        <path d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
  },
  {
    name: "subject",
    type: "text",
    placeholder: "Subject",
    required: true,
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
        <path d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
      </svg>
    ),
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In production this would POST to a backend / email service.
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="relative py-24 md:py-32 bg-linear-to-b from-white to-slate-50/60 overflow-hidden"
    >
      {/* Decorative background elements */}
      <AnimatedSection animation="fade" delay={0} duration={1000}>
        <div
          className="absolute top-20 right-0 w-150 h-150 rounded-full opacity-10"
          style={{
            background:
              "radial-gradient(circle, rgba(16, 185, 129, 0.3) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
          aria-hidden="true"
        />
      </AnimatedSection>

      <AnimatedSection animation="fade" delay={200} duration={1000}>
        <div
          className="absolute bottom-20 left-0 w-125 h-125 rounded-full opacity-10"
          style={{
            background:
              "radial-gradient(circle, rgba(251, 146, 60, 0.3) 0%, transparent 70%)",
            filter: "blur(70px)",
          }}
          aria-hidden="true"
        />
      </AnimatedSection>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeader
          title="Let's Grow Together"
          subtitle="Get In Touch With Us"
          description="Whether you are an importer seeking quality products from India or a business looking for a reliable sourcing partner, East Asia Group of Companies is here to support your growth."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact info */}
          <AnimatedSection animation="fade-right" delay={100}>
            <div className="space-y-6">
              {CONTACT_INFO.map((item) => (
                <div
                  key={item.title}
                  className={`
                    group relative flex gap-5 items-start
                    bg-white/80 backdrop-blur-lg rounded-3xl p-6
                    border border-white/60 shadow-lg shadow-slate-200/50
                    hover:shadow-2xl hover:shadow-${item.color}-100/60
                    hover:-translate-y-1
                    transition-all duration-500
                    overflow-hidden
                  `}
                >
                  {/* Gradient background on hover */}
                  <div
                    className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-linear-to-br ${item.color}`}
                    style={{
                      background: `linear-gradient(135deg, ${item.color === "emerald" ? "rgba(16, 185, 129, 0.03)" : "rgba(251, 146, 60, 0.03)"} 0%, transparent 100%)`,
                    }}
                  />

                  {/* Icon container */}
                  <div className="relative z-10">
                    <div
                      className={`
                        flex items-center justify-center shrink-0 w-14 h-14
                        rounded-2xl bg-linear-to-br ${item.color} text-white
                        shadow-lg shadow-current/30
                        group-hover:scale-110 group-hover:rotate-3
                        transition-all duration-500
                      `}
                    >
                      {item.icon}
                    </div>
                  </div>

                  <div className="relative z-10 flex-1">
                    <h4 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-emerald-700 transition-colors duration-300">
                      {item.title}
                    </h4>
                    {item.emails ? (
                      <div className="space-y-2">
                        {item.emails.map((email) => (
                          <a
                            key={email}
                            href={`mailto:${email}`}
                            className="
                              block text-base text-slate-600
                              hover:text-emerald-700 font-medium
                              transition-colors duration-300
                            "
                          >
                            {email}
                          </a>
                        ))}
                      </div>
                    ) : item.link ? (
                      <a
                        href={item.link}
                        className="
                          text-base text-slate-600
                          hover:text-emerald-700 font-medium
                          transition-colors duration-300
                        "
                      >
                        {item.content}
                      </a>
                    ) : (
                      <p className="text-base text-slate-600 leading-relaxed">
                        {item.content}
                      </p>
                    )}
                  </div>

                  {/* Decorative corner */}
                  <div className="absolute bottom-4 right-4 w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <svg
                      viewBox="0 0 32 32"
                      className={`
                        w-full h-full text-${item.color}-500
                        group-hover:rotate-45 transition-transform duration-500
                      `}
                    >
                      <path
                        d="M30 30 L18 30 L30 18"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                      />
                    </svg>
                  </div>
                </div>
              ))}

              {/* Decorative CTA box */}
              <div
                className="
                  mt-8 p-8 rounded-3xl
                  bg-linear-to-br from-emerald-50 to-emerald-100/60
                  border border-emerald-200/60
                  shadow-lg shadow-emerald-100/30
                  relative overflow-hidden
                "
              >
                <div
                  className="absolute inset-0 bg-linear-to-br from-emerald-500/5 to-amber-500/5"
                  aria-hidden="true"
                />
                <div className="relative z-10">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-600 text-white text-sm font-bold mb-4">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                      />
                    </svg>
                    Quick Response
                  </div>
                  <h4 className="text-xl font-bold text-emerald-900 mb-3">
                    Ready to get started?
                  </h4>
                  <p className="text-sm text-emerald-700 leading-relaxed">
                    Fill out the form and our team will get back to you within
                    24 hours with a tailored solution for your business needs.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Contact form */}
          <AnimatedSection animation="fade-left" delay={200}>
            <form
              onSubmit={handleSubmit}
              className="
                relative bg-white/80 backdrop-blur-xl p-8 md:p-10 rounded-3xl
                border border-white/60 shadow-xl shadow-slate-200/50
                hover:shadow-2xl hover:shadow-emerald-100/50
                transition-shadow duration-500
              "
            >
              {/* Success toast */}
              {submitted && (
                <div
                  className="
                    absolute -top-4 left-1/2 -translate-x-1/2 z-20
                    px-6 py-3 rounded-2xl
                    bg-linear-to-r from-emerald-600 to-emerald-700
                    text-white text-sm font-bold
                    shadow-xl shadow-emerald-600/30
                    animate-[fadeInUp_300ms_ease-out]
                    flex items-center gap-2
                  "
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2.5}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  Message sent successfully!
                </div>
              )}

              <div className="space-y-6">
                {FORM_FIELDS.map((field) => (
                  <div key={field.name}>
                    <label htmlFor={field.name} className="sr-only">
                      {field.placeholder}
                    </label>
                    <div className="relative group">
                      <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                        <span className="text-xl transition-colors duration-300">
                          {field.icon}
                        </span>
                      </div>
                      <input
                        id={field.name}
                        name={field.name}
                        type={field.type}
                        placeholder={field.placeholder}
                        required={field.required}
                        value={formData[field.name]}
                        onChange={handleChange}
                        onFocus={() => setFocusedField(field.name)}
                        onBlur={() => setFocusedField(null)}
                        className={`
                          w-full pl-14 pr-5 py-4 rounded-2xl text-base font-medium text-slate-800
                          bg-linear-to-br from-slate-50 to-slate-100/80
                          border-2 border-slate-200/80
                          placeholder:text-slate-400 placeholder:font-normal
                          focus:outline-none focus:border-emerald-500
                          focus:bg-white focus:shadow-lg focus:shadow-emerald-500/20
                          transition-all duration-300
                          ${focusedField === field.name ? "ring-2 ring-emerald-500/20" : ""}
                        `}
                      />
                    </div>
                  </div>
                ))}

                <div>
                  <label htmlFor="message" className="sr-only">
                    Your Message
                  </label>
                  <div className="relative group">
                    <div className="absolute top-5 left-5 pointer-events-none">
                      <span className="text-xl">💬</span>
                    </div>
                    <textarea
                      id="message"
                      name="message"
                      placeholder="Your Message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("message")}
                      onBlur={() => setFocusedField(null)}
                      className={`
                        w-full pl-14 pr-5 pt-5 pb-4 rounded-2xl text-base font-medium text-slate-800
                        bg-linear-to-br from-slate-50 to-slate-100/80
                        border-2 border-slate-200/80
                        placeholder:text-slate-400 placeholder:font-normal
                        focus:outline-none focus:border-emerald-500
                        focus:bg-white focus:shadow-lg focus:shadow-emerald-500/20
                        transition-all duration-300 resize-y min-h-36
                        ${focusedField === "message" ? "ring-2 ring-emerald-500/20" : ""}
                      `}
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="
                    group w-full relative inline-flex items-center justify-center gap-3
                    px-8 py-5 rounded-2xl text-base font-bold
                    bg-linear-to-r from-emerald-600 to-emerald-700
                    text-white shadow-xl shadow-emerald-600/30
                    hover:shadow-2xl hover:shadow-emerald-600/40
                    hover:-translate-y-1
                    active:translate-y-0
                    transition-all duration-300
                    overflow-hidden
                  "
                >
                  <span className="absolute inset-0 bg-linear-to-r from-emerald-500 to-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative flex items-center gap-3">
                    Send Message
                    <svg
                      className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2.5}
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                      />
                    </svg>
                  </span>
                </button>

                {/* Privacy note */}
                <p className="text-center text-xs text-slate-500 mt-4">
                  By submitting this form, you agree to our{" "}
                  <a
                    href="#"
                    className="text-emerald-600 hover:text-emerald-700 font-medium underline"
                  >
                    Privacy Policy
                  </a>{" "}
                  and{" "}
                  <a
                    href="#"
                    className="text-emerald-600 hover:text-emerald-700 font-medium underline"
                  >
                    Terms of Service
                  </a>
                </p>
              </div>
            </form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
