import styles from "./sectionTitle.module.css";

export default function SectionTitle({
    tag,
    title,
    description,
    center = false
}) {

    return (

        <div
            className={`${styles.wrapper} ${
                center ? styles.center : ""
            }`}
        >

            <span>

                {tag}

            </span>

            <h2>

                {title}

            </h2>

            <p>

                {description}

            </p>

        </div>

    );

}