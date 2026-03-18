import { MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background/80 pb-24 md:pb-0">
      <div className="container py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold text-background mb-3">Oya Confiserie</h3>
            <p className="text-sm leading-relaxed text-background/60">
              Votre épicerie de prestige à Lomé. Agroalimentaire de qualité et confiseries artisanales.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-background mb-3">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2"><MapPin className="w-4 h-4 shrink-0" /> Lomé, Togo</li>
              <li className="flex items-center gap-2"><Phone className="w-4 h-4 shrink-0" /> +228 70 03 30 02</li>
              <li className="flex items-center gap-2"><Mail className="w-4 h-4 shrink-0" /> contact@oyaconfiserie.com</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-background mb-3">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#produits" className="hover:text-background transition-colors">Boutique</a></li>
              <li><a href="#confiserie" className="hover:text-background transition-colors">Confiserie</a></li>
              <li><a href="#apropos" className="hover:text-background transition-colors">À propos</a></li>
            </ul>
          </div>
        </div>
        <div className="oya-section-divider my-8 opacity-20" />
        <p className="text-center text-xs text-background/40">
          © {new Date().getFullYear()} Oya Confiserie. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
