import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";

const socials = [
  { icon: FaFacebookF, href: "https://www.facebook.com/kenos.tabernacle.9", label: "Facebook" },
  { icon: FaInstagram, href: "https://www.instagram.com/kenos2004/", label: "Instagram" },
  { icon: FaYoutube, href: "https://www.youtube.com/@kenostabernacle2004", label: "YouTube" },
];

export default function Contact() {
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
            <a
              href="mailto:kenostabernacle2004@gmail.com"
              className="text-gold hover:text-secondary-dark transition-colors text-sm break-all font-light"
            >
              kenostabernacle2004@gmail.com
            </a>
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
