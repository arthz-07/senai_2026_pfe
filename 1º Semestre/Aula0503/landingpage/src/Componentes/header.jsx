import { useState } from "react";

export default function Header(){

    const [menuAberto, setMenuAberto] = useState(false);

    return(
        <header>

            <h1><span>Academia</span> FoFitness</h1>

            <nav className={menuAberto ? "ativo" : ""}>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#sobre">Sobre nós</a></li>
                    <li><a href="#modalidades">Modalidades</a></li>
                    <li><a href="#planos">Planos</a></li>
                    <li><a href="#depoimentos">Depoimentos</a></li>
                    <li><a href="#contato">Contato</a></li>
                </ul>
            </nav>

            <div 
                className="menu-mobile"
                onClick={() => setMenuAberto(!menuAberto)}
            >
                ☰
            </div>

        </header>
    )
}