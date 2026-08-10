import {
    FaUserGraduate,
    FaBookOpen,
    FaAward,
    FaCamera
} from "react-icons/fa";

export default function Highlights(){

    return(

        <section className="highlights">

            <div className="container">

                <h2>Nossa Turma</h2>

                <div className="cards">

                    <div className="card">

                        <FaUserGraduate/>

                        <h3>30</h3>

                        <p>Alunos</p>

                    </div>

                    <div className="card">

                        <FaBookOpen/>

                        <h3>15</h3>

                        <p>Projetos/Apresentações realizadas</p>

                    </div>

                    <div className="card">

                        <FaAward/>

                        <h3>2026</h3>

                        <p>Último Ano</p>

                    </div>

                    <div className="card">

                        <FaCamera/>

                        <h3>Fotos</h3>

                        <p>Momentos especiais</p>

                    </div>

                </div>

            </div>

        </section>

    )

}