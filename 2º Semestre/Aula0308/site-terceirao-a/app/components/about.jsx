import Image from "next/image";
import Link from "next/link";

import Turma from "../img/antigaSala.jpeg";

export default function About() {
  return (
    <section className="about">

      <div className="container about-content">

        <div className="about-image">

          <Image
            src={Turma}
            alt = "Turma 3º Ano A"
          />

        </div>

        <div className = "about-text">

          <span className="section-tag">
            SOBRE A TURMA
          </span>

          <h2>
            Muito mais que colegas.
            Somos uma equipe.
          </h2>

          <p>
            O 3º Ano A da Escola SESI de Mirandópolis reúne alunos
            comprometidos, criativos e preparados para enfrentar
            novos desafios. Ao longo do Ensino Médio construímos
            amizades, desenvolvemos projetos e vivemos momentos
            inesquecíveis.
          </p>

          <ul>

            <li> ✔ Trabalho em equipe </li>

            <li> ✔ Projetos escolares </li>

            <li> ✔ Espírito de colaboração </li>

            <li> ✔ Aprendizado constante </li>

          </ul>

          <Link href="/sobre" className="about-button">
            Saiba mais
          </Link>

        </div>

      </div>

    </section>
  );
}