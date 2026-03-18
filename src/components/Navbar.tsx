import { ShoppingBag, User, Home, Store } from "lucide-react";
import { useCart } from "@/hooks/useCart";

const Navbar = () => {
  const { totalItems, setIsOpen } = useCart();

  return (
    <>
      {/* Desktop nav */}
      <header className="sticky top-0 z-50 hidden md:block bg-card/80 backdrop-blur-xl border-b border-border">
        <div className="container flex items-center justify-between h-16">
          <a href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold text-primary tracking-tight">Oya</span>
            <span className="text-sm text-muted-foreground font-medium">Confiserie</span>
          </a>
          <nav className="flex items-center gap-8">
            <a href="#produits" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Boutique</a>
            <a href="#confiserie" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Confiserie</a>
            <a href="#apropos" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">À propos</a>
            <button
              onClick={() => setIsOpen(true)}
              className="relative flex items-center justify-center w-10 h-10 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
            >
              <ShoppingBag className="w-5 h-5 text-foreground" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-primary text-primary-foreground text-[10px] font-bold flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile bottom tab bar */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-card/90 backdrop-blur-xl border-t border-border">
        <div className="flex items-center justify-around h-16 px-2">
          <a href="/" className="flex flex-col items-center gap-1 text-primary">
            <Home className="w-5 h-5" />
            <span className="text-[10px] font-medium">Accueil</span>
          </a>
          <a href="#produits" className="flex flex-col items-center gap-1 text-muted-foreground">
            <Store className="w-5 h-5" />
            <span className="text-[10px] font-medium">Boutique</span>
          </a>
          <button
            onClick={() => setIsOpen(true)}
            className="relative flex flex-col items-center gap-1 text-muted-foreground"
          >
            <ShoppingBag className="w-5 h-5" />
            {totalItems > 0 && (
              <span className="absolute -top-1 right-1 w-4 h-4 rounded-full bg-primary text-primary-foreground text-[9px] font-bold flex items-center justify-center">
                {totalItems}
              </span>
            )}
            <span className="text-[10px] font-medium">Panier</span>
          </button>
          <a href="#apropos" className="flex flex-col items-center gap-1 text-muted-foreground">
            <User className="w-5 h-5" />
            <span className="text-[10px] font-medium">Profil</span>
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
