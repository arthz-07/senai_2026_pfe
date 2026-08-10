import Header from '../../components/header';
import './relatorio.css';
import '../../components/graficoBarra';
import GraficoBarra from '../../components/graficoBarra';

export default function Relatorio(){

    const leituras = [
        {horario: "06h00", qualidadeAr: "Boa", iqar: 57, temperatura: "22°C", umidade: "80%"},
        {horario: "12h00", qualidadeAr: "Moderada", iqar: 56, temperatura: "31°C", umidade: "55%"},
        {horario: "18h00", qualidadeAr: "Moderada", iqar: 61, temperatura: "29°C", umidade: "62%"},
        {horario: "00h00", qualidadeAr: "Boa", iqar: 59, temperatura: "24°C", umidade: "84%"}
    ];

    return(
        <div className="dashboard-container">

            <Header />

            <div className="relatorio-container">

                {/* HEADER */}
                <div className="relatorio-header">
                    <h1>Relatório Meteorológico</h1>
                    <p>Monitoramento de temperatura, umidade e qualidade do ar</p>
                </div>

                {/* CARDS RESUMO */}
                <div className="resumo-cards">
                    <div className="card">
                        <h6>🌡️ Média Temp.</h6>
                        <h2>26°C</h2>
                    </div>

                    <div className="card">
                        <h6>💧 Média Umidade</h6>
                        <h2>70%</h2>
                    </div>

                    <div className="card">
                        <h6>🌫️ IQAr Médio</h6>
                        <h2>58</h2>
                    </div>
                </div>

                {/* GRÁFICO */}
                <div className="box">
                    <h3>📈 Evolução da Temperatura</h3>
                    <div className="grafico-placeholder">
                        <GraficoBarra />
                    </div>
                </div>

                {/* TABELA */}
                <div className="box">
                    <h3>📋 Leituras Detalhadas</h3>

                    <table>
                        <thead>
                            <tr>
                                <th>Horário</th>
                                <th>Qualidade do Ar</th>
                                <th>IQAr</th>
                                <th>Temperatura</th>
                                <th>Umidade</th>
                            </tr>
                        </thead>

                        <tbody>
                            {leituras.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.horario}</td>
                                    <td>
                                        <span className={`status ${item.qualidadeAr.toLowerCase()}`}>
                                            {item.qualidadeAr}
                                        </span>
                                    </td>
                                    <td>{item.iqar}</td>
                                    <td>{item.temperatura}</td>
                                    <td>{item.umidade}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                </div>

            </div>
        </div>
    )
}