        import Cliente from "../core/Cliente"
        import { IconeDelete, IconeEdit } from "./icons"

        interface TabelaProps {
            clientes: Cliente[]
            //funções
            clienteSelecionado?: (cliente: Cliente) => void
            clienteExcluido?: (cliente: Cliente) => void
        }

        export default function Tabela(props: TabelaProps) {

            //BASTA TER UMA AÇÃO PARA EXIBIR
            const exibirAcao = props.clienteSelecionado || props.clienteExcluido

            function renderizarCabecalho() {
                return (
                <tr>
                    <th className=" text-left p-4" >Código</th>
                    <th className=" text-left p-4" >Nome</th>
                    <th className=" text-left p-4" >Idade</th>
                   
                   {exibirAcao? <th className="  p-4" >Ações</th>:false} 
                </tr>
                )
            }

            //PUXAR DADOS (renderizar)
            function renderizarDados() {
                return props.clientes?.map((cliente, i) => {
                    return (
                    <tr key={cliente.id}  
                     //APLICAR A COR SIM COR NÂO NAS LISTA
                 className={`${i % 2 === 0 ? `bg-purple-200`  :`bg-purple-100`}`}
                        >
                        <td className=" text-left p-4" >{cliente.id}</td>
                        <td className=" text-left p-4">{cliente.nome}</td>
                        <td className=" text-left p-4">{cliente.idade}</td>
                        
                        {renderizarAcao(cliente)} 
                   </tr>
                    )
                })
            }
            //TEM QUE PASSAR O CLIENTE ESPECIFICO
            function renderizarAcao(cliente: Cliente) {
                return (
                    //mesma linha
                    // SO MOSTRA BUTTON SE CLIENTE SELECIONADO
                    // onClick nos botões
                    <td className="flex justify-center">

                        {props.clienteSelecionado? (
                        <button onClick={() => props.clienteSelecionado?.(cliente)} className={` 
                         flex justify-center items-center p-2 m-1
                          text-green-600 rounded-full
                         hover:bg-purple-300
                        `}>
                            {IconeEdit}
                            </button>
                        ): false}

                        {props.clienteExcluido?(
                            <button onClick={() => props.clienteExcluido?.(cliente)} className={` 
                            flex justify-center items-center p-2 m-1
                             text-red-600 rounded-full
                            hover:bg-purple-300
                           `}>
                               {IconeDelete}
                               </button>
                        ):false}
                   </td>
                )
            }

            return (
                /*** PODERIA SER FEITO DE FORMA SIMPLES COM tr th e td
                        <table>
                        </table>
                    
                */
                //VAMOS renderizar (quebrar)
                <table className=" w-full rounded-xl overflow-hidden">
                    <thead className={` 
                     text-gray-100
                    bg-gradient-to-r from-purple-500 to-purple-800`} >
                   {renderizarCabecalho()}
                   </thead>
                   <tbody>
                    {exibirAcao ? renderizarDados():false}
                   </tbody>
              </table>
            )
        }