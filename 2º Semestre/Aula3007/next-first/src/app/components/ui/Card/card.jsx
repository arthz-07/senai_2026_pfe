import styles from "./Card.module.css";

export default function Card({
    icon,
    title,
    description
}) {

    return (

        <article className={styles.card}>

            <div className={styles.icon}>

                {icon}

            </div>

            <h3>

                {title}

            </h3>

            <p>

                {description}

            </p>

        </article>

    );

}