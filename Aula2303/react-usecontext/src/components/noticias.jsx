import { useContext } from "react";
import { TemaContexto } from "../contexts/temaContexto";

export default function Noticias() {
    const { tema } = useContext(TemaContexto);

    const noticias = [
        {
            titulo: "Tecnologia avança em 2026",
            descricao: "Novas IAs estão revolucionando o mercado.",
            fato: "Mais de 70% das empresas já usam IA"
        },
        {
            titulo: "Novo celular lançado",
            descricao: "Empresa lança smartphone inovador.",
            fato: "Bateria dura até 3 dias"
        },
        {
            titulo: "Exploração espacial",
            descricao: "Missões para Marte avançam.",
            fato: "Nova base pode ser criada até 2030"
        }
    ];

    return (
        <section className={`noticias-${tema}`}>
            <h2>Notícias</h2>

            <div className="container-cards">
                {noticias.map((n, index) => (
                    <div key={index} className={`card-${tema}`}>
                        <h3>{n.titulo}</h3>
                        <p>{n.descricao}</p>
                        <span>{n.fato}</span>
                    </div>
                ))}
            </div>
        </section>
    );
}