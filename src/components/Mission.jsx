import { motion } from "framer-motion";
import { missionQuotes } from "../data/content";

export default function Mission() {
  return (
    <section className="relative py-24 bg-navy overflow-hidden">
      <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '50px 50px' }} />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/15 to-transparent" />

      <div className="max-w-5xl mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-gold/70 text-xs tracking-[0.3em] uppercase font-medium">
            Purpose
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
            Our Divine <span className="text-gradient">Mission</span>
          </h2>
          <div className="w-16 h-[2px] bg-gold/50 mx-auto mb-8" />
          <p className="text-white/60 text-lg leading-relaxed max-w-3xl mx-auto font-light">
            As Paul declared, I was not disobedient to the heavenly vision. Kenos
            Tabernacle is a divine ministry, called by God to serve as a faithful
            auxiliary in support of the End Time Message preached by His chosen
            prophet, our beloved brother William Marion Branham.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {missionQuotes.map((quote, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              whileHover={{ y: -4 }}
              className="glass rounded-2xl p-8 group hover:border-gold/30 transition-all duration-500 relative overflow-hidden"
            >
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-gold/0 group-hover:bg-gold/5 rounded-full blur-3xl transition-all duration-700" />
              <div className="relative">
                <div className="w-8 h-8 rounded-lg bg-gold/10 flex items-center justify-center mb-5">
                  <span className="text-gold text-lg font-heading">&ldquo;</span>
                </div>
                <p className="italic text-white/70 leading-relaxed font-light text-sm">
                  {quote.text}
                </p>
                <div className="flex items-center gap-3 mt-6 pt-4 border-t border-white/5">
                  <cite className="text-gold/80 text-xs not-italic font-medium">
                    {quote.source}
                  </cite>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
