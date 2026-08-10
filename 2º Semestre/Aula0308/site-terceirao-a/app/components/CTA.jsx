import Link from "next/link";

export default function CTA() {
  return (
    <section className = "cta">

      <div className = "container">

        <span className = "section-tag">
          3º ANO A • SESI MIRANDÓPOLIS CE 323
        </span>

        <h2>
          Nosso último ano, nossas melhores lembranças.
        </h2>

        <p>
          Cada aula, projeto e amizade fez parte da nossa história.
          Este site representa um pouco da trajetória da turma do
          3º Ano A.
        </p>

        <Link href = "/fotos" className = "cta-button">
          Ver Galeria
        </Link>

      </div>

    </section>
  );
}