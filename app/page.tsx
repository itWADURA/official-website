import Background from "./components/Background";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechStack from "./components/TechStack";
import Services from "./components/Services";
import Process from "./components/Process";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Background />
      <main className="relative min-h-screen text-foreground antialiased selection:bg-primary selection:text-white">
        <Navbar />
        <Hero />
        <TechStack />
        <Services />
        <Process />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
