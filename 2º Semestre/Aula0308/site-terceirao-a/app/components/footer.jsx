import Link from "next/link";

export default function Footer() {
    return (
        <footer>

            <div className = "container footer-content">

                <div>

                    <h2> 3º Ano A EM </h2>

                    <p>
                        Escola SESI de Mirandópolis
                    </p>

                </div>

                <nav>

                    <ul>

                        <li>
                            <Link href="/"> Início </Link>
                        </li>

                        <li>
                            <Link href="/sobre"> Sobre </Link>
                        </li>

                        <li>
                            <Link href="/fotos"> Fotos </Link>
                        </li>

                    </ul>

                </nav>

            </div>

            <div className="footer-bottom">

                <p>
                    © 2026 • 3º Ano A • Escola SESI de Mirandópolis
                </p>

            </div>

        </footer>
    );
}