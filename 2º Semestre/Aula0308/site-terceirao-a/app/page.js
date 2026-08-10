import Header from "./components/header";
import Hero from "./components/hero";
import About from "./components/about";
import Gallery from "./components/gallery";
import Footer from "./components/footer";
import Highlights from "./components/highlights";
import Teachers from "./components/teachers";
import CTA from "./components/CTA";


export default function Home() {
  return (
    <>
    <Header />

    <main>
      <Hero />
      
      <Highlights />
      
      <About />
      
      <Teachers />
      
      <Gallery />
      
      <CTA />
    </main>
    <Footer />
    </>
  );
}