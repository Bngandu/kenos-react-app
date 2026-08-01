import { motion } from "framer-motion";
import { leaders } from "../data/content";

export default function About() {
  return (
    <section id="about" className="relative py-24 bg-cream overflow-hidden">
      <div className="absolute top-0 left-0 w-80 h-80 bg-gold/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-gold text-xs tracking-[0.3em] uppercase font-medium">
            Our Story
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary mt-4">
            About <span className="text-gradient-dark">Us</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Text content - 3 cols */}
          <div className="lg:col-span-3 space-y-6">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-primary/65 leading-relaxed text-base font-light"
            >
              Kenos Tabernacle Assembly was established by Apostle David
              Muzinga, who has tirelessly served as shepherd since 2004 by the
              grace of Almighty God. After acquiring its current location, the
              building was dedicated to the Lord for service in 2017.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-primary/65 leading-relaxed text-base font-light"
            >
              From this ministry, various ministers have emerged, including
              Brother Billy Ngandu, who currently serves as Pastor. Meanwhile,
              Apostle David is focused on outreach missions through Kenos
              International Outreach Field Mission (KIOFM).
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl p-6 mt-8 card-shadow border border-primary/5"
            >
              <h3 className="text-gold font-semibold text-sm uppercase tracking-wide mb-3">
                Our Vision
              </h3>
              <p className="text-primary/60 leading-relaxed text-sm font-light">
                To spread the revelation of Jesus Christ, illuminated by the
                message of the hour preached by Brother William Marion Branham,
                whom we believe to be the promised prophet Elijah as prophesied
                in Malachi 4:5-6. We are committed to sharing this message and
                fostering spiritual growth within our community and beyond.
              </p>
            </motion.div>

            <motion.blockquote
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="relative pl-6 mt-8"
            >
              <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-gold via-gold/50 to-transparent" />
              <p className="italic text-primary/55 leading-relaxed font-light text-sm">
                &ldquo;Christ never sent me to build organization. Christ sent me to
                build individuals to the stature of Jesus Christ, that they
                might be the powerhouse and the dwelling place of the Spirit, by
                His Word.&rdquo;
              </p>
              <cite className="block mt-3 text-gold text-xs not-italic font-medium">
                — Rev. William Marrion Branham
              </cite>
            </motion.blockquote>
          </div>

          {/* Leadership - 2 cols */}
          <div className="lg:col-span-2">
            <h3 className="text-primary/40 text-xs tracking-[0.3em] uppercase font-medium mb-8">
              Leadership
            </h3>
            <div className="space-y-5">
              {leaders.map((leader, i) => (
                <motion.div
                  key={leader.name}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="bg-white rounded-2xl p-6 group card-shadow hover:shadow-lg transition-all duration-500 border border-primary/5"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/10 transition-colors">
                      <span className="text-gold font-heading font-bold text-sm">
                        {leader.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <h4 className="text-primary font-semibold text-sm">
                        {leader.name}
                      </h4>
                      <p className="text-gold text-xs italic mb-3">
                        {leader.title}
                      </p>
                      <p className="text-primary/50 text-xs leading-relaxed font-light">
                        {leader.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-14"
        >
          <a
            href="#history"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#history")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center gap-2 px-8 py-3.5 border border-gold text-gold rounded-full hover:bg-gold hover:text-white transition-all duration-300 text-sm font-medium tracking-wide uppercase"
          >
            Read Our History
          </a>
        </motion.div>
      </div>
    </section>
  );
}
