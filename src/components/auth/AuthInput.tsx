import { Props } from "next/script"

interface AuthInputProps {
    label: string
    // tipo: 'text' | 'email' | 'password'
    tipo?: 'text' | 'email' | 'password'
    valor: any
    obrigatorio?: boolean
    valorMudou: (novoValor: any) => void

}

export default function AuthInput(props: AuthInputProps) {

    return (

        <div className={`flex flex-col mt-4`}>
            <label > {props.label} </label>
            <input
                //type="text" 
                type={props.tipo ?? "text"}
                value={props.valor}
                // onChange = {e => e.target.value}
                onChange={e => props.valorMudou?.(e.target.value)}
                required={props.obrigatorio}
                className={`px-4 py-3
                rounded-lg bg-gray-300 mt-2
                border focus:border-blue-400 focus:bg-white
                focus:outline nome
                `}
            />
        </div>
    )
}