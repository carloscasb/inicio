import { useEffect, useState, } from "react";
import Botao from "../components/Botao";
import Formulario from "../components/Formulario";
import Tabela from "../components/Tabela";
import Layout from "../components/template/Layout";
import Cliente from "../core/Cliente";
import ClienteRepositorio from "../core/ClienteRepositorio";
import ColecaoCliente from "../firebase/bd/ColecaoCliente";
import useClientes from "../hooks/useClientes";
//import useTabelaOuForm from "../hooks/useTabelaOuForm";

export default function Home() {

    //USAR O HOOK

    const {
        salvarCliente,
        novoCliente,
        clienteExcluido,
        clienteSelecionado, // obter do hook useClientes
        obterTodos,
        cliente,
        clientes,
        tabelaVisivel, // obter do hook useTabelaOuForm
        exibirTabela // obter do hook useTabelaOuForm
    } = useClientes()

    /** LEVAR PARA O HOOK (onde tem --- ( aqui tem um asterisco e uma barra) -- é um asterisco seguido de barra)

    // NOVA COLECAO (Cliente)  --- posso obter cliente automaticamente, vamos fazer uma const clientes abaixo
    const repo: ClienteRepositorio = new ColecaoCliente
     // ARMAZANAR CLIENTE automaticamwente e apaga a lista  manual
     const [clientes, setClientes] = useState<Cliente[]>([])

    // ARMAZANAR CLIENTE
    const [cliente, setCliente] = useState<Cliente>(Cliente.vazio())
    // estado para mudar visibilidade (alternancia)
    const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela')

   /**  
    * // CRIAR ARRAY DE CLIENTES, enquanto não traz automaticamente do BD
    const clientes = [
        new Cliente("Ana", 34, "1"),
        new Cliente("Bia", 23, "2"),
        new Cliente("Paula", 33, "3"),
        new Cliente("Julia", 63, "4")
    ]
// --- ( aqui tem um asterisco e uma barra)
//usara useEffect para alterar ESTADO na inicialização
useEffect(obterTodos, [])

// FAZER UM METODO obterTodos e exibir no useffect

function obterTodos () {
   // repo.obterTodos().then(setClientes)
   repo.obterTodos().then(clientes => {
    setClientes(clientes)
    setVisivel ('tabela')
       
   })
}
    function clienteSelecionado(cliente: Cliente) {
       // console.log(cliente.nome)  --- EMBAIXO ELE PUXA O CLIENTE SELECIONADO E MOSTRA NO FORM
       /** MAS QUANDO CLICK EM NOVO CLIENTE ELE CARREGA O ULTIMO SELECIONADO - RESOLVEMOS CRIANDO UMA 
       FUNÇAO novoCliente (mandado criar cliente.vazio) e passa no onclick do botão
      // --- ( aqui tem um asterisco e uma barra)
       setCliente(cliente)
       setVisivel('form')
    }

    function novoCliente() {
        setCliente(Cliente.vazio())
        setVisivel('form')
    }
// muda para async
    async function clienteExcluido(cliente: Cliente) {
       // console.log(`excluir... ${cliente.nome}`)
       await repo.excluir(cliente)
       obterTodos        
    }
// muda para async - SALVAR OU ALTERAR
   async function salvarCliente (cliente: Cliente) {
       /**  console.log(cliente)
        setVisivel('tabela')
        // --- ( aqui tem um asterisco e uma barra)
       await repo.salvar(cliente)
       obterTodos   
      
       //setVisivel ('tabela')    TENTANDO ATUALIZAR DADOS DO FIREBASE (ainda fica sem atualizar na exibição)
    }
    */
    return (
        <Layout titulo="Pagina CRUD" subtitulo="Construindo Crud" >

            <div >
                <h1>CADASTRO SIMPLES</h1>
            </div>

            {tabelaVisivel ? (
                <>
                    <div className={`p-6 w-full text-black`} >
                        <div className={`flex justify-end`}>
                            <Botao onClick={novoCliente} >Novo Cliente</Botao>
                        </div>
                        <Tabela clientes={clientes}
                            clienteSelecionado={clienteSelecionado}
                            clienteExcluido={clienteExcluido}
                        ></Tabela>
                    </div>
                </>

            ) : (
                <Formulario
                    cliente={cliente}
                    clienteMudou={salvarCliente}
                    cancelado={exibirTabela} />

            )}
        </Layout>
    )
}