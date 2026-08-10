import Header from "../components/1Header/header";
import Hero from "../components/2Hero/hero";
import About from "../components/3About/about";
import Footer from "../components/7Footer/footer";

export default function HomePage() {
    return (
        <>
            <Header titulo="Inn Terraço Hotel" />

            <Hero />

            <About />

            <Services />

            <Footer />
        </>
    );
}