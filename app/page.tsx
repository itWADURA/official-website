import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Process from "./components/Process";
import TechStack from "./components/TechStack";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Background from "./components/Background";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background text-foreground overflow-hidden">
      <Background />
      <Navbar />
      <div className="relative z-10 flex flex-col min-h-screen">
        <Hero />
        <Services />
        <Process />
        <TechStack />
        <Portfolio />
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
