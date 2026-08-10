import './App.css'
import Saudacao from './Components/bemVindo.jsx'
import Avatar from './Componentes/meuAvatar.jsx'
import fotoPerfil from './assets/img/namorada.jpg'
import PropsNomeado from './Components/propsNomeado.jsx'

function App() {
  return (
    // <Saudacao titulo = 'Aprendendo Props/Properties/Propriedades'
    // texto = 'Bem vindo' nome = 'Amorim!' />

    // <Avatar titulo = 'Quem sou eu?'
    // fotoPerfil = {fotoPerfil}
    // nome = 'Meu nome é Arthur Amorim,' idade = 'tenho 17 anos.' estiloMusical = 'Meu estilo de música favorito é gospel'
    // disciplinaFavorita = 'e Língua Portuguesa é minha matéria favorita.' />

    <PropsNomeado titulo = 'Usando Props Nomeado'
    subtitulo = 'Aprendendo props named' />
  )
}

export default App


