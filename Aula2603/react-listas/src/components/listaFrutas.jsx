
const frutas = [
    { id: 1, nome: "🍎 Maçã", sabor: "Doce, fresco e levemente ácido", corClasse: "maça" },
    { id: 2, nome: "🍌 Banana", sabor: "Composto químico acetato de isoamila", corClasse: "banana" },
    { id: 3, nome: "🍊 Laranja", sabor: "Cítrico, ácido-adocicado e bastante suculento", corClasse: "laranja" },
    { id: 4, nome: "🍍 Abacaxi", sabor: "Tropical, marcante e refrescante, equilibrando acidez e dulçor", corClasse: "abacaxi" },
    { id: 5, nome: "🍇 Uva", sabor: "Doce", corClasse: "uva" },
    { id: 6, nome: "🍓 Morango", sabor: "Doce de aroma intenso", corClasse: "morango" },
    { id: 7, nome: "🍐 Pêra", sabor: "Doce, suave e muito suculento", corClasse: "pera" }
];

export default function ListaFrutas({ titulo }) {

    const frutasFiltradas = frutas.filter(fruta => fruta.nome.length > 5);

    return (
        <div>
            <h1> {titulo} </h1>

            <ul className="lista">
                {frutasFiltradas.map((fruta) => (
                    <li key={fruta.id} className= {`item ${fruta.corClasse}`}>
                        <h3>{fruta.nome}</h3>
                        <p>{fruta.sabor}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}