import { motion } from "framer-motion";
import { FaChurch, FaBookOpen, FaPray } from "react-icons/fa";
import { serviceTimes } from "../data/content";

const iconMap = {
  FaChurch: FaChurch,
  FaBookOpen: FaBookOpen,
  FaPray: FaPray,
};

export default function Welcome() {
  return (
    <section id="welcome" className="relative py-24 bg-cream overflow-hidden">
      {/* Subtle decorative */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent" />
      <div className="absolute top-20 right-0 w-72 h-72 bg-secondary/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-6 relative">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span className="text-gold text-xs tracking-[0.3em] uppercase font-medium">
            Welcome
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary mt-4 mb-6">
            Shalom &amp; Welcome to the
            <br />
            <span className="text-gradient-dark">KTM Community</span>
          </h2>
          <div className="w-16 h-[2px] bg-gold mx-auto mb-6" />
          <p className="text-primary/60 text-lg leading-relaxed max-w-2xl mx-auto font-light">
            We are delighted to have you join us today. May you find peace,
            love, and support as we come together to worship and grow in faith
            under the revelation of the message of the hour.
          </p>
        </motion.div>

        {/* Service Times */}
        <div className="mb-20">
          <h3 className="text-center text-primary/40 text-xs tracking-[0.3em] uppercase font-medium mb-10">
            Service Times
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {serviceTimes.map((service, i) => {
              const Icon = iconMap[service.icon];
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.6 }}
                  whileHover={{ y: -6, scale: 1.02 }}
                  className="bg-white rounded-2xl p-8 text-center group cursor-default card-shadow hover:shadow-lg transition-all duration-300 border border-primary/5"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/5 flex items-center justify-center mx-auto mb-5 group-hover:bg-gold/10 transition-colors">
                    <Icon className="text-2xl text-gold" />
                  </div>
                  <h4 className="text-primary font-semibold text-lg mb-2">
                    {service.title}
                  </h4>
                  <p className="text-gold font-medium text-sm tracking-wide">
                    {service.time}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Quote */}
        <motion.blockquote
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto bg-white rounded-2xl p-8 md:p-10 relative card-shadow border border-primary/5"
        >
          <div className="absolute top-0 left-8 w-12 h-[2px] bg-gold" />
          <p className="italic text-primary/70 leading-relaxed text-base font-light mt-2">
            &ldquo;In the beginning when man used to walk in the early age with God
            in the garden of Eden, when the first man was created in the great
            cathedrals, under the palms, he and his wife, when the cool of the
            evening come along, they come out and worshipped God, had a perfect
            fellowship. God longs for fellowship. He yearns, He wants people to
            speak with Him, to talk with Him. You might do one&hellip;You might sing
            too much, or you might preach too much, sometime, but there&rsquo;s one
            thing you&rsquo;ll never be able to overdo, that&rsquo;s pray.&rdquo;
          </p>
          <div className="flex items-center gap-3 mt-6">
            <cite className="text-gold text-xs not-italic font-medium tracking-wide uppercase">
              56-0120 &mdash; &ldquo;Fellowship With God Through Reconciliation&rdquo;
            </cite>
          </div>
        </motion.blockquote>
      </div>
    </section>
  );
}
