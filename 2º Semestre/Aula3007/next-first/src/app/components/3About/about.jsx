import Image from "next/image";
import styles from "./about.module.css";

import Hotel from "../../imges/hotel.jpeg";

export default function About() {
    return (
        <section id="sobre" className={styles.about}>

            <div className="container">

                <div className={styles.header}>

                    <span>NOSSA ESSÊNCIA</span>

                    <h2>
                        Muito mais do que um lugar para dormir.
                    </h2>

                    <p>
                        Cada detalhe foi pensado para proporcionar conforto,
                        tranquilidade e uma experiência acolhedora para nossos hóspedes.
                    </p>

                </div>

                <div className={styles.content}>

                    <div className={styles.imageWrapper}>

                        <Image
                            src={Hotel}
                            alt="Inn Terraço Hotel"
                            fill
                            className={styles.image}
                        />

                    </div>

                    <div className={styles.text}>

                        <h3>Hospitalidade em cada detalhe.</h3>

                        <p>
                            No Inn Terraço Hotel acreditamos que uma boa
                            hospedagem vai além de um quarto confortável.
                            Ela começa no atendimento, continua nos ambientes
                            acolhedores e termina com uma experiência que o
                            hóspede deseja repetir.
                        </p>

                        <ul>

                            <li>✓ Atendimento personalizado</li>

                            <li>✓ Quartos confortáveis</li>

                            <li>✓ Ambiente tranquilo</li>

                            <li>✓ Excelente localização</li>

                        </ul>

                    </div>

                </div>

            </div>

        </section>
    );
}