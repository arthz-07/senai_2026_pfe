import Link from "next/link";
import Image from "next/image";

export default function PostCard({ imagem, categoria, titulo, descricao, local, link }) {
    return (
        <article className="post-card">

            <div className="post-image">
                <Image
                    src={imagem}
                    alt={titulo}
                />
            </div>

            <div className="post-content">

                <span className="post-category">
                    {categoria}
                </span>

                <h3>
                    {titulo}
                </h3>

                <p>
                    {descricao}
                </p>

                <span className="post-location">
                    📍 {local}
                </span>

                <Link href={`${link}`} className="post-link">
                    Ver experiência →
                </Link>

            </div>

        </article>
    );
}