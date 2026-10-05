import { motion } from "framer-motion";
import { FaYoutube } from "react-icons/fa";

// ---------------------------------------------------------------------------
// YouTube videos shown on the site.
//
// By default this embeds the channel's "all uploads" playlist, so the newest
// videos/streams appear automatically with no code changes. The uploads
// playlist ID is the Channel ID with the "UC" prefix changed to "UU".
//   Channel ID:        UCVfSpgLuX9rxFPqRhN6jR7g
//   Uploads playlist:  UUVfSpgLuX9rxFPqRhN6jR7g
//
// To feature a specific CURATED playlist instead (e.g. "Sermons"), set
// FEATURED_PLAYLIST_ID to that playlist's "list=" value.
//
// To feature specific individual videos instead, set USE_PLAYLIST to false and
// fill in `videos` with YouTube video IDs (the part after "watch?v=").
// ---------------------------------------------------------------------------
const FEATURED_PLAYLIST_ID = "UUVfSpgLuX9rxFPqRhN6jR7g"; // channel uploads
const USE_PLAYLIST = true;

const videos = [
  // { id: "VIDEO_ID", title: "Sunday Service" },
];

const CHANNEL_URL = "https://www.youtube.com/@kenostabernacle2004";

export default function Media() {
  return (
    <section id="media" className="relative py-24 bg-surface-dark overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent" />
      <div className="absolute bottom-20 left-0 w-72 h-72 bg-gold/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-gold text-xs tracking-[0.3em] uppercase font-medium">
            Watch & Listen
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary mt-4">
            Our <span className="text-gradient-dark">Videos</span>
          </h2>
          <p className="text-primary/50 text-sm font-light mt-4 max-w-xl mx-auto">
            Watch our services and messages right here. For the full library,
            visit our YouTube channel.
          </p>
        </motion.div>

        {USE_PLAYLIST && FEATURED_PLAYLIST_ID ? (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto rounded-2xl overflow-hidden card-shadow border border-primary/5 bg-black aspect-video"
          >
            <iframe
              className="w-full h-full"
              src={`https://www.youtube-nocookie.com/embed/videoseries?list=${FEATURED_PLAYLIST_ID}`}
              title="Kenos Tabernacle videos"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {videos.map((video, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-2xl overflow-hidden card-shadow border border-primary/5 bg-white"
              >
                <div className="aspect-video bg-black">
                  <iframe
                    className="w-full h-full"
                    src={`https://www.youtube-nocookie.com/embed/${video.id}`}
                    title={video.title}
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <div className="p-5">
                  <h4 className="text-primary font-semibold text-sm">{video.title}</h4>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href={CHANNEL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 border border-primary/20 text-primary rounded-full hover:border-gold hover:text-gold transition-all hover:scale-105 text-sm uppercase tracking-wide font-medium"
          >
            <FaYoutube className="text-lg text-red-600" />
            Visit Our YouTube Channel
          </a>
        </motion.div>
      </div>
    </section>
  );
}
