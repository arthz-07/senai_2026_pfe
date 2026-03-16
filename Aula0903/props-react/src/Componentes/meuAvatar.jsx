

export default function MeuAvatar(props){
    return(
        <>
            <h1> {props.titulo} </h1>
            <img src={props.fotoPerfil} alt="teste" />
            <h4> {props.nome} {props.idade} {props.estiloMusical} {props.disciplinaFavorita} </h4>
        </>
    )
}