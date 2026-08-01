import { motion } from "framer-motion";
import { timelineEvents } from "../data/content";

export default function Timeline() {
  return (
    <section id="history" className="relative py-24 bg-navy overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/15 to-transparent" />
      <div className="absolute bottom-20 right-0 w-60 h-60 bg-gold/5 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <span className="text-gold/70 text-xs tracking-[0.3em] uppercase font-medium">
            Heritage
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mt-4">
            Our <span className="text-gradient">History</span>
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-white/50 max-w-2xl mx-auto mb-4 font-light"
        >
          Kenos Tabernacle is part of the history of beginnings, firstborns,
          pioneers, and scouts — a testament to faith, courage, and visionary
          spirit.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-gold/70 italic text-sm mb-16 font-heading"
        >
          &ldquo;A small people with a great God&rdquo;
        </motion.p>

        {/* Timeline */}
        <div className="relative">
          {/* Center line */}
          <div className="absolute left-[18px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-gold/40 via-gold/20 to-transparent md:-translate-x-px" />

          <div className="space-y-8 md:space-y-12">
            {timelineEvents.map((event, i) => (
              <motion.div
                key={event.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className={`relative flex flex-col md:flex-row ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Marker */}
                <div className="absolute left-[18px] md:left-1/2 md:-translate-x-1/2 top-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-gold shadow-[0_0_12px_rgba(212,175,55,0.5)]" />
                </div>

                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-[calc(50%-2.5rem)] ${i % 2 === 0 ? "md:pr-0 md:mr-auto" : "md:pl-0 md:ml-auto"}`}>
                  <div className="glass rounded-2xl p-6 group hover:border-gold/30 transition-all duration-500">
                    <span className="inline-block px-3 py-1 rounded-full bg-gold/10 text-gold text-xs font-semibold tracking-wide mb-3">
                      {event.year}
                    </span>
                    <h3 className="text-white font-semibold text-lg mb-3 font-heading">
                      {event.title}
                    </h3>
                    <p className="text-white/50 text-sm leading-relaxed font-light">
                      {event.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
