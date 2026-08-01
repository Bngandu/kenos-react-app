import { motion } from "framer-motion";
import { hofmannQuotes } from "../data/content";

export default function Hofmann() {
  return (
    <section id="hofmann" className="relative py-24 bg-cream overflow-hidden">
      <div className="absolute bottom-20 right-0 w-80 h-80 bg-gold/5 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-gold text-xs tracking-[0.3em] uppercase font-medium">
            Testimony
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary mt-4">
            Hofmann&rsquo;s <span className="text-gradient-dark">Painting</span>
          </h2>
          <p className="text-primary/40 mt-4 text-sm max-w-lg mx-auto">
            What Brother Branham spoke about Hofmann&rsquo;s Head of Christ at Thirty-Three
          </p>
        </motion.div>

        <div className="space-y-6">
          {hofmannQuotes.map((quote, i) => (
            <motion.blockquote
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.6 }}
              className="bg-white rounded-2xl p-8 relative group card-shadow hover:shadow-lg transition-all duration-500 border border-primary/5"
            >
              {/* Gold accent line */}
              <div className="absolute left-0 top-8 bottom-8 w-[2px] bg-gradient-to-b from-gold via-gold/50 to-transparent rounded-full" />

              <div className="pl-4">
                <p className="italic text-primary/65 leading-relaxed font-light">
                  &ldquo;{quote.text}&rdquo;
                </p>
                <div className="flex items-center gap-3 mt-5">
                  <div className="w-6 h-[1px] bg-gold" />
                  <cite className="text-gold text-xs not-italic font-medium tracking-wide uppercase">
                    {quote.source}
                  </cite>
                </div>
              </div>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
