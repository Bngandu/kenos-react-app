import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import { motion } from "framer-motion";

const booksData = [
  {
    image: "/book1.jpg",
    title: "Hofmann's Head of Christ at 33",
    link: "#hofmann",
    external: false,
  },
  {
    image: "/book2.jpg",
    title: "Who is William Branham",
    link: "https://branham.org/en/williambranham",
    external: true,
  },
  {
    image: "/book3.jpg",
    title: "The Cloud",
    link: "https://branham.org/articles/20130228_TheCloud",
    external: true,
  },
];

// Triple to ensure smooth infinite looping with no gaps
const books = [...booksData, ...booksData, ...booksData];

export default function BooksCarousel() {
  return (
    <section className="relative py-24 bg-primary-dark overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/3 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-gold/60 text-xs tracking-[0.3em] uppercase font-medium">
            Library
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mt-4">
            Recommended <span className="text-gradient">Reading</span>
          </h2>
        </motion.div>

        <Swiper
          modules={[Autoplay, Navigation, EffectCoverflow]}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={3}
          loopAdditionalSlides={3}
          loop={true}
          speed={3000}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 150,
            modifier: 1.5,
            slideShadows: true,
          }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          navigation={true}
          className="overflow-hidden"
          onSwiper={(swiper) => {
            setTimeout(() => {
              swiper.autoplay.start();
            }, 100);
          }}
        >
          {books.map((book, index) => (
            <SwiperSlide key={`${book.title}-${index}`}>
              <a
                href={book.link}
                target={book.external ? "_blank" : undefined}
                rel={book.external ? "noopener noreferrer" : undefined}
                className="block group"
              >
                <div className="relative rounded-2xl overflow-hidden border border-gold/20 hover:border-gold/50 transition-all duration-500 hover:shadow-[0_0_60px_rgba(212,175,55,0.15)]">
                  <img
                    src={book.image}
                    alt={book.title}
                    className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-white font-semibold text-sm tracking-wide uppercase group-hover:text-gold transition-colors text-center">
                      {book.title}
                    </p>
                  </div>
                </div>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
