import { motion } from "framer-motion";
import { moygaQuotes } from "../data/content";

export default function MOYGA() {
  return (
    <section id="moyga" className="relative py-24 bg-navy overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/15 to-transparent" />
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-gold/5 rounded-full blur-3xl" />

      <div className="max-w-5xl mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-gold/70 text-xs tracking-[0.3em] uppercase font-medium">
            Youth Ministry
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mt-4">
            <span className="text-gradient">MOYGA</span>
          </h2>
          <p className="text-white/40 mt-3 text-sm tracking-wide">
            Make Our Youth Great Again
          </p>
        </motion.div>

        {/* Intro quote */}
        <motion.blockquote
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto glass rounded-2xl p-8 mb-14 relative"
        >
          <p className="italic text-white/60 leading-relaxed font-light text-sm mt-2">
            &ldquo;I wonder if you have the courage, tonight, to meet me here at
            the altar... To see these young women coming, weeping, life before
            them! They&rsquo;re at the crossroads. Do you realize that your daughter
            has ten times the temptation you had when you was a girl?&rdquo;
          </p>
          <div className="flex items-center gap-3 mt-4">
            <cite className="text-gold/70 text-xs not-italic font-medium">
              Rev. William Marrion Branham, &ldquo;A Blushing Prophet&rdquo;
            </cite>
          </div>
        </motion.blockquote>

        {/* Mission & Description */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass rounded-2xl p-8"
          >
            <h3 className="text-gold font-semibold text-sm uppercase tracking-wide mb-4">
              Our Mission
            </h3>
            <p className="text-white/55 text-sm leading-relaxed font-light">
              Recognizing the unprecedented challenges confronting our youth
              today, we must equip and train them in the faith through the Word
              of this hour, guiding them into a personal, living relationship
              with the Lord Jesus Christ. Only through His strength can they
              break free from the overwhelming temptations of this generation.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="glass rounded-2xl p-8"
          >
            <h3 className="text-gold font-semibold text-sm uppercase tracking-wide mb-4">
              What is MOYGA?
            </h3>
            <p className="text-white/55 text-sm leading-relaxed font-light">
              MOYGA is a youth-oriented movement within Kenos Tabernacle Ministry
              designed to provide strong foundations through Word-based principles
              and the Message of this hour. Through carefully designed teachings,
              we equip young people to thrive spiritually and as men and women of
              valor in society.
            </p>
          </motion.div>
        </div>

        {/* Quote cards */}
        <div className="mb-14">
          <h3 className="text-center text-white/40 text-xs tracking-[0.3em] uppercase font-medium mb-8">
            Words of Encouragement
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {moygaQuotes.map((quote, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                whileHover={{ y: -3 }}
                className="glass rounded-2xl p-6 group hover:border-gold/25 transition-all duration-500 relative overflow-hidden"
              >
                <div className="absolute -top-12 -right-12 w-24 h-24 bg-gold/0 group-hover:bg-gold/5 rounded-full blur-2xl transition-all duration-700" />
                <div className="relative">
                  <div className="w-6 h-6 rounded bg-gold/10 flex items-center justify-center mb-4">
                    <span className="text-gold text-xs font-heading font-bold">&ldquo;</span>
                  </div>
                  <p className="italic text-white/60 leading-relaxed text-sm font-light">
                    {quote.text}
                  </p>
                  <div className="flex items-center gap-2 mt-4 pt-3 border-t border-white/5">
                    <cite className="text-gold/70 text-[11px] not-italic font-medium">
                      {quote.source}
                    </cite>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center glass rounded-2xl p-10"
        >
          <p className="text-white/60 leading-relaxed font-light max-w-xl mx-auto">
            Join us at MOYGA and be part of a community that believes in your
            potential, values your voice, and supports your dreams. Together, we
            can <span className="text-gold font-medium">Make Our Youth Great Again!</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
