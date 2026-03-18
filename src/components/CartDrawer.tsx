import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import { useCart } from "@/hooks/useCart";
import { formatPrice } from "@/data/products";
import { useState } from "react";
import CheckoutForm from "./CheckoutForm";

const CartDrawer = () => {
  const { items, isOpen, setIsOpen, updateQuantity, removeItem, totalPrice, totalItems } = useCart();
  const [showCheckout, setShowCheckout] = useState(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetContent className="w-full sm:max-w-md flex flex-col">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5" />
            Panier ({totalItems})
          </SheetTitle>
        </SheetHeader>

        {!showCheckout ? (
          <>
            <div className="flex-1 overflow-y-auto py-4 space-y-4">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-muted-foreground">
                  <ShoppingBag className="w-12 h-12 mb-4 opacity-30" />
                  <p className="text-sm">Votre panier est vide</p>
                </div>
              ) : (
                items.map((item) => (
                  <div key={item.product.id} className="flex gap-3 p-3 bg-secondary/50 rounded-lg">
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-16 h-16 rounded-md object-cover bg-oya-product-bg"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-semibold text-foreground truncate">{item.product.name}</h4>
                      <p className="oya-price text-sm mt-1">{formatPrice(item.product.price)}</p>
                      <div className="flex items-center gap-2 mt-2">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          className="w-7 h-7 rounded-full bg-secondary flex items-center justify-center hover:bg-border transition-colors"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-sm font-semibold w-6 text-center tabular-nums">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          className="w-7 h-7 rounded-full bg-secondary flex items-center justify-center hover:bg-border transition-colors"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                        <button
                          onClick={() => removeItem(item.product.id)}
                          className="ml-auto w-7 h-7 rounded-full flex items-center justify-center text-muted-foreground hover:text-destructive transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {items.length > 0 && (
              <div className="border-t border-border pt-4 space-y-4">
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-foreground">Total</span>
                  <span className="oya-price text-lg">{formatPrice(totalPrice)}</span>
                </div>
                <Button variant="hero" size="lg" className="w-full" onClick={() => setShowCheckout(true)}>
                  Commander maintenant
                </Button>
              </div>
            )}
          </>
        ) : (
          <CheckoutForm onBack={() => setShowCheckout(false)} />
        )}
      </SheetContent>
    </Sheet>
  );
};

export default CartDrawer;
