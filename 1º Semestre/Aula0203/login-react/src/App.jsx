import './App.css'
import logosesisenai from './assets/img/alianca.webp'

export default function App() {

  return (
    <>

    <div className="container">
      <img src={logosesisenai} alt="logo do Sesi Senai" className="logo" />

      <h1 className='titulo'> Login </h1>
      <spam className="subtitulo"> para continuar </spam>
      <label htmlFor="nome" className="label"> NOME </label>
      <input className="campo" id='nome' placeholder='Seu nome' />

      <label htmlFor="senha" className="label"> SENHA </label>
      <input type="text" className="campo" id='senha' placeholder='**********' />

      <button className="botao"> Log in </button>

      <a className="textoFooter"> Esqueceu a senha? </a>
      <a className="textoFooter"> Cadastre-se! </a>

    </div>

  
    </>
  )
}

//export default App;
