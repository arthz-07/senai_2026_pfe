import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Gallery from "./components/Gallery/Gallery";
import Experience from "./components/Experience/Experience";
import CTA from "./components/CTA/CTA";
import Footer from "./components/Footer/Footer";

export default function Home() {
    return (
        <>
            <Header />
            <Hero />
            <About />
            <Gallery />
            <Experience />
            <CTA />
            <Footer />
        </>
    );
}