import Header from "../components/header";
import Footer from "../components/footer";
import PostCard from "../components/postCard";

import Futebol01 from "../img/fotoTime.jpg";
import Futebol02 from "../img/3EmBiriguiBom.jpg";
import Futebol03 from "../img/3EmBirigui.jpg";

export default function Lugares() {
    return (
        <>
            <Header />

            <main>

                {/* CABEÇALHO */}

                <section className="places-hero">

                    <div className="container">

                        <span className="section-tag">
                            MINHA TRAJETÓRIA
                        </span>

                        <h1>
                            Lugares onde
                            <br />
                            já joguei.
                        </h1>

                        <p>
                            Campos, quadras, campeonatos e experiências
                            que fizeram parte da minha caminhada no futebol.
                        </p>

                    </div>

                </section>


                {/* GALERIA */}

                <section className="places">

                    <div className="container">

                        <div className="places-header">

                            <span className="section-tag">
                                EXPERIÊNCIAS
                            </span>

                            <h2>
                                Cada lugar,
                                <br />
                                uma história.
                            </h2>

                            <p>
                                Algumas das experiências que fizeram parte
                                da minha trajetória dentro do futebol.
                            </p>

                        </div>


                        <div className="places-grid">

                            <PostCard
                                imagem={Futebol01}
                                categoria="CAMPEONATO"
                                titulo="Uma experiência em campo"
                                descricao="Um momento importante da minha trajetória no futebol."
                                local="Mirandópolis - SP"
                                link="/lugares/primeiro-campeonato"
                            />

                            <PostCard
                                imagem={Futebol02}
                                categoria="TORNEIO"
                                titulo="Um campeonato inesquecível"
                                descricao="Uma experiência que ficou marcada na memória."
                                local="Mirandópolis - SP"
                                link="/lugares/futebol-escola"

                            />

                            <PostCard
                                imagem={Futebol03}
                                categoria="FUTEBOL"
                                titulo="Um novo desafio"
                                descricao="Mais um lugar, uma nova experiência e uma nova história."
                                local="Mirandópolis - SP"
                                link="/lugares/primeiro-campeonato"
                            />

                        </div>

                    </div>

                </section>


                {/* FRASE FINAL */}

                <section className="places-quote">

                    <div className="container">

                        <span>
                            MAIS DO QUE RESULTADOS
                        </span>

                        <h2>
                            O que importa são
                            <br />
                            as histórias pelo caminho.
                        </h2>

                    </div>

                </section>

            </main>

            <Footer />
        </>
    );
}