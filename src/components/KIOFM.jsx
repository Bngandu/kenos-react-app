import { motion } from "framer-motion";
import { FaGlobeAfrica, FaUsers, FaHandHoldingHeart, FaHandsHelping } from "react-icons/fa";

const sections = [
  {
    icon: FaGlobeAfrica,
    title: "What is KIOFM?",
    text: "Kenos International Outreach Field Mission is the missionary branch of Kenos Tabernacle focusing on bringing the gospel to underprivileged parts of Africa and the world as per the Leading of the Lord and Commission in Matthew 28:19.",
  },
  {
    icon: FaHandHoldingHeart,
    title: "Purpose",
    text: "To spread the living word to the less fortunate by reaching remote areas in the Southern Africa region and other parts of the world. Our activities are based on preaching the full gospel, offering prayers, teaching and spiritual support to the needy.",
  },
  {
    icon: FaUsers,
    title: "The Team",
    text: "Led by Apostle David Muzinga-Midima as visionary and missionary, supported by the Chargé of Missions (contacts, planning, communications) and the Chargé of Mobilisation (resources, logistics, fund raising).",
  },
  {
    icon: FaHandsHelping,
    title: "Collaboration",
    text: "We collaborate with African Mission, Spoken Word, and The Voice of God Recording for materials. We also work with local pastors to support revivals and bring in new converts.",
  },
];

export default function KIOFM() {
  return (
    <section id="kiofm" className="relative py-24 bg-cream overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent" />
      <div className="absolute top-40 left-0 w-72 h-72 bg-gold/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-gold text-xs tracking-[0.3em] uppercase font-medium">
            Outreach
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-primary mt-4">
            Kenos International
            <br />
            <span className="text-gradient-dark">Outreach Field Mission</span>
          </h2>
        </motion.div>

        {/* Intro quote */}
        <motion.blockquote
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto bg-white rounded-2xl p-8 mb-16 relative card-shadow border border-primary/5"
        >
          <p className="italic text-primary/60 leading-relaxed font-light text-sm mt-2">
            &ldquo;We are at the end time. And that&rsquo;s where we are standing
            today, a universal revival. It&rsquo;s the sign of the coming of the
            Lord Jesus. He will come, and He cannot come until the Gospel&rsquo;s
            been preached into every nation.&rdquo;
          </p>
          <div className="flex items-center gap-3 mt-4">
            <cite className="text-gold text-xs not-italic font-medium">
              Rev. William Marrion Branham, &ldquo;The Time Is At Hand&rdquo;
            </cite>
          </div>
        </motion.blockquote>

        {/* Feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {sections.map((section, i) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -4 }}
              className="bg-white rounded-2xl p-7 group card-shadow hover:shadow-lg transition-all duration-500 border border-primary/5"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center mb-5 group-hover:bg-gold/10 transition-colors">
                <section.icon className="text-xl text-gold" />
              </div>
              <h3 className="text-primary font-semibold text-base mb-3">
                {section.title}
              </h3>
              <p className="text-primary/50 text-sm leading-relaxed font-light">
                {section.text}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Giving section */}
        <div id="giving">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 relative rounded-3xl overflow-hidden bg-gradient-to-r from-primary to-navy text-white"
        >
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '30px 30px' }} />
          <div className="relative p-10 md:p-14 text-center">
            <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-6">
              <FaHandHoldingHeart className="text-gold text-xl" />
            </div>
            <h3 className="font-heading text-2xl font-bold text-white mb-4">
              Support Our Mission
            </h3>
            <p className="text-white/60 leading-relaxed max-w-xl mx-auto font-light text-sm mb-6">
              To any person of good heart and willing to assist is welcome to
              participate for the advancement of the Kingdom by financially
              supporting and by praying for us.
            </p>
            <div className="inline-block glass rounded-xl px-8 py-6 text-left">
              <p className="text-gold font-semibold text-sm mb-4 text-center">Banking Details</p>
              <table className="text-sm">
                <tbody>
                  <tr>
                    <td className="text-white/50 pr-4 py-1 font-light">Bank</td>
                    <td className="text-white font-medium py-1">NEDBANK</td>
                  </tr>
                  <tr>
                    <td className="text-white/50 pr-4 py-1 font-light">Branch Code</td>
                    <td className="text-white font-medium py-1">198765</td>
                  </tr>
                  <tr>
                    <td className="text-white/50 pr-4 py-1 font-light">Account Number</td>
                    <td className="text-white font-medium py-1">1010151118</td>
                  </tr>
                  <tr>
                    <td className="text-white/50 pr-4 py-1 font-light">Account Type</td>
                    <td className="text-white font-medium py-1">SAVING</td>
                  </tr>
                  <tr>
                    <td className="text-white/50 pr-4 py-1 font-light">Account Owner</td>
                    <td className="text-white font-medium py-1">Daviz Muzinga Midima</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>
        </div>
      </div>
    </section>
  );
}
