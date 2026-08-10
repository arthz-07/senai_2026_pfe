import Header from "../components/header";
import PostCard from "../components/postCard";
import Footer from "../components/footer";
import Futebol01 from "../img/8EmAndrad.jpg";
import Futebol02 from "../img/bike.jpg";
import Futebol03 from "../img/8EmAdradFati.jpg";

export default function HomePage() {
    return (
        <>
            <Header />

            <main>

                {/* HERO */}
                <section className="hero">
                    <div className="container hero-content">

                        <span className="hero-tag">
                            MINHA TRAJETÓRIA
                        </span>

                        <h1>
                            Onde o futebol
                            <br />
                            me levou.
                        </h1>

                        <p>
                            Uma coleção de lugares, partidas, campeonatos
                            e momentos que fizeram parte da minha história
                            dentro de campo.
                        </p>

                        <a href="#experiencias" className="hero-button">
                            Conheça minha trajetória
                        </a>

                    </div>
                </section>


                {/* EXPERIÊNCIAS */}
                <section className="posts" id="experiencias">

                    <div className="container">

                        <div className="section-header">

                            <span>
                                MINHAS EXPERIÊNCIAS
                            </span>

                            <h2>
                                Lugares que fizeram parte da minha história
                            </h2>

                            <p>
                                Cada campo, campeonato e equipe deixou uma
                                lembrança diferente na minha trajetória.
                            </p>

                        </div>


                        <div className="posts-grid">

                            <PostCard
                                imagem={Futebol01}
                                categoria="JUVENTUDE"
                                titulo="Final da Juventude Campo sub 18"
                                descricao="Esse jogo saímos derrotados, mas fiz uma boa atuaão como volant e capitão."
                                local="Andradina - SP"

                            />

                            <PostCard
                                imagem={Futebol02}
                                categoria="BIKE"
                                titulo="Empate amargo"
                                descricao="Empate bem amargos contra a forte equipe de Pacaembu EC."
                                local="Mirandópolis - SP"

                            />

                            <PostCard
                                imagem={Futebol03}
                                categoria="FATIADA"
                                titulo="Um dos atributos do futebol"
                                descricao="Um lance típico do jogo, mas que poucos prestam atenção."
                                local="Andradina - SP"

                            />

                        </div>

                    </div>

                </section>


                {/* SOBRE A TRAJETÓRIA */}
                <section className="about">

                    <div className="container about-content">

                        <div className="about-text">

                            <span className="section-tag">
                                MINHA HISTÓRIA
                            </span>

                            <h2>
                                Mais do que jogar,
                                <br />
                                viver o futebol.
                            </h2>

                            <p>
                                O futebol sempre foi muito mais do que estar
                                dentro de uma quadra ou campo. Cada partida,
                                cada equipe e cada lugar trouxe uma nova
                                experiência.
                            </p>

                            <p>
                                Este blog reúne alguns desses momentos e
                                registra lugares que fizeram parte dessa
                                trajetória.
                            </p>

                        </div>

                    </div>

                </section>

            </main>

            <Footer />
        </>
    );
}