"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./header.module.css";

export default function Header() {

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {

        const handleScroll = () => {
            setScrolled(window.scrollY > 40);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);

    }, []);

    return (

        <header
            className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}
        >

            <div className="container">

                <div className={styles.content}>

                    <Link href="/" className={styles.logo}>

                        <span className={styles.logoTitle}>
                            INN
                        </span>

                        <span className={styles.logoSubtitle}>
                            TERRAÇO HOTEL
                        </span>

                    </Link>

                    <nav>

                        <ul className={styles.menu}>

                            <Link href="/">Início</Link>

                            <Link href="#sobre">Hotel</Link>

                            <Link href="#suites">Suítes</Link>

                            <Link href="#galeria">Galeria</Link>

                            <Link href="#contato">Contato</Link>

                        </ul>

                    </nav>

                    <a
                        href="#contato"
                        className={styles.button}
                    >
                        Reservar
                    </a>

                </div>

            </div>

        </header>

    );

}