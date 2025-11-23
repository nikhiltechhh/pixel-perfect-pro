import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats"
import Product from "@/components/Product"
import Pic from "@/components/Pic"
import Footer from "@/components/footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Stats />
      <Product />
      <Pic />
      <Footer />
    </div>
  );
};

export default Index;
