import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUser, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import imgEstacao from '../../assets/estacao.png';
import './register.css';

export default function Register() {

    const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmaSenha, setConfirmaSenha] = useState('');

    const [erro, setErro] = useState('');
    const [loading, setLoading] = useState(false);
    const [mostrarSenha, setMostrarSenha] = useState(false);

    const navigate = useNavigate();

    const senhaForte = senha.length >= 6;
    const senhaConfere = senha === confirmaSenha;
    const isFormValid = usuario.length >= 3 && senhaForte && senhaConfere;

    async function handleRegister(e) {
        e.preventDefault();

        if (!isFormValid) {
            setErro("Preencha corretamente os campos.");
            return;
        }

        setErro('');
        setLoading(true);

        setTimeout(() => {
            console.log("Usuário cadastrado:", usuario);

            setLoading(false);
            navigate("/");
        }, 1200);
    }

    return (
        <section className="login-container">
            <div className="login-box">

                {/* IMAGEM */}
                <div className="login-image">
                    <img src={imgEstacao} alt="Estação Meteorológica" />
                    <div className="image-overlay">
                        <h1>Bem-vindo à Estação Meteorológica SESI SENAI</h1>
                        <p>Monitoramento climático em tempo real</p>
                    </div>
                </div>

                {/* FORM */}
                <div className="login-form-side">
                    <div className="form-wrapper">

                        <h2>Criar conta</h2>
                        <p>Cadastre-se para acessar o sistema</p>

                        <form onSubmit={handleRegister} noValidate>

                            {/* USUÁRIO */}
                            <div className={`input-group ${erro ? "error" : ""}`}>
                                <FaUser className="input-icon" />
                                <input
                                    type="text"
                                    placeholder="Usuário"
                                    value={usuario}
                                    onChange={(e) => setUsuario(e.target.value)}
                                    autoComplete="username"
                                />
                            </div>

                            {/* SENHA */}
                            <div className={`input-group ${erro ? "error" : ""}`}>
                                <FaLock className="input-icon" />

                                <input
                                    type={mostrarSenha ? "text" : "password"}
                                    placeholder="Senha"
                                    value={senha}
                                    onChange={(e) => setSenha(e.target.value)}
                                />

                                <span
                                    className="toggle-password"
                                    onClick={() => setMostrarSenha(!mostrarSenha)}
                                >
                                    {mostrarSenha ? <FaEyeSlash /> : <FaEye />}
                                </span>
                            </div>

                            {/* CONFIRMAR SENHA */}
                            <div className={`input-group ${erro ? "error" : ""}`}>
                                <FaLock className="input-icon" />
                                <input
                                    type="password"
                                    placeholder="Confirmar senha"
                                    value={confirmaSenha}
                                    onChange={(e) => setConfirmaSenha(e.target.value)}
                                />
                            </div>

                            {/* FORÇA DA SENHA */}
                            <div className={`password-strength ${senhaForte ? "strong" : "weak"}`}>
                                {senha.length === 0 ? "" : senhaForte ? "Senha forte" : "Mínimo 6 caracteres"}
                            </div>

                            {/* ERRO */}
                            {erro && <div className="erro-msg">{erro}</div>}

                            {/* BOTÃO */}
                            <button
                                type="submit"
                                className="btn-login"
                                disabled={!isFormValid || loading}
                            >
                                {loading ? <span className="spinner"></span> : "Cadastrar"}
                            </button>

                            <div className="form-footer">
                                <span>
                                    Já tem conta? <Link to="/">Fazer login</Link>
                                </span>
                            </div>

                        </form>
                    </div>
                </div>

            </div>
        </section>
    );
}