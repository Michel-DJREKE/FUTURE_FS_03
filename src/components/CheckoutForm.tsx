import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft, Check } from "lucide-react";
import { useCart } from "@/hooks/useCart";
import { formatPrice } from "@/data/products";
import { toast } from "sonner";

interface CheckoutFormProps {
  onBack: () => void;
}

const CheckoutForm = ({ onBack }: CheckoutFormProps) => {
  const { totalPrice, clearCart, setIsOpen } = useCart();
  const [step, setStep] = useState<1 | 2>(1);
  const [form, setForm] = useState({ name: "", address: "", phone: "+228" });
  const [payment, setPayment] = useState<"livraison" | "mobile_money">("livraison");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (!form.name || !form.address || form.phone.length < 8) {
      toast.error("Veuillez remplir tous les champs.");
      return;
    }
    setSubmitted(true);
    setTimeout(() => {
      clearCart();
      setIsOpen(false);
      toast.success("Commande confirmée ! Nous vous contacterons sous peu.");
    }, 2000);
  };

  if (submitted) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center gap-4">
        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
          <Check className="w-8 h-8 text-green-600" />
        </div>
        <p className="font-semibold text-foreground">Commande en cours de traitement...</p>
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col py-4">
      <button onClick={onBack} className="flex items-center gap-1 text-sm text-muted-foreground mb-6 hover:text-foreground transition-colors">
        <ArrowLeft className="w-4 h-4" /> Retour au panier
      </button>

      {step === 1 ? (
        <div className="space-y-4">
          <h3 className="font-bold text-foreground text-lg">Vos informations</h3>
          <div className="space-y-2">
            <Label htmlFor="name">Nom complet</Label>
            <Input id="name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Votre nom" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="address">Adresse de livraison</Label>
            <Input id="address" value={form.address} onChange={(e) => setForm({ ...form, address: e.target.value })} placeholder="Quartier, rue, repère" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Téléphone</Label>
            <Input id="phone" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="+22870033002" />
          </div>
          <Button variant="hero" size="lg" className="w-full mt-4" onClick={() => setStep(2)}>
            Continuer
          </Button>
        </div>
      ) : (
        <div className="space-y-4">
          <h3 className="font-bold text-foreground text-lg">Mode de paiement</h3>
          <div className="space-y-3">
            <button
              onClick={() => setPayment("livraison")}
              className={`w-full p-4 rounded-lg border-2 text-left transition-all ${
                payment === "livraison" ? "border-primary bg-primary/5" : "border-border"
              }`}
            >
              <p className="font-semibold text-sm text-foreground">Paiement à la livraison</p>
              <p className="text-xs text-muted-foreground mt-1">Payez en espèces à la réception de votre commande.</p>
            </button>
            <button
              onClick={() => setPayment("mobile_money")}
              className={`w-full p-4 rounded-lg border-2 text-left transition-all ${
                payment === "mobile_money" ? "border-primary bg-primary/5" : "border-border"
              }`}
            >
              <p className="font-semibold text-sm text-foreground">Mobile Money</p>
              <p className="text-xs text-muted-foreground mt-1">Flooz, T-Money ou autres services Mobile Money.</p>
            </button>
          </div>
          <div className="border-t border-border pt-4 mt-4">
            <div className="flex justify-between mb-4">
              <span className="font-semibold">Total à payer</span>
              <span className="oya-price text-lg">{formatPrice(totalPrice)}</span>
            </div>
            <Button variant="hero" size="lg" className="w-full" onClick={handleSubmit}>
              Confirmer la commande
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CheckoutForm;
