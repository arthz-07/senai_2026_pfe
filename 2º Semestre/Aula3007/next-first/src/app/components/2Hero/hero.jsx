import Image from "next/image";
import Link from "next/link";

import styles from "./hero.module.css";

export default function Hero() {
    return (

        <section className={styles.hero}>

            <Image
            src="/images/hotel.jpeg"
            alt="Inn Terraço Hotel"
            fill
            priority
            className={styles.background}
            />

            <div className={styles.overlay}></div>

            <div className={`container ${styles.content}`}>

                <span className={styles.subtitle}>
                    HOTEL • CONFORTO • SOFISTICAÇÃO
                </span>

                <h1>
                    Sua melhor experiência
                    começa aqui.
                </h1>

                <p>

                    Descubra um ambiente pensado para quem
                    busca conforto, tranquilidade e um
                    atendimento de excelência.

                </p>

                <div className={styles.buttons}>

                    <Link
                        href="#contato"
                        className={styles.primary}
                    >
                        Reservar Agora
                    </Link>

                    <Link
                        href="#sobre"
                        className={styles.secondary}
                    >
                        Conheça o Hotel
                    </Link>

                </div>

            </div>

        </section>

    );
}