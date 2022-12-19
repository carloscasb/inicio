import useAppData from "../../data/hook/useAppData"
//import forcandoAutenticacao from "../../functions/forcandoAutenticacao"
import ForcarAutenticacao from "../auth/ForcarAutenticacao"
import Cabecalho from "./Cabecalho"
import Conteudo from "./Conteudo"
import MenuLateral from "./MenuLateral"

interface LayoutProps {
    titulo: string
    subtitulo: string
    children?: any

}

export default function Layout(props: LayoutProps) {
    const { tema } = useAppData()

    return (
        // <div className={' dark flex h-screen w-screen   '}>
        <ForcarAutenticacao>
            <div className={`${tema} flex h-screen w-screen   `}>
                <MenuLateral />
                <div className={'flex w-full p-7 flex-col bg-gray-400 dark:bg-gray-800   '}>
                    <Cabecalho titulo={props.titulo} subtitulo={props.subtitulo} />

                    <Conteudo>
                        {props.children}
                    </Conteudo>
                </div>
            </div>
        </ForcarAutenticacao>
    )

}