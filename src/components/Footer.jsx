import { FaWhatsapp, FaHeart } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative bg-primary-dark border-t border-gold/10">
      {/* Top gold line accent */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* About */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <img src="/Kenos-Logo.png" alt="KTM Logo" className="w-8 h-8 object-contain" />
              <div>
                <h3 className="text-white font-bold text-sm tracking-[0.15em] uppercase">
                  Kenos Tabernacle
                </h3>
                <p className="text-gold/60 text-[10px] tracking-[0.2em] uppercase">
                  Ministry
                </p>
              </div>
            </div>
            <p className="text-white/40 text-sm leading-relaxed font-light">
              A church located in Parow Cape Town, believing The End Time
              Message preached by the Prophet William Branham.
            </p>
            <p className="text-gold/50 italic text-xs mt-4 font-heading">
              &ldquo;The Inspired Hill&rdquo;
            </p>
          </div>

          {/* Find Us */}
          <div>
            <h4 className="text-white/40 text-xs tracking-[0.2em] uppercase font-medium mb-5">
              Find Us
            </h4>
            <a
              href="https://www.google.com/maps/search/?api=1&query=120+King+Edward+Street+Parow+Cape+Town"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white/3 hover:bg-white/5 border border-white/5 hover:border-gold/20 p-4 rounded-xl transition-all mb-5"
            >
              <p className="text-white/70 text-xs">📍 120 King Edward Street</p>
              <p className="text-white/40 text-[11px] mt-1">Parow, Cape Town</p>
            </a>
            <div className="space-y-2.5 text-xs">
              <p className="text-white/50">
                <span className="text-white/70 font-medium">Apostle David</span>{" "}
                <a href="tel:+27725815076" className="text-gold/60 hover:text-gold transition-colors">
                  +27 72-581-5076
                </a>
                <a href="https://wa.me/27725815076" target="_blank" rel="noopener noreferrer" className="inline-flex ml-1.5 text-green-400/50 hover:text-green-400">
                  <FaWhatsapp className="text-sm" />
                </a>
              </p>
              <p className="text-white/50">
                <span className="text-white/70 font-medium">Pastor Billy</span>{" "}
                <a href="tel:+27783336776" className="text-gold/60 hover:text-gold transition-colors">
                  +27 78-333-6776
                </a>
                <a href="https://wa.me/27783336776" target="_blank" rel="noopener noreferrer" className="inline-flex ml-1.5 text-green-400/50 hover:text-green-400">
                  <FaWhatsapp className="text-sm" />
                </a>
              </p>
            </div>
          </div>

          {/* Service Times */}
          <div>
            <h4 className="text-white/40 text-xs tracking-[0.2em] uppercase font-medium mb-5">
              Service Times
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-gold/50 mt-1.5 flex-shrink-0" />
                <div>
                  <p className="text-white/70 text-xs font-medium">Sunday</p>
                  <p className="text-white/40 text-[11px]">11:00 AM - 01:30 PM</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-gold/50 mt-1.5 flex-shrink-0" />
                <div>
                  <p className="text-white/70 text-xs font-medium">Wednesday</p>
                  <p className="text-white/40 text-[11px]">07:30 PM - 09:30 PM</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-gold/50 mt-1.5 flex-shrink-0" />
                <div>
                  <p className="text-white/70 text-xs font-medium">1st & 3rd Fridays</p>
                  <p className="text-white/40 text-[11px]">08:30 PM - 09:30 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">
            &copy; {new Date().getFullYear()} Kenos Tabernacle Ministries. All rights reserved.
          </p>
          <p className="text-white/20 text-[11px] flex items-center gap-1">
            Built with <FaHeart className="text-gold/40 text-[9px]" /> for the Kingdom
          </p>
        </div>
      </div>
    </footer>
  );
}
