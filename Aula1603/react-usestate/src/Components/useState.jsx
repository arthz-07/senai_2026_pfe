import { useState } from "react";

export default function UseState({titulo}){
    const [nome, setNome] = useState('Amorim');
    const [idade, setIdade] = useState(17);
    const [ra, setRA] = useState(2648);
    const [bolsa, setBolsa] = useState(500);

    return(
        <>
            <h1> {titulo} </h1>
            <h3> Nome do Aluno: {nome} </h3>
            <h4> Idade do Aluno: {idade} </h4>
            <h4> RA do Aluno: {ra} </h4>
            <h4> Tem bolsa de: {bolsa} reais </h4>


        
        
        </>
    )

}