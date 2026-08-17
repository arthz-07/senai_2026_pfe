import Link from "next/link";

export default function Header() {
    return (
        <header>
            <h1> SESI News </h1>

            <nav>
                <ul>
                    <li> <Link href="/"> Inicío </Link> </li>
                    <li> <Link href="/categorias"> Categorias </Link> </li>
                    <li> <Link href="/categorias/esportes"> Esportes </Link> </li>
                </ul>
            </nav>
        </header>
    )
}