import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroSlide1 from "@/assets/hero-slide-1.jpg";
import heroSlide2 from "@/assets/hero-slide-2.jpg";
import heroSlide3 from "@/assets/hero-slide-3.jpg";
import heroSlide4 from "@/assets/hero-slide-4.jpg";

const slides = [
  {
    image: heroSlide1,
    title: "Votre alimentation de confiance au quotidien",
    subtitle: "Qualité, proximité et prix accessibles pour toute la famille.",
    alt: "Femmes africaines achetant des produits agroalimentaires",
  },
  {
    image: heroSlide2,
    title: "L'excellence dans votre panier",
    subtitle: "Des produits soigneusement sélectionnés pour sublimer votre cuisine.",
    alt: "Femme africaine tenant du riz premium et de l'huile",
  },
  {
    image: heroSlide3,
    title: "Le choix de la qualité pour votre famille",
    subtitle: "Produits frais, locaux et importés. Livrés chez vous en 45 minutes.",
    alt: "Mère et fille africaines faisant leurs courses ensemble",
  },
  {
    image: heroSlide4,
    title: "Payez facilement, recevez rapidement",
    subtitle: "Mobile Money, paiement à la livraison. Simple, rapide, sécurisé.",
    alt: "Femme africaine payant par Mobile Money au supermarché",
  },
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const goTo = useCallback(
    (index: number) => {
      setDirection(index > current ? 1 : -1);
      setCurrent(index);
    },
    [current]
  );

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  // Auto-play
  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const slide = slides[current];

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({
      x: dir > 0 ? "-100%" : "100%",
      opacity: 0,
    }),
  };

  return (
    <section className="relative w-full h-[75vh] md:h-[85vh] overflow-hidden bg-foreground">
      {/* Slides */}
      <AnimatePresence custom={direction} mode="wait">
        <motion.div
          key={current}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
          className="absolute inset-0"
        >
          <img
            src={slide.image}
            alt={slide.alt}
            className="w-full h-full object-cover"
            loading={current === 0 ? "eager" : "lazy"}
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/40 to-foreground/20" />
        </motion.div>
      </AnimatePresence>

      {/* Content overlay */}
      <div className="absolute inset-0 flex items-end z-10">
        <div className="container pb-16 md:pb-24">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, delay: 0.2, ease: [0.2, 0.8, 0.2, 1] }}
              className="max-w-2xl"
            >
              <p className="text-xs md:text-sm uppercase tracking-widest text-primary-foreground/60 font-semibold mb-3">
                Lomé, Togo • Livraison estimée : 45 min
              </p>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-[1.1] mb-4">
                {slide.title}
              </h1>
              <p className="text-base md:text-lg text-primary-foreground/80 mb-6 max-w-lg leading-relaxed">
                {slide.subtitle}
              </p>
              <div className="flex flex-wrap gap-3">
                <Button variant="gold" size="lg" asChild>
                  <a href="#produits">Découvrir nos produits</a>
                </Button>
                <Button variant="hero-outline" size="lg" asChild>
                  <a href="#confiserie">Commander maintenant</a>
                </Button>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Dots & Arrows */}
          <div className="flex items-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-primary-foreground/30 flex items-center justify-center text-primary-foreground/70 hover:text-primary-foreground hover:border-primary-foreground/60 transition-all"
              aria-label="Diapositive précédente"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  aria-label={`Aller à la diapositive ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    i === current
                      ? "w-8 bg-oya-gold"
                      : "w-3 bg-primary-foreground/30 hover:bg-primary-foreground/50"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-primary-foreground/30 flex items-center justify-center text-primary-foreground/70 hover:text-primary-foreground hover:border-primary-foreground/60 transition-all"
              aria-label="Diapositive suivante"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
