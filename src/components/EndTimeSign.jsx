import { motion } from "framer-motion";

export default function EndTimeSign() {
  return (
    <section className="relative py-28 overflow-hidden">
      {/* Rich gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-surface to-dark" />
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200')] bg-cover bg-center opacity-[0.03]" />
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gold/5 rounded-full blur-3xl" />
      
      {/* Corner accents */}
      <div className="absolute top-8 left-8 w-16 h-16 border-t border-l border-gold/20 rounded-tl-lg hidden md:block" />
      <div className="absolute bottom-8 right-8 w-16 h-16 border-b border-r border-gold/20 rounded-br-lg hidden md:block" />

      <div className="max-w-4xl mx-auto px-6 relative text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <span className="text-gold/60 text-xs tracking-[0.3em] uppercase font-medium">
            Prophecy
          </span>
          <h2 className="font-heading text-4xl md:text-6xl font-bold text-white mt-4">
            The End-Time <span className="text-gradient">Sign</span>
          </h2>
        </motion.div>

        <motion.blockquote
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass rounded-3xl p-10 md:p-14 glow-gold relative"
        >
          <div className="absolute top-6 left-1/2 -translate-x-1/2 w-12 h-[2px] bg-gold/60" />
          
          <p className="italic text-white/80 text-lg md:text-xl leading-relaxed font-light mt-4">
            &ldquo;And I believe that these latter-day signs and things that&rsquo;s
            happening, every one of them is peeling together to show that Christ
            is ready to come for this Bride. As God in His Word made manifest in
            a Man, a perfect Man, so is God and His Word coming again, and
            making Himself manifested in a Bride. Not will do like Eve did,
            hybreed It to something else, but the unadulterated Word of God will
            be borned into that Church, and She will stand like Jesus Christ
            did, with His Spirit anointing in His Word. Amen. I believe it&rsquo;s
            the announcement now.&rdquo;
          </p>
          
          <div className="flex items-center justify-center gap-3 mt-8">
            <cite className="text-gold text-sm not-italic font-semibold tracking-wide">
              Rev. William Marrion Branham
            </cite>
          </div>
          <p className="text-white/30 text-xs mt-2 italic">
            &ldquo;The End-Time Sign Seed&rdquo;
          </p>
        </motion.blockquote>
      </div>
    </section>
  );
}
