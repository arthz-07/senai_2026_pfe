import Image from "next/image";
import styles from "./gallery.module.css";

import Hotel from "../../img/inn_hotel.jpeg";

export default function Gallery() {

    const imagens = [Hotel, Hotel, Hotel, Hotel];

    return (

        <section
            id="galeria"
            className={styles.gallery}
        >

            <div className="container">

                <div className={styles.heading}>

                    <span>GALERIA</span>

                    <h2>
                        Conheça nossos espaços.
                    </h2>

                    <p>
                        Ambientes planejados para proporcionar
                        conforto, tranquilidade e bem-estar.
                    </p>

                </div>

                <div className={styles.grid}>

                    {imagens.map((imagem, index) => (

                        <div
                            key={index}
                            className={`${styles.card} ${
                                index === 0 || index === 3
                                    ? styles.large
                                    : ""
                            }`}
                        >

                            <Image
                                src={imagem}
                                alt="Inn Terraço Hotel"
                                fill
                                className={styles.image}
                            />

                        </div>

                    ))}

                </div>

            </div>

        </section>

    );

}