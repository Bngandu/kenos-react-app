import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
  FaPaperPlane,
} from "react-icons/fa";

// Web3Forms access key. Get a free key at https://web3forms.com
// (delivered to info@ktmnewhorizon.co.za). The key is safe to be public.
const WEB3FORMS_ACCESS_KEY = "948bf9cc-f7eb-4b6b-9235-7dea2bdda2e6";

const socials = [
  { icon: FaFacebookF, href: "https://www.facebook.com/kenos.tabernacle.9", label: "Facebook" },
  { icon: FaInstagram, href: "https://www.instagram.com/kenos2004/", label: "Instagram" },
  { icon: FaYoutube, href: "https://www.youtube.com/@kenostabernacle2004", label: "YouTube" },
];

export default function Contact() {
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    const form = e.target;
    const formData = new FormData(form);
    formData.append("access_key", WEB3FORMS_ACCESS_KEY);
    formData.append("subject", "New message from KTM website contact form");
    formData.append("from_name", "KTM New Horizon Website");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
        setErrorMsg(data.message || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setErrorMsg("Network error. Please check your connection and try again.");
    }
  };

  return (
    <section id="contact" className="relative py-24 bg-cream overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent" />
      <div className="absolute top-40 right-0 w-72 h-72 bg-gold/5 rounded-full blur-3xl" />

      <div className="max-w-5xl mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-gold text-xs tracking-[0.3em] uppercase font-medium">
            Get in Touch
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary mt-4">
            Contact <span className="text-gradient-dark">Us</span>
          </h2>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-7 md:p-10 mb-10 card-shadow border border-primary/5"
        >
          <h3 className="font-heading text-2xl font-bold text-primary mb-2">
            Send Us a Message
          </h3>
          <p className="text-primary/50 text-sm font-light mb-7">
            Have a question or a comment? We would love to hear from you.
          </p>

          {status === "success" ? (
            <div className="flex flex-col items-center text-center py-10">
              <div className="w-14 h-14 rounded-full bg-green-50 flex items-center justify-center mb-4">
                <FaPaperPlane className="text-green-500 text-xl" />
              </div>
              <h4 className="text-primary font-semibold mb-1">Thank you!</h4>
              <p className="text-primary/50 text-sm font-light">
                Your message has been sent. We will get back to you soon.
              </p>
              <button
                type="button"
                onClick={() => setStatus("idle")}
                className="mt-6 text-gold text-sm font-medium hover:text-secondary-dark transition-colors"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Honeypot anti-spam field (hidden from users) */}
              <input
                type="checkbox"
                name="botcheck"
                className="hidden"
                style={{ display: "none" }}
                tabIndex={-1}
                autoComplete="off"
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-primary/70 text-xs font-medium mb-2 tracking-wide uppercase">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    required
                    placeholder="Your name"
                    className="w-full px-4 py-3 rounded-xl bg-cream border border-primary/10 text-primary text-sm placeholder:text-primary/30 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-primary/70 text-xs font-medium mb-2 tracking-wide uppercase">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    required
                    placeholder="you@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-cream border border-primary/10 text-primary text-sm placeholder:text-primary/30 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-primary/70 text-xs font-medium mb-2 tracking-wide uppercase">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Write your comment or question here..."
                  className="w-full px-4 py-3 rounded-xl bg-cream border border-primary/10 text-primary text-sm placeholder:text-primary/30 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors resize-y"
                />
              </div>

              {status === "error" && (
                <p className="text-red-500 text-sm font-light">{errorMsg}</p>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-gold text-dark font-bold rounded-full hover:bg-secondary-light transition-all hover:scale-105 tracking-wide text-sm uppercase disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {status === "sending" ? (
                  "Sending..."
                ) : (
                  <>
                    <FaPaperPlane className="text-xs" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          )}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          {/* Address */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-7 group card-shadow hover:shadow-lg transition-all duration-500 border border-primary/5"
          >
            <div className="w-11 h-11 rounded-xl bg-primary/5 flex items-center justify-center mb-5 group-hover:bg-gold/10 transition-colors">
              <FaMapMarkerAlt className="text-gold text-lg" />
            </div>
            <h4 className="text-primary font-semibold text-sm mb-3">Church Address</h4>
            <p className="text-primary/50 text-sm leading-relaxed font-light">
              120 King Edward Street
              <br />
              Parow, WC, Cape Town
              <br />
              Postal Code: 7500
            </p>
          </motion.div>

          {/* Phone */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-2xl p-7 group card-shadow hover:shadow-lg transition-all duration-500 border border-primary/5"
          >
            <div className="w-11 h-11 rounded-xl bg-primary/5 flex items-center justify-center mb-5 group-hover:bg-gold/10 transition-colors">
              <FaPhone className="text-gold text-lg" />
            </div>
            <h4 className="text-primary font-semibold text-sm mb-3">Phone</h4>
            <div className="space-y-3 text-sm">
              <p className="text-primary/50 font-light">
                <span className="text-primary/70">Apl. David Muzinga</span>
                <br />
                <a href="tel:+27725815076" className="text-gold hover:text-secondary-dark transition-colors">
                  +27 72-581-5076
                </a>
                <a
                  href="https://wa.me/27725815076"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex ml-2 text-green-600/70 hover:text-green-600 transition-colors"
                >
                  <FaWhatsapp className="text-base" />
                </a>
              </p>
              <p className="text-primary/50 font-light">
                <span className="text-primary/70">Past. Billy Ngandu</span>
                <br />
                <a href="tel:+27783336776" className="text-gold hover:text-secondary-dark transition-colors">
                  +27 78-333-6776
                </a>
                <a
                  href="https://wa.me/27783336776"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex ml-2 text-green-600/70 hover:text-green-600 transition-colors"
                >
                  <FaWhatsapp className="text-base" />
                </a>
              </p>
            </div>
          </motion.div>

          {/* Email */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-2xl p-7 group card-shadow hover:shadow-lg transition-all duration-500 border border-primary/5"
          >
            <div className="w-11 h-11 rounded-xl bg-primary/5 flex items-center justify-center mb-5 group-hover:bg-gold/10 transition-colors">
              <FaEnvelope className="text-gold text-lg" />
            </div>
            <h4 className="text-primary font-semibold text-sm mb-3">Email</h4>
            <div className="space-y-2">
              <a
                href="mailto:info@ktmnewhorizon.co.za"
                className="block text-gold hover:text-secondary-dark transition-colors text-sm break-all font-light"
              >
                info@ktmnewhorizon.co.za
              </a>
              <a
                href="mailto:kenostabernacle2004@gmail.com"
                className="block text-primary/50 hover:text-gold transition-colors text-sm break-all font-light"
              >
                kenostabernacle2004@gmail.com
              </a>
            </div>
          </motion.div>
        </div>

        {/* Social Links + Map */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 text-center card-shadow border border-primary/5"
          >
            <h3 className="text-primary/40 text-xs tracking-[0.3em] uppercase font-medium mb-6">
              Connect With Us
            </h3>
            <div className="flex gap-4 justify-center">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-12 h-12 rounded-xl bg-primary/5 text-primary flex items-center justify-center text-lg hover:bg-gold hover:text-white hover:-translate-y-1 transition-all duration-300"
                >
                  <social.icon />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.a
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            href="https://www.google.com/maps/search/?api=1&query=120+King+Edward+Street+Parow+Cape+Town"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-2xl p-8 text-center group card-shadow hover:shadow-lg transition-all duration-500 block border border-primary/5"
          >
            <div className="text-4xl mb-3">📍</div>
            <p className="text-primary font-semibold text-sm group-hover:text-gold transition-colors">
              View on Google Maps
            </p>
            <p className="text-primary/40 text-xs mt-1 font-light">
              120 King Edward Street, Parow, Cape Town
            </p>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
