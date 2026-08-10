import Link from "next/link";

export default function Header() {
  return (
    <header>
      <div className="container header-content">

        <div className="logo">
          <h2>SESI</h2>
          <span>3º Ano A</span>
        </div>

        <nav>
          <ul>
            <li>
              <Link href="/">Início</Link>
            </li>

            <li>
              <Link href="/sobre">Sobre</Link>
            </li>

            <li>
              <Link href="/fotos">Fotos</Link>
            </li>
          </ul>
        </nav>

      </div>
    </header>
  );
}