import useAppData from "../../data/hook/useAppData"
import AvatarUsuario from "./AvatarUsuario"
import BotaoAlternarTema from "./BotaoAlternarTema"
import Titulo from "./Titulo"

// Precisar receber
interface CabecalhoProps {
    titulo: string
    subtitulo: string
        
    }
    
    export default function Cabecalho(props: CabecalhoProps){
    
        //Constante de alternar Estado 
        const {tema, alternarTema} = useAppData()
    return(
        
    <div className={`flex`}>
    <Titulo  titulo={props.titulo} subtitulo={props.subtitulo} />    
    <div className={`   flex flex-grow justify-end items-center
    `}>
        <BotaoAlternarTema tema={tema} altenarTema={alternarTema} />
        <AvatarUsuario className={` ml-3`} />
    </div>
    </div>
    
    )
    
    }