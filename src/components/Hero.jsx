import { motion } from "framer-motion";
import { FaChevronDown, FaPlay } from "react-icons/fa";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=1600")',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-dark/80 via-primary/70 to-dark/95" />
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-gold/3 rounded-full blur-3xl" />
      <div className="absolute top-20 right-20 w-px h-40 bg-gradient-to-b from-transparent via-gold/30 to-transparent hidden lg:block" />
      <div className="absolute bottom-40 left-20 w-px h-32 bg-gradient-to-b from-transparent via-gold/20 to-transparent hidden lg:block" />

      {/* Content */}
      <div className="relative z-10 text-center max-w-5xl px-6 py-12">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold mb-2 tracking-tight leading-[0.9]"
        >
          <span className="text-white">Kenos</span>
          <br />
          <span className="text-gradient">Tabernacle</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-white tracking-tight mb-2"
        >
          Ministry New Horizon
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/30 bg-gold/5 mb-12"
        >
          <span className="text-gold/90 text-xs tracking-[0.2em] uppercase font-medium">
            REGISTRATION NUMBER 120 - 477 NPO
          </span>
        </motion.div>

        {/* Quote */}
        <motion.blockquote
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="glass rounded-2xl p-8 md:p-10 max-w-3xl mx-auto mb-12 text-left glow-gold"
        >
          <p className="text-white/80 text-base md:text-lg leading-relaxed font-light italic">
            &ldquo;But, in the evening time, &lsquo;It shall be Light,&rsquo; He said,
            &lsquo;in the evening time.&rsquo; And no Scripture can be broken. And the
            same S-o-n that poured out Himself, kenosis, on the Day of
            Pentecost, promised to do the same thing in the evening time.&rdquo;
          </p>
          <div className="flex items-center gap-3 mt-6">
            <cite className="text-gold text-sm not-italic font-medium tracking-wide">
              Rev. William Marrion Branham
            </cite>
          </div>
        </motion.blockquote>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="group px-8 py-4 bg-gold text-dark font-bold rounded-full hover:bg-secondary-light transition-all hover:scale-105 tracking-wide text-sm uppercase"
          >
            Discover More
          </a>
          <a
            href="https://www.youtube.com/@kenostabernacle2004"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center gap-3 px-8 py-4 border border-white/20 text-white rounded-full hover:border-gold hover:text-gold transition-all hover:scale-105 text-sm uppercase tracking-wide"
          >
            <FaPlay className="text-xs" />
            Watch Services
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
        className="absolute bottom-1 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer z-20"
        onClick={() => document.querySelector("#welcome")?.scrollIntoView({ behavior: "smooth" })}
      >
        <span className="text-white/30 text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        <FaChevronDown className="text-gold/60 text-sm" />
      </motion.div>
    </section>
  );
}
