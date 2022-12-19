import useAuth from "../../data/hook/useAuth"
import { IconeAjustes, IconeCasa, IconeCrud, IconeSair, IconeSino } from "../icons"
import Logo from "./Logo"
import MenuItem from "./MenuItem"

interface MenuLateral {
    titulo: string
    subtitulo: string
}

export default function MenuLateral() {

    const{logout} = useAuth()

            return (
                <aside className={`
                    flex flex-col
                    bg-gray-200 text-gray-700
                    dark:bg-gray-900 dark:text-gray-200
                         `}>
            <div
                className={`
                            bg-gradient-to-r from-indigo-500 via-slate-400 bg-purple-600 
                            w-20 h-20 flex flex-col justify-center items-center
                          `}>
                <Logo />
            </div>

            <ul className={"flex-grow"} >
                <MenuItem url="/" texto="Inicio" icone={IconeCasa} />
                <MenuItem url="/ajustes" texto="Ajustes" icone={IconeAjustes} />
                <MenuItem url="/notificacoes" texto="Notificação" icone={IconeSino} />
                <MenuItem url="/crudinicio" texto="Crud" icone={IconeCrud} />

            </ul>
            <ul  >

                <MenuItem texto="Sair" icone={IconeSair}
                   // onClick={() => console.log('logout') }
                    onClick={logout}
                            className={`
                        text-red-600 dark:text-red-400
                        hover:bg-red-400 hover:text-white
                        dark:hover:text-white
                                    `}
                />
            </ul>
        </aside>
    )
}