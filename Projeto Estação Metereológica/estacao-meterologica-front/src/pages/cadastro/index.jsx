import { useState } from 'react';
import Header from '../../components/header';
import './cadastro.css';

export default function Cadastro() {

    const [form, setForm] = useState({
        nome: '',
        endereco: '',
        email: '',
        celular: '',
        documento: ''
    });

    const [erro, setErro] = useState('');
    const [sucesso, setSucesso] = useState('');
    const [loading, setLoading] = useState(false);

    function handleChange(e) {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
    }

    function handleSubmit(e) {
        e.preventDefault();

        if (Object.values(form).some(campo => campo.trim() === '')) {
            setErro('Preencha todos os campos.');
            setSucesso('');
            return;
        }

        setErro('');
        setSucesso('');
        setLoading(true);

        // Simulação de salvamento
        setTimeout(() => {
            localStorage.setItem("dadosUsuario", JSON.stringify(form));

            setSucesso('Dados salvos com sucesso!');
            setLoading(false);
        }, 1200);
    }

    return (
        <div className="cadastro-container">
            <Header />

            <div className="cadastro-content">

                <div className="cadastro-header">
                    <h1>Cadastro de dados</h1>
                    <p>Gerencie suas informações pessoais</p>
                </div>

                <form className="cadastro-form" onSubmit={handleSubmit}>

                    <div className="form-grid">

                        <div className="input-group">
                            <label>Nome completo</label>
                            <input 
                                type="text"
                                name="nome"
                                placeholder="Digite seu nome"
                                value={form.nome}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="input-group">
                            <label>Email</label>
                            <input 
                                type="email"
                                name="email"
                                placeholder="Digite seu email"
                                value={form.email}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="input-group">
                            <label>Endereço</label>
                            <input 
                                type="text"
                                name="endereco"
                                placeholder="Digite seu endereço"
                                value={form.endereco}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="input-group">
                            <label>Celular</label>
                            <input 
                                type="text"
                                name="celular"
                                placeholder="(00) 00000-0000"
                                value={form.celular}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="input-group full">
                            <label>Documento</label>
                            <input 
                                type="text"
                                name="documento"
                                placeholder="CPF ou RG"
                                value={form.documento}
                                onChange={handleChange}
                            />
                        </div>

                    </div>

                    {erro && <div className="msg erro">{erro}</div>}
                    {sucesso && <div className="msg sucesso">{sucesso}</div>}

                    <button 
                        className="btn-salvar"
                        disabled={loading}
                    >
                        {loading ? <span className="spinner"></span> : "Salvar dados"}
                    </button>

                </form>

            </div>
        </div>
    );
}