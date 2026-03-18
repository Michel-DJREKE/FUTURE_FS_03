import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProductGrid from "@/components/ProductGrid";
import ConfiserieSection from "@/components/ConfiserieSection";
import Testimonials from "@/components/Testimonials";
import AboutSection from "@/components/AboutSection";
import CartDrawer from "@/components/CartDrawer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <ProductGrid />
        <ConfiserieSection />
        <Testimonials />
        <AboutSection />
      </main>
      <Footer />
      <CartDrawer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
