import Header from '../../components/header';
import './dashboard.css';

export default function Dashboard() {

    const dados = [
        { hora: "10:00", temp: 22, umidade: 65, vento: 10, pressao: 1011 },
        { hora: "11:00", temp: 24, umidade: 60, vento: 12, pressao: 1012 },
        { hora: "12:00", temp: 25, umidade: 58, vento: 12, pressao: 1013 },
    ];

    return(
        <div className="dashboard-container">

            <Header />

            {/* HEADER */}
            <div className="dashboard-header">
                <div>
                    <h1>Dashboard</h1>
                    <p>Monitoramento climático em tempo real</p>
                </div>

                <div className="header-info">
                    <span>📍 Mirandópolis - SP</span>
                    <span>Atualizado agora</span>
                </div>
            </div>

            {/* CARDS */}
            <section className="cards">
                
                <div className="card">
                    <div className="card-header">
                        <span>Temperatura</span>
                        <span className="status up">+2°C</span>
                    </div>
                    <h2>25°C</h2>
                    <p className="card-sub">Última hora</p>
                </div>

                <div className="card">
                    <div className="card-header">
                        <span>Umidade</span>
                        <span className="status down">-5%</span>
                    </div>
                    <h2>70%</h2>
                    <p className="card-sub">Última hora</p>
                </div>

                <div className="card">
                    <div className="card-header">
                        <span>Vento</span>
                        <span className="status stable">Estável</span>
                    </div>
                    <h2>12 km/h</h2>
                    <p className="card-sub">Sem variação</p>
                </div>

                <div className="card">
                    <div className="card-header">
                        <span>Pressão</span>
                        <span className="status up">+1 hPa</span>
                    </div>
                    <h2>1013 hPa</h2>
                    <p className="card-sub">Última hora</p>
                </div>

            </section>

            {/* GRÁFICOS */}
            <section className="dashboard-card">
                <h2>Gráficos</h2>
                <div className="chart-placeholder">
                    Em breve: visualização de dados em tempo real
                </div>
            </section>

            {/* TABELA */}
            <section className="grid-dados">
                <section className="data-box">
                    <h3>Leituras Meteorológicas</h3>

                    <table>
                        <thead>
                            <tr>
                                <th>Horário</th>
                                <th>Temperatura</th>
                                <th>Umidade</th>
                                <th>Vento</th>
                                <th>Pressão</th>
                            </tr>
                        </thead>

                        <tbody>
                            {dados.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.hora}</td>
                                    <td>{item.temp}°C</td>
                                    <td>{item.umidade}%</td>
                                    <td>{item.vento} km/h</td>
                                    <td>{item.pressao} hPa</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </section>
            </section>

        </div>
    )
}