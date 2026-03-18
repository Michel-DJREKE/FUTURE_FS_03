import { useState } from "react";
import CategoryPills from "./CategoryPills";
import ProductCard from "./ProductCard";
import { products, type Category } from "@/data/products";

const ProductGrid = () => {
  const [selected, setSelected] = useState<Category>("Tous");

  const filtered = selected === "Tous" ? products : products.filter((p) => p.category === selected);

  return (
    <section id="produits" className="py-section">
      <div className="container">
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Notre sélection</h2>
          <p className="text-muted-foreground">La qualité n'est plus une option. C'est votre quotidien.</p>
        </div>
        <div className="sticky top-16 md:top-[65px] z-40 bg-background/80 backdrop-blur-lg py-3 -mx-4 px-4 md:mx-0 md:px-0 mb-6">
          <CategoryPills selected={selected} onSelect={setSelected} />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {filtered.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
        {filtered.length === 0 && (
          <p className="text-center text-muted-foreground py-16">Aucun produit dans cette catégorie.</p>
        )}
      </div>
    </section>
  );
};

export default ProductGrid;
