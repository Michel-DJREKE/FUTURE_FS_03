import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import confiserie from "@/assets/confiserie.jpg";

const ConfiserieSection = () => {
  return (
    <section id="confiserie">
      <div className="oya-section-divider" />
      <div className="container py-section">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
          >
            <img
              src={confiserie}
              alt="Assortiment de petits fours et confiseries Oya"
              className="w-full rounded-card oya-card-shadow object-cover aspect-square"
              loading="lazy"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1], delay: 0.1 }}
            className="flex flex-col gap-5"
          >
            <span className="oya-badge bg-primary/10 text-primary w-fit">Confiserie</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              L'art de la pâtisserie, revisité.
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Nos petits fours, gâteaux et confiseries sont préparés chaque jour avec des ingrédients soigneusement sélectionnés. De la tartelette au macaron, chaque pièce est une œuvre d'art comestible.
            </p>
            <Button variant="hero" size="lg" className="w-fit" asChild>
              <a href="#produits">Découvrir la collection</a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ConfiserieSection;
