import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Afiwa K.",
    location: "Lomé, Togo",
    text: "La qualité des produits est exceptionnelle. Je commande chaque semaine et la livraison est toujours rapide. Merci Oya !",
    rating: 5,
  },
  {
    name: "Kofi M.",
    location: "Accra, Ghana",
    text: "Les petits fours sont un délice ! Parfaits pour mes réceptions. Le service client est impeccable.",
    rating: 5,
  },
  {
    name: "Aminata D.",
    location: "Lomé, Togo",
    text: "Enfin une épicerie qui comprend nos besoins. Les prix sont justes et les produits toujours frais.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-section bg-secondary/50">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2 text-center">
          Ce que disent nos clients
        </h2>
        <p className="text-muted-foreground text-center mb-10">La confiance se construit par l'excellence.</p>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.2, 0.8, 0.2, 1] }}
              className="bg-card rounded-card p-6 oya-card-shadow"
            >
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-oya-gold text-oya-gold" />
                ))}
              </div>
              <p className="text-sm text-foreground/80 leading-relaxed mb-4">"{t.text}"</p>
              <div>
                <p className="font-semibold text-sm text-foreground">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
