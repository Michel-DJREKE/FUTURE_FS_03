import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import type { Product } from "@/data/products";
import { formatPrice } from "@/data/products";
import { useCart } from "@/hooks/useCart";
import { toast } from "sonner";

interface ProductCardProps {
  product: Product;
  index: number;
}

const badgeColors: Record<string, string> = {
  Local: "bg-green-100 text-green-800",
  Premium: "bg-primary/10 text-primary",
  Promo: "bg-oya-gold/20 text-amber-800",
};

const ProductCard = ({ product, index }: ProductCardProps) => {
  const { addItem } = useCart();

  const handleAdd = () => {
    addItem(product);
    toast.success(`${product.name} ajouté au panier`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.05, ease: [0.2, 0.8, 0.2, 1] }}
      className="group relative bg-card rounded-card oya-card-shadow overflow-hidden"
    >
      {/* Image */}
      <div className="aspect-square bg-oya-product-bg relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        {product.badge && (
          <span className={`oya-badge absolute top-3 left-3 ${badgeColors[product.badge]}`}>
            {product.badge}
          </span>
        )}
        {/* Add to cart button */}
        <button
          onClick={handleAdd}
          className="absolute bottom-3 right-3 w-11 h-11 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg md:opacity-0 md:translate-y-2 md:group-hover:opacity-100 md:group-hover:translate-y-0 transition-all duration-300 hover:scale-110 touch-manipulation"
          aria-label={`Ajouter ${product.name} au panier`}
        >
          <Plus className="w-5 h-5" />
        </button>
      </div>

      {/* Info */}
      <div className="p-4">
        <h3 className="font-semibold text-sm text-foreground leading-tight mb-1 line-clamp-2">
          {product.name}
        </h3>
        <p className="text-xs text-muted-foreground line-clamp-1 mb-2">{product.description}</p>
        <p className="oya-price text-base">{formatPrice(product.price)}</p>
      </div>
    </motion.div>
  );
};

export default ProductCard;
