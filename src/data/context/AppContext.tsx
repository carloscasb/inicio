import { SERVER_PROPS_ID } from "next/dist/shared/lib/constants";
import { createContext, useEffect, useState } from "react";

//criando um tipo com valores literais
//type Tema= 'dark' | ''
//TIRANDO GENERICO
interface AppContextProps {
         tema?: string
         alternarTema?: () => void
  }

//Não pode passar valores diferentes do AppContextProps
//const AppContext = createContext<AppContextProps>({
 //   tema: null,
//   alternarTema:null
//})

//Quando for opcional (?) não preciso inicializar com uma valor como feito acima 
// então so crio a AppContext
const AppContext = createContext<AppContextProps>({})


// provider = (provedor) prover os dados
 export function AppProvider(props){
//const [tema, setTema] = useState('dark')

   //Estado para alterar 'dark' // TIRAR O GENERICO
  // const [tema, setTema] = useState<Tema>('')
   const [tema, setTema] = useState('')
//PODERIA SER VALOR INICAL DARK
   //const [tema, setTema] = useState('dark')


   function alternarTema() {
      console.log(alternarTema)
      setTema (tema === '' ? 'dark' : '' )
      const novoTema = tema === '' ? 'dark' : ''
      setTema(novoTema)
      localStorage.setItem('tema', novoTema)
  }

  useEffect(() => {
   const temaSalvo = localStorage.getItem('tema')
   setTema(temaSalvo)
}, [])


    return (
       <AppContext.Provider value={{
        //tema: 'dark',
        tema,
        alternarTema
       }}>
            {props.children}
       </AppContext.Provider>

    )
 }

export default AppContext
