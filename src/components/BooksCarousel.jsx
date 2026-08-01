import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

const books = [
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

export default function BooksCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);

  const startAutoSlide = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % books.length);
    }, 7000);
  };

  useEffect(() => {
    startAutoSlide();
    return () => clearInterval(intervalRef.current);
  }, []);

  const goNext = () => {
    setCurrentIndex((prev) => (prev + 1) % books.length);
    startAutoSlide();
  };

  const goPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + books.length) % books.length);
    startAutoSlide();
  };

  // Reorder books so current is in center
  const getOrderedBooks = () => {
    const ordered = [];
    for (let i = 0; i < books.length; i++) {
      ordered.push(books[(currentIndex + i) % books.length]);
    }
    return ordered;
  };

  const orderedBooks = getOrderedBooks();

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

        {/* Carousel */}
        <div className="relative flex items-center justify-center">
          {/* Prev button */}
          <button
            onClick={goPrev}
            className="absolute left-0 z-20 w-10 h-10 rounded-full bg-gold/10 border border-gold/30 text-gold flex items-center justify-center hover:bg-gold hover:text-dark transition-all text-lg"
            aria-label="Previous"
          >
            &#10094;
          </button>

          {/* Books display - all 3 visible, stacked with depth */}
          <div className="flex items-center justify-center gap-4 md:gap-6 w-full px-12">
            {orderedBooks.map((book, i) => {
              // Center book (index 0) is front, others recede
              const isCenter = i === 0;
              const isRight = i === 1;
              const isLeft = i === 2;

              let transform = "";
              let zIndex = 1;
              let opacity = 0.5;
              let scale = 0.8;

              if (isCenter) {
                transform = "translateX(0)";
                zIndex = 10;
                opacity = 1;
                scale = 1;
              } else if (isRight) {
                transform = "translateX(30px)";
                zIndex = 5;
                opacity = 0.6;
                scale = 0.85;
              } else if (isLeft) {
                transform = "translateX(-30px)";
                zIndex = 5;
                opacity = 0.6;
                scale = 0.85;
              }

              return (
                <a
                  key={book.title + "-" + currentIndex + "-" + i}
                  href={book.link}
                  target={book.external ? "_blank" : undefined}
                  rel={book.external ? "noopener noreferrer" : undefined}
                  className="block group flex-shrink-0 transition-all duration-700 ease-in-out"
                  style={{
                    transform: `scale(${scale})`,
                    zIndex,
                    opacity,
                    order: isCenter ? 1 : isLeft ? 0 : 2,
                  }}
                >
                  <div className={`relative rounded-2xl overflow-hidden border transition-all duration-500 ${isCenter ? "border-gold/50 shadow-[0_0_40px_rgba(212,175,55,0.2)]" : "border-gold/15"}`}>
                    <img
                      src={book.image}
                      alt={book.title}
                      className="w-[220px] md:w-[260px] h-[320px] md:h-[380px] object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                      <p className="text-white font-semibold text-xs md:text-sm tracking-wide uppercase group-hover:text-gold transition-colors text-center">
                        {book.title}
                      </p>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>

          {/* Next button */}
          <button
            onClick={goNext}
            className="absolute right-0 z-20 w-10 h-10 rounded-full bg-gold/10 border border-gold/30 text-gold flex items-center justify-center hover:bg-gold hover:text-dark transition-all text-lg"
            aria-label="Next"
          >
            &#10095;
          </button>
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {books.map((_, i) => (
            <button
              key={i}
              onClick={() => { setCurrentIndex(i); startAutoSlide(); }}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === currentIndex ? "bg-gold w-6" : "bg-gold/30"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
