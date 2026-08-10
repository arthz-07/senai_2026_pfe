import { useEffect, useState } from "react";

export default function BuscaFeriado() {
    const [busca, setBusca] = useState("");
    const [feriados, setFeriados] = useState([]);
    const [resultado, setResultado] = useState([]);

    const criacaoFeriados = {
        "Confraternização Mundial": "1967",
        "Carnaval": "Tradição religiosa (data móvel)",
        "Sexta-feira Santa": "Tradição cristã (Século I)",
        "Páscoa": "Tradição cristã (Século I)",
        "Tiradentes": "1890",
        "Dia do Trabalho": "1889",
        "Corpus Christi": "Século XIII",
        "Independência do Brasil": "1822",
        "Nossa Senhora Aparecida": "1980",
        "Finados": "Século X",
        "Proclamação da República": "1889",
        "Natal": "Século IV"
    };

    useEffect(() => {
        fetch("https://brasilapi.com.br/api/feriados/v1/2026")
            .then(response => response.json())
            .then(data => {
                setFeriados(data);
                setResultado(data);
            })
            .catch(error => console.error("Erro:", error));
    }, []);

    useEffect(() => {
        const filtrados = feriados.filter((feriado) =>
            feriado.name.toLowerCase().includes(busca.toLowerCase())
        );
        setResultado(filtrados);
    }, [busca, feriados]);

    return (
        <div style={{
            fontFamily: "Arial",
            padding: "20px",
            maxWidth: "600px",
            margin: "0 auto"
        }}>
            <h1>Buscar Feriado 2026</h1>

            <input
                type="text"
                placeholder="Digite o nome do feriado..."
                value={busca}
                onChange={(e) => setBusca(e.target.value)}
                style={{
                    width: "100%",
                    padding: "10px",
                    borderRadius: "8px",
                    border: "1px solid #ccc",
                    marginBottom: "20px"
                }}
            />

            {resultado.length > 0 ? (
                resultado.map((feriado, index) => {
                    const data = new Date(feriado.date);

                    const dataFormatada = data.toLocaleDateString("pt-BR");

                    const diaSemana = data.toLocaleDateString("pt-BR", {
                        weekday: "long"
                    });

                    const criacao = criacaoFeriados[feriado.name] || "Desconhecida";

                    return (
                        <div key={index} style={{
                            border: "1px solid #bd70d0",
                            padding: "15px",
                            marginBottom: "10px",
                            borderRadius: "10px",
                            boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
                        }}>
                            <p><strong>Nome:</strong> {feriado.name}</p>
                            <p><strong>Data:</strong> {dataFormatada}</p>
                            <p><strong>Dia:</strong> {diaSemana}</p>
                            <p><strong>Criação:</strong> {criacao}</p>
                        </div>
                    );
                })
            ) : (
                <p>Nenhum feriado encontrado 😢</p>
            )}
        </div>
    );
}