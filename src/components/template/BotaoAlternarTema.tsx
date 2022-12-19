import { IconeLua, IconeSol } from "../icons"

interface BotaoAlternarTemaProps{
    tema: string
    altenarTema: () => void
}

export default function BotaoAlternarTema(props: BotaoAlternarTemaProps){

    // PODE FAZER NO ICONE UMA FUNÇÂO DE TAMANHO

    /***
     * 
     * export const IconeSol = (tamanho = 6) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={`h-${tamanho} w-${tamanho}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>


    E PASSAR UMA VALOR NA FUNÇÂO
    {IconeSol(4)}
)
     */
    return props.tema === 'dark' ? (
        <div onClick={props.altenarTema} className={`
        hidden sm:flex items-center cursor-pointer
        bg-gradient-to-r from-yellow-300 to-yellow-600
        w-14 lg:w-24 h-8 p-1 rounded-full
        `}>
            <div className={`
            flex items-center justify-center
            bg-white text-yellow-600
            w-6 h-6 rounded-full        
        `}>
            
                {IconeSol}
            </div>
            <div className={`
             hidden lg:flex items-center ml-4
             text-white
        
        `}>
                <span>Claro</span>
            </div>

        </div>

    ):(
        <div onClick={props.altenarTema} className={`
            hidden sm:flex items-center justify-end cursor-pointer
            bg-gradient-to-r from-gray-500 to-gray-900
            w-14 lg:w-24 h-8 p-1 rounded-full
        `}>
            <div className={`
                hidden lg:flex items-center mr-2
                text-gray-300
            `}>
                <span className="text-sm">Escuro</span>
            </div>
            <div className={`
                flex items-center justify-center
                bg-black text-yellow-300
                w-6 h-6 rounded-full
            `}>
                {IconeLua}
            </div>
        </div>
    )
}