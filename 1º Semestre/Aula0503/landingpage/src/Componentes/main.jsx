import imgMusculacao from '../assets/IMG/musculacao.jpg';
import imgCardio from '../assets/IMG/cardio.jpg';
import imgIoga from '../assets/IMG/ioga.jpg';



export default function Main(){
    return(
        <main>
            <section id="home" className="hero">
                <div className="hero-text">
                    <h2>Transforme seu corpo com a <span>FoFitness</span></h2>
                    <p>A academia perfeita para quem deseja saúde, diversão e um shape incrível!</p>
                    <button>Começar agora</button>
                    </div>
            </section>
            
            
            
            <section id="sobre">
                <div  className="container">
                    <h2> Sobre nós! </h2>
                    <p> Somos uma academia focada em perda de peso com saúde e sem dietas mirabolantes!
                        Vem pra cá e afine igual um palitinho! </p>
               </div>
            </section>
            
            
            
            <section id="modalidades" className="reveal">
                <h2>Modalidades</h2>
                <div className="grid-modalidades">
                    <div className="exercicio">
                        <h3>Musculação</h3>
                        <img src={imgMusculacao} alt="Musculação"/>
                    </div>

                    <div className="exercicio">
                        <h3>Cardio</h3>
                        <img src={imgCardio} alt="Cardio"/>
                    </div>

                    <div className="exercicio">
                        <h3>Ioga</h3>
                        <img src={imgIoga} alt="Ioga"/>
                    </div>
                </div>
            </section>


            <section id = "planos" className="reveal">
                <h2> Planos e Preços </h2>
                <div className="grid-planos">
                    <div className="tabela-planos">
                        <h3> Básico </h3>
                        <p className="preco"> R$ 79,99/mês </p>
                        <ul>
                            <li> Acesso à musculação </li>
                            <li> Aulas Coletivas limitadas </li>
                            <li> Horário livre </li>
                        </ul>
                    </div>

                    <div className="tabela-planos">
                        <h3> Premium </h3>
                        <p className="preco"> R$ 129,90/mês </p>
                        <ul>
                            <li> Acesso total </li>
                            <li> Personal Trainer 1x/semana </li>
                            <li> Yoga & Funcional </li>
                        </ul>
                    </div>

                    <div className="tabela-planos">
                        <h3> VIP </h3>
                        <p className="preco"> R$ 199,90/mês </p>
                        <ul>
                            <li> Personal exclusivo </li>
                            <li> Nutricionista </li>
                            <li> Acompanhamento mensal </li>
                            <li> Bom dia da atendente Gaby Marcelino! </li>
                        </ul>
                    </div>
                </div>
            </section>



            <section id="depoimentos" className="reveal">
                <h2> O que nossos alunos dizem: </h2>
                <div className="depoimento">
                    <p> “A melhor academia de Mirandópolis que já frequentei!
                        Ambiente leve, motivador, confortável e climatizado.” </p>
                        <span> Arthur Amorim Tomazi </span>
                </div>

                <div className="depoimento">
                    <p> “Professores incríveis e estrutura impecável. Recomendo muito!”  </p>
                        <span> Pedro Paulo Seleghim Venancio </span>
                </div>
            </section>

            <section id="contato" className="contato">
                <h2> Entre em contato! </h2>
                <form action="">
                    <input type="text" placeholder="Seu nome" />
                    <input type="text" placeholder="Seu e-mail" />
                    <textarea name="" id="" placeholder="Mensagem"></textarea>
                    <button type="submit"> Enviar </button>
                </form>
            </section>
        </main>
    )
}