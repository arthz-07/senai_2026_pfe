'use client';

import { useState } from "react";
import Header from "../components/header";

export default function Calculadora() {

    const [n1, setN1] = useState(0);
    const [n2, setN2] = useState(0);
    const [result, setResult] = useState(0);


    function Somar(n1, n2) {
        setResult(Number(n1) + Number(n2));
    }


    function Subtrair(n1, n2) {
        setResult(Number(n1) - Number(n2));
    }


    function Multiplicar(n1, n2) {
        setResult(Number(n1) * Number(n2));
    }


    function Dividir(n1, n2) {

        if (Number(n2) === 0) {
            setResult("Não é possível dividir por zero");
            return;
        }

        setResult(Number(n1) / Number(n2));
    }


    function RaizQuadrada(n1) {

        if (Number(n1) < 0) {
            setResult("Não é possível calcular a raiz de número negativo");
            return;
        }

        setResult(Math.sqrt(Number(n1)));
    }


    return (
        <>
            <Header />

            <main className="calculadora">

                <h1>
                    Calculadora
                </h1>

                <p className="calculadora-subtitulo">
                    Faça seus cálculos de forma simples
                </p>


                <div className="calculadora-campo">

                    <label htmlFor="n1">
                        Número 1
                    </label>

                    <input
                        id="n1"
                        type="number"
                        value={n1}
                        onChange={(e) => setN1(e.target.value)}
                    />

                </div>


                <div className="calculadora-campo">

                    <label htmlFor="n2">
                        Número 2
                    </label>

                    <input
                        id="n2"
                        type="number"
                        value={n2}
                        onChange={(e) => setN2(e.target.value)}
                    />

                </div>


                <div className="calculadora-botoes">

                    <button onClick={() => Somar(n1, n2)}>
                        + Somar
                    </button>

                    <button onClick={() => Subtrair(n1, n2)}>
                        − Subtrair
                    </button>

                    <button onClick={() => Multiplicar(n1, n2)}>
                        × Multiplicar
                    </button>

                    <button onClick={() => Dividir(n1, n2)}>
                        ÷ Dividir
                    </button>

                    <button onClick={() => RaizQuadrada(n1)}>
                        √ Raiz quadrada
                    </button>

                </div>


                <div className="calculadora-resultado">

                    <span>
                        Resultado
                    </span>

                    <strong>
                        {result}
                    </strong>

                </div>

            </main>
        </>
    );
}