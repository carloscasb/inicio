
interface BotaoProps {
    cor?: 'green' | 'Blue' | 'gray'
    className?: string
    children:any
    onClick?: () => void
}

export default function Botao(props){

    return(
       <button  onClick={props.onClick} className={`
        bg-gradient-to-r from-blue-400 to-blue-700
         text-white px-4 py-2 rounded-md mb-4 mr-3
       `}>
        {props.children}
       </button>

    )
}