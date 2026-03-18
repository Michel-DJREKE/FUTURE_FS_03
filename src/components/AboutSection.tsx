import { motion } from "framer-motion";
import { Shield, Truck, Heart } from "lucide-react";

const values = [
  { icon: Shield, title: "Qualité garantie", desc: "Chaque produit est rigoureusement sélectionné pour vous offrir le meilleur." },
  { icon: Truck, title: "Livraison rapide", desc: "Livraison en 45 minutes dans Lomé. Partout au Togo sous 48h." },
  { icon: Heart, title: "Engagement local", desc: "Nous soutenons les producteurs locaux et l'agriculture togolaise." },
];

const AboutSection = () => {
  return (
    <section id="apropos" className="py-section">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            L'histoire d'Oya Confiserie
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Née à Lomé, Oya Confiserie est plus qu'une alimentation générale. C'est la promesse d'une expérience d'achat digne de votre confiance. Nous sélectionnons les meilleurs produits agroalimentaires et créons des confiseries artisanales pour sublimer votre quotidien.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {values.map((v, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col items-center text-center p-6"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <v.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-bold text-foreground mb-2">{v.title}</h3>
              <p className="text-sm text-muted-foreground">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
