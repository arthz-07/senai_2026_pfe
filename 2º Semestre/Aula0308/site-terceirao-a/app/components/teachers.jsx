import Image from "next/image";

import Prof1 from "../img/vinicius.jpeg";
import Prof2 from "../img/marcelo.jpg";
import Prof3 from "../img/eduardo.jpg";

const professores = [
    {
        nome: "Professor Eduardo",
        materia: "Língua Portguesa",
        foto: Prof3
    },

    {
        nome: "Professor Vinícius Camargo",
        materia: "SENAI Front-End",
        foto: Prof1
    },

    {
        nome: "Professor Marcelo Corrêa",
        materia: "SENAI Back-End",
        foto: Prof2
    }
];

export default function Teachers(){

    return(

        <section className="teachers">

            <div className="container">

                <span className="section-tag">
                    PROFESSORES
                </span>

                <h2>Nossos Professores</h2>

                <p>
                    Conheça alguns dos profissionais que fizeram
                    parte da nossa caminhada durante o Ensino Médio.
                </p>

                <div className="teachers-grid">

                    {professores.map((professor,index)=>(

                        <div className="teacher-card" key={index}>

                            <Image
                                src={professor.foto}
                                alt={professor.nome}
                            />

                            <h3>{professor.nome}</h3>

                            <span>{professor.materia}</span>

                        </div>

                    ))}

                </div>

            </div>

        </section>

    )

}