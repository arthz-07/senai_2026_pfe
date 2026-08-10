import styles from "./experience.module.css";

const experience = [
    {
        icon: "🛏️",
        title: "Quartos Elegantes",
        description:
            "Ambientes confortáveis e planejados para proporcionar uma estadia tranquila."
    },
    {
        icon: "☕",
        title: "Café da Manhã",
        description:
            "Uma seleção de sabores para começar o dia com energia."
    },
    {
        icon: "📍",
        title: "Localização Estratégica",
        description:
            "Próximo aos principais pontos da cidade, facilitando sua viagem."
    },
    {
        icon: "🤝",
        title: "Atendimento Personalizado",
        description:
            "Hospitalidade e atenção em cada momento da sua experiência."
    }
];

export default function Experience() {
    return (
        <section id="estrutura" className={styles.section}>

            <div className="container">

                <div className={styles.heading}>
                    <span>A EXPERIÊNCIA INN</span>

                    <h2>
                        Muito além da hospedagem.
                    </h2>

                    <p>
                        Descubra os diferenciais que tornam cada estadia
                        mais confortável e especial.
                    </p>
                </div>

                <div className={styles.grid}>

                    {experience.map((item, index) => (

                        <article
                            key={index}
                            className={styles.card}
                        >

                            <div className={styles.icon}>
                                {item.icon}
                            </div>

                            <div>

                                <h3>{item.title}</h3>

                                <p>{item.description}</p>

                            </div>

                        </article>

                    ))}

                </div>

            </div>

        </section>
    );
}