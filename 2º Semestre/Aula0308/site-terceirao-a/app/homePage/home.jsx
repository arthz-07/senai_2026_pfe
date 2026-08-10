import Image from "next/image";
import Header from "../components/header";
import Footer from "../components/footer";
import Turma from '../img/antigaSala.jpeg';
import Hero from "../components/hero";
import About from "../components/about";
import Highlights from "../components/highlights";
import Teachers from "../components/teachers";
import Gallery from "../components/gallery";
import CTA from "../components/CTA";


export default function HomePage() {
    return(
        <>
            <Header/>
            <main>
                <section>
                    <Image src={Turma}/>
                </section>

                <section>
                    <h3> Informações </h3>
                    <div>
                        <h6> Formatura 18/12/2026 </h6>
                        <p> Todos deverão estar reunidos para viver
                            esse momento especial em nossas vidas. </p>
                    </div>

                    <div>
                        <h6> Próximo TRote </h6>
                        <p> Tema do trote: Personagens </p>
                    </div>
                </section>
            </main>

          

            <Hero />

            <About />

            <Highlights />

            <Teachers />

            <Gallery />

            <CTA />

            <Footer />
        </>
    )
}