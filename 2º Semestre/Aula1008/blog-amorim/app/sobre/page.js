import Header from "../components/header";
import Footer from "../components/footer";

export default function Sobre() {
    return (
        <>
            <Header />

            <main>

                <section className="about-page">

                    <div className="container about-page-content">

                        <div className="about-page-intro">

                            <span className="section-tag">
                                MINHA HISTÓRIA
                            </span>

                            <h1>
                                Mais do que jogar,
                                <br />
                                viver o futebol.
                            </h1>

                            <p>
                                Este espaço reúne um pouco da minha trajetória
                                dentro do futebol e os lugares que fizeram parte
                                dela.
                            </p>

                        </div>


                        <div className="about-page-text">

                            <p>
                                Ao longo dessa caminhada, tive a oportunidade
                                de conhecer diferentes lugares, participar de
                                partidas e campeonatos e viver experiências
                                que ficaram marcadas na minha memória.
                            </p>

                            <p>
                                Cada jogo trouxe um desafio diferente. Alguns
                                momentos foram de aprendizado, outros de
                                conquista, mas todos contribuíram para a minha
                                história dentro de campo.
                            </p>

                            <p>
                                Criei este blog para registrar essas experiências
                                e reunir algumas das fotos que representam
                                momentos importantes dessa trajetória.
                            </p>

                        </div>

                    </div>

                </section>


                <section className="about-highlight">

                    <div className="container">

                        <span className="section-tag">
                            DENTRO DE CAMPO
                        </span>

                        <h2>
                            Cada lugar tem uma história.
                        </h2>

                        <p>
                            E cada história faz parte da minha jornada.
                        </p>

                    </div>

                </section>

            </main>

            <Footer />
        </>
    );
}