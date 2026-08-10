import Image from "next/image";
import Link from "next/link";

import Header from "../../components/header";
import Footer from "../../components/footer";

import Futebol01 from "../../img/casaBella.jpg";
import Futebol02 from "../../img/7EmGabr.jpg";
import Futebol03 from "../../img/8EmPereiCleu.jpg";

const experiencias = {
    "primeiro-campeonato": {
        categoria: "CAMPEONATO",
        titulo: "Uma experiência em campo",
        local: "Mirandópolis - SP",
        galeria: [
            Futebol01,
        ],imagem: Futebol01,

        texto: [
            "Algumas experiências dentro do futebol acabam se tornando mais importantes do que o próprio resultado de uma partida.",

            "Este foi um dos momentos que fizeram parte da minha trajetória. Estar em campo, competir e compartilhar aquela experiência com outras pessoas tornou esse momento especial.",

            "Cada partida traz alguma coisa nova. Pode ser um aprendizado, um desafio ou simplesmente uma lembrança que vale a pena guardar.",

            "Por isso, decidi registrar essas experiências neste blog e guardar um pouco daquilo que vivi dentro do futebol."
        ]
    },

    "torneio-2026": {
        categoria: "TORNEIO",
        titulo: "Um campeonato inesquecível",
        local: "Mirandópolis - SP",
          galeria: [
            Futebol02,
        ],imagem: Futebol02,

        texto: [
            "Participar de um torneio é sempre uma oportunidade diferente de viver o futebol.",

            "Além da competição, existem os momentos antes e depois das partidas, a convivência com os companheiros e tudo aquilo que acontece dentro e fora de campo.",

            "Essa experiência ficou marcada como mais uma etapa importante da minha caminhada."
        ]
    },

    "futebol-escola": {
        categoria: "FUTEBOL",
        titulo: "Um novo desafio",
        local: "Mirandópolis - SP",
        galeria: [
            Futebol03,
        ],imagem: Futebol03,

        texto: [
            "O futebol também fez parte de momentos importantes da minha vida escolar.",

            "Jogar representando a escola trouxe novos desafios e experiências que contribuíram para minha evolução dentro e fora de campo.",

            "São momentos que merecem ser registrados e lembrados."
        ]
    }
};


export default async function Experiencia({ params }) {

    const { slug } = await params;

    const experiencia = experiencias[slug];


    if (!experiencia) {
        return (
            <>
                <Header />

                <main className="not-found">

                    <div className="container">

                        <span className="section-tag">
                            EXPERIÊNCIA NÃO ENCONTRADA
                        </span>

                        <h1>
                            Essa história ainda não existe.
                        </h1>

                        <Link
                            href="/lugares"
                            className="back-link"
                        >
                            ← Voltar para lugares
                        </Link>

                    </div>

                </main>

                <Footer />
            </>
        );
    }


    return (
        <>
            <Header />

            <main>

                <article className="post-page">

                    <div className="container post-page-header">

                        <Link
                            href="/lugares"
                            className="back-link"
                        >
                            ← Voltar para lugares
                        </Link>

                        <span className="section-tag">
                            {experiencia.categoria}
                        </span>

                        <h1>
                            {experiencia.titulo}
                        </h1>

                        <p className="post-page-location">
                            📍 {experiencia.local}
                        </p>

                    </div>


                    <div className="container post-page-image">

                        <Image
                            src={experiencia.imagem}
                            alt={experiencia.titulo}
                            priority
                        />

                    </div>


                    <div className="container post-page-content">

                        <div className="post-page-text">

                            {experiencia.texto.map((paragrafo, index) => (
                                <p key={index}>
                                    {paragrafo}
                                </p>
                            ))}

                        </div>


                        <div className="post-gallery">

                            <span className="section-tag">
                                MOMENTOS
                            </span>

                            <h2>
                                Alguns registros
                            </h2>

                            <div className="post-gallery-grid">

                                {experiencia.galeria.map((foto, index) => (
                                    <div
                                        className="post-gallery-item"
                                        key={index}
                                    >

                                        <Image
                                            src={foto}
                                            alt={`${experiencia.titulo} - foto ${index + 1}`}
                                        />

                                    </div>
                                ))}

                            </div>

                        </div>

                    </div>

                </article>

            </main>

            <Footer />
        </>
    );
}