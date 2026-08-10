import Link from "next/link";

export default function Footer() {
    return (
        <footer className="footer">

            <div className="container footer-content">

                <div className="footer-brand">

                    <h2>
                        MINHA JORNADA
                    </h2>

                    <p>
                        Futebol • Experiências • Memórias
                    </p>

                    <p>
                        Um registro dos lugares, partidas e momentos
                        que fizeram parte da minha trajetória no futebol.
                    </p>

                </div>


                <div className="footer-navigation">

                    <h3>
                        Navegação
                    </h3>

                    <ul>

                        <li>
                            <Link href="/">
                                Início
                            </Link>
                        </li>

                        <li>
                            <Link href="/sobre">
                                Minha História
                            </Link>
                        </li>

                        <li>
                            <Link href="/lugares">
                                Lugares
                            </Link>
                        </li>

                    </ul>

                </div>


                <div className="footer-message">

                    <span>
                        DENTRO E FORA DE CAMPO
                    </span>

                    <p>
                        Cada partida termina,
                        mas cada experiência permanece.
                    </p>

                </div>

            </div>


            <div className="footer-bottom">

                <div className="container">

                    <p>
                        © 2026 Minha Jornada no Futebol.
                        Todos os direitos reservados.
                    </p>

                </div>

            </div>

        </footer>
    );
}