import Image from "next/image";
import SectionTitle from "../ui/SectionTitle/SectionTitle";
import Button from "../ui/Button/Button";
import styles from "./Rooms.module.css";

export default function Rooms() {

    return (

        <section className={styles.rooms} id="suites">

            <div className="container">

                <SectionTitle
                    center
                    tag="Nossas Suítes"
                    title="Conforto e elegância em cada detalhe."
                    description="Projetadas para oferecer descanso, sofisticação e uma experiência inesquecível."
                />

                <div className={styles.room}>

                    <div className={styles.image}>

                        <Image
                            src="/images/quarto.jpg"
                            alt="Suíte Premium"
                            fill
                        />

                    </div>

                    <div className={styles.info}>

                        <span className={styles.category}>
                            Suíte Premium
                        </span>

                        <h3>
                            Um ambiente pensado para o seu descanso.
                        </h3>

                        <p>
                            Nossa Suíte Premium combina design moderno,
                            conforto absoluto e atendimento diferenciado
                            para proporcionar uma estadia memorável.
                        </p>

                        <ul>

                            <li>Wi-Fi de alta velocidade</li>

                            <li>Café da manhã incluso</li>

                            <li>Ar-condicionado</li>

                            <li>TV Smart</li>

                            <li>Frigobar</li>

                        </ul>

                        <Button href="/contato">

                            Reservar Agora

                        </Button>

                    </div>

                </div>

            </div>

        </section>

    );

}