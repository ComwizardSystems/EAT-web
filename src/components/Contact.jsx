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
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
        <path d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
    link: null,
  },
  {
    title: "Email",
    content: null,
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
        <path d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
    emails: ["eat@eastasiatrading.com", "eat@vsnl.com"],
    link: null,
  },
  {
    title: "Phone",
    content: "+91-22-2264 1122",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
        <path d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
    link: "tel:+91-22-22641122",
  },
];

const FORM_FIELDS = [
  { name: "name", type: "text", placeholder: "Your Name", required: true },
  { name: "email", type: "email", placeholder: "Your Email", required: true },
  {
    name: "subject",
    type: "text",
    placeholder: "Subject",
    required: true,
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
    <section id="contact" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeader
          title="Let's Grow Together"
          subtitle="Get In Touch With Us"
          description="Whether you are an importer seeking quality products from India or a business looking for a reliable sourcing partner, East Asia Group of Companies is here to support your growth."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact info */}
          <AnimatedSection animation="fade-right" delay={100}>
            <div className="space-y-8">
              {CONTACT_INFO.map((item) => (
                <div key={item.title} className="group flex gap-5 items-start">
                  <div
                    className="
                      flex items-center justify-center shrink-0 w-14 h-14
                      rounded-2xl bg-emerald-50 text-emerald-700
                      group-hover:bg-emerald-700 group-hover:text-white
                      transition-colors duration-300
                    "
                  >
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-slate-800 mb-1">
                      {item.title}
                    </h4>
                    {item.emails ? (
                      <div className="space-y-1">
                        {item.emails.map((email) => (
                          <a
                            key={email}
                            href={`mailto:${email}`}
                            className="
                              block text-base text-slate-600
                              hover:text-emerald-700 hover:underline
                              transition-colors duration-200
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
                          hover:text-emerald-700 hover:underline
                          transition-colors duration-200
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
                </div>
              ))}

              {/* Decorative CTA box */}
              <div
                className="
                  mt-10 p-6 rounded-2xl
                  bg-linear-to-br from-emerald-50 to-emerald-100/60
                  border border-emerald-200/60
                "
              >
                <h4 className="text-lg font-bold text-emerald-800 mb-2">
                  Ready to get started?
                </h4>
                <p className="text-sm text-emerald-700 leading-relaxed">
                  Fill out the form and our team will get back to you within 24
                  hours with a tailored solution for your business needs.
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Contact form */}
          <AnimatedSection animation="fade-left" delay={200}>
            <form
              onSubmit={handleSubmit}
              className="
                relative bg-white p-8 md:p-10 rounded-2xl
                border border-slate-200/80 shadow-sm
                hover:shadow-lg transition-shadow duration-300
              "
            >
              {/* Success toast */}
              {submitted && (
                <div
                  className="
                    absolute -top-4 left-1/2 -translate-x-1/2 z-10
                    px-6 py-2.5 rounded-full
                    bg-emerald-700 text-white text-sm font-semibold
                    shadow-lg shadow-emerald-700/25
                    animate-[fadeInUp_300ms_ease-out]
                  "
                >
                  ✓ Message sent successfully!
                </div>
              )}

              <div className="space-y-5">
                {FORM_FIELDS.map((field) => (
                  <div key={field.name}>
                    <label htmlFor={field.name} className="sr-only">
                      {field.placeholder}
                    </label>
                    <input
                      id={field.name}
                      name={field.name}
                      type={field.type}
                      placeholder={field.placeholder}
                      required={field.required}
                      value={formData[field.name]}
                      onChange={handleChange}
                      className="
                        w-full px-5 py-3.5 rounded-xl text-base font-medium text-slate-800
                        bg-slate-50/80 border-2 border-slate-200/80
                        placeholder:text-slate-400 placeholder:font-normal
                        focus:outline-none focus:border-emerald-500 focus:bg-white
                        focus:ring-2 focus:ring-emerald-500/20
                        transition-all duration-200
                      "
                    />
                  </div>
                ))}

                <div>
                  <label htmlFor="message" className="sr-only">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Your Message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="
                      w-full px-5 py-3.5 rounded-xl text-base font-medium text-slate-800
                      bg-slate-50/80 border-2 border-slate-200/80
                      placeholder:text-slate-400 placeholder:font-normal
                      focus:outline-none focus:border-emerald-500 focus:bg-white
                      focus:ring-2 focus:ring-emerald-500/20
                      transition-all duration-200
                      resize-y min-h-30
                    "
                  />
                </div>

                <button
                  type="submit"
                  className="
                    group w-full inline-flex items-center justify-center gap-2
                    px-8 py-4 rounded-xl text-base font-semibold
                    bg-emerald-700 text-white
                    shadow-lg shadow-emerald-700/20
                    hover:bg-emerald-800 hover:shadow-xl hover:shadow-emerald-700/30
                    hover:-translate-y-0.5
                    active:translate-y-0
                    transition-all duration-300
                    focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600
                  "
                >
                  Send Message
                  <svg
                    className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
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
                </button>
              </div>
            </form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
