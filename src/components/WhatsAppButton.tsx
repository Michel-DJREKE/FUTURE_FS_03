import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/22870033002?text=Bonjour%20Oya%20Confiserie%20!"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-20 md:bottom-6 right-4 z-50 w-14 h-14 rounded-full bg-green-500 text-primary-foreground flex items-center justify-center shadow-xl hover:scale-110 transition-transform duration-300"
      aria-label="Contactez-nous sur WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
    </a>
  );
};

export default WhatsAppButton;
