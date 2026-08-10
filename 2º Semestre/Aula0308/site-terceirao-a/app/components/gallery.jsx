import Image from "next/image";
import Link from "next/link";

import Foto1 from "../img/foto1.png";
import Foto2 from "../img/foto2.png";
import Foto3 from "../img/foto3.png";
import Foto4 from "../img/foto4.png";
import Foto5 from "../img/foto5.png";
import Foto6 from "../img/foto6.png";

const fotos = [Foto1, Foto2, Foto3, Foto4, Foto5, Foto6];

export default function Gallery() {
  return (
    <section className="gallery">

      <div className="container">

        <span className="section-tag">
          GALERIA
        </span>

        <h2>
          Nossos melhores momentos
        </h2>

        <p>
          Alguns registros que representam nossa trajetória durante o Ensino Médio.
        </p>

        <div className="gallery-grid">

          {fotos.map((foto, index) => (
            <div className="gallery-card" key={index}>

              <Image
                src={foto}
                alt={`Foto ${index + 1}`}
              />

            </div>
          ))}

        </div>

        <Link href="/fotos" className="gallery-button">
          Ver galeria completa
        </Link>

      </div>

    </section>
  );
}