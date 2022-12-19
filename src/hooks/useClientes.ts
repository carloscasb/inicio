import { useEffect, useState } from "react";
import Cliente from "../core/Cliente";
import ClienteRepositorio from "../core/ClienteRepositorio";
import ColecaoCliente from "../firebase/bd/ColecaoCliente";
import useTabelaOuForm from "./useTabelaOuForm";



export default function useClientes(){

   
    // NOVA COLECAO (Cliente)  --- posso obter cliente automaticamente, vamos fazer uma const clientes abaixo
    const repo: ClienteRepositorio = new ColecaoCliente
     // ARMAZANAR CLIENTE automaticamwente e apaga a lista  manual
     const [clientes, setClientes] = useState<Cliente[]>([])

    // ARMAZANAR CLIENTE
    const [cliente, setCliente] = useState<Cliente>(Cliente.vazio())
    // estado para mudar visibilidade (alternancia)
    //////////const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela')  /// TRAZER O HOOK

    const { exibirTabela, exibirFormulario, formularioVisivel, tabelaVisivel} = useTabelaOuForm()

  
//usara useEffect para alterar ESTADO na inicialização
useEffect(obterTodos, [])

// FAZER UM METODO obterTodos e exibir no useffect

function obterTodos () {
   // repo.obterTodos().then(setClientes)
   repo.obterTodos().then(clientes => {
    setClientes(clientes)
    ////////setVisivel ('tabela')
    exibirTabela()
       
   })
}
    function clienteSelecionado(cliente: Cliente) {
       // console.log(cliente.nome)  --- EMBAIXO ELE PUXA O CLIENTE SELECIONADO E MOSTRA NO FORM
       /** MAS QUANDO CLICK EM NOVO CLIENTE ELE CARREGA O ULTIMO SELECIONADO - RESOLVEMOS CRIANDO UMA 
       FUNÇAO novoCliente (mandado criar cliente.vazio) e passa no onclick do botão
      */
       setCliente(cliente)
      //////// setVisivel('form')
      exibirFormulario()
    }

    function novoCliente() {
        setCliente(Cliente.vazio())
        ///////setVisivel('form')
        exibirFormulario()
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
        */
       await repo.salvar(cliente)
       obterTodos   
      
       //setVisivel ('tabela')    TENTANDO ATUALIZAR DADOS DO FIREBASE (ainda fica sem atualizar na exibição)
    }

    return {
        cliente, //Proprio Cliente
        clientes, // Lista de clientes
        salvarCliente, 
        novoCliente, 
        clienteExcluido, //poderia ser excluirCliente
        clienteSelecionado, //poderia ser  selecionarCliente
        obterTodos, 
        tabelaVisivel, //pegando do HOOK useTabelaOuForm
        exibirTabela

    }
   
}