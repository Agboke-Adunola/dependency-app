import Hero from "./components/Hero";
import Features from "./components/Features";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

export default function HomePage() {
  return (
    <main className="bg-[url('/images/beauty.jpg')] h-screen w-full bg-cover bg-center min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <Features />
      <CTA />
      <Footer />
    </main>
  );
}
