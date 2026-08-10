import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import SectionTitle from "../components/ui/SectionTitle/SectionTitle";

export default function Suites() {

    return (

        <>

            <Header />

            <main>

                <section className="container">

                    <SectionTitle

                        center

                        tag="Suítes"

                        title="Conforto e sofisticação em cada detalhe."

                        description="Conheça nossas acomodações cuidadosamente preparadas para proporcionar uma experiência única."

                    />

                </section>

            </main>

            <Footer />

        </>

    );

}