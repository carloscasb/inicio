import Link from "next/link"

//tonar a url não obrigatoria
interface MenuItemProps {
   
    texto: string
    icone: any 
    url?: string
    className?: string
    onClick: (evento: any) => void
        
    }

export default function MenuItem(props: MenuItemProps){

    function RenderizarLink (){
        return (
          <p className={`
                    flex flex-col justify-center items-center
                    h-20 w-20
                    dark:text-gray-200
                    ${props.className}
                `}>
                {props.icone}
                <span className={`text-xs font-light`}>
                    {props.texto}
                </span>
            </p> 
        )
    }
       
        //Pode fazer uma condicional, casso url seja passada faz Link  caso não sem Link

    return (
        <li onClick={props.onClick} className={`
        hover:bg-gray-100 dark:hover:bg-gray-800
        cursor-pointer
                
        `}>
            
            {props.url ? (
                 <Link href={props.url} >
                 {RenderizarLink()}
                   
              </Link>
            ):(
                RenderizarLink()

            ) }

           
        </li>
        

    )

}