import { useState } from "react";

// POSSO IMPORTAR ATE PARA O HOOK useClientes

export default function useTabelaOuForm(){

    const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela')

    const exibirTabela = () => setVisivel ('tabela')
    const exibirFormulario = () => setVisivel ('form')


    return {
        formularioVisivel: visivel === 'form',
        tabelaVisivel: visivel === 'tabela',
        exibirTabela,
        exibirFormulario
    
}

}