import Image from "next/image";
import Turma from "../img/antigaSala.jpeg";

export default function Hero() {
  return (
    <section className="hero">

      <Image
        src={Turma}
        alt="Turma do 3º Ano A"
        fill
        priority
        className="hero-image"
      />

      <div className="hero-overlay"></div>

      <div className="hero-content container">

        <span className="hero-tag">
          ESCOLA SESI MIRANDÓPOLIS
        </span>

        <h1>3º Ano A</h1>

        <p>
          Uma turma formada por amizade, dedicação,
          aprendizado e momentos que marcarão nossa
          trajetória para sempre.
        </p>

        <a href="/sobre" className="hero-button">
          Conheça Nossa Turma
        </a>

      </div>

    </section>
  );
}