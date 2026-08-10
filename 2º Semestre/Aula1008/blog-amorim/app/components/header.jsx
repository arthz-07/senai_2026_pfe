import Link from "next/link";

export default function Header() {
    return (
        <header className="header">

            <div className="container header-content">

                <Link href="/" className="logo">
                    <span className="logo-name">
                        MINHA JORNADA
                    </span>

                    <span className="logo-subtitle">
                        Futebol • Experiências • Memórias
                    </span>
                </Link>

                <nav>
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
                </nav>

            </div>

        </header>
    );
}