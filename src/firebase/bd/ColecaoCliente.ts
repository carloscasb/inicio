import Cliente from "../../core/Cliente";
import ClienteRepositorio from "../../core/ClienteRepositorio";
import firebase from "../config"
//import Firestore from 'firebase/firestore';

export default class ColecaoCliente implements ClienteRepositorio {

    //CONVERSOR DO FIRABASE
    #conversor = {
        toFirestore(cliente: Cliente) {
            return {
                nome: cliente.nome,
                idade: cliente.idade,
                id: cliente.id,

            }
        },
        fromFirestore(snapshot: firebase.firestore.QueryDocumentSnapshot, options: firebase.firestore.SnapshotOptions): Cliente {
            const dados = snapshot.data(options)
            return new Cliente(dados.nome, dados.idade, snapshot.id)
        }
    }

    async salvar(cliente: Cliente): Promise<Cliente> {
       //return null
       if (cliente?.id) {
        await   this.colecao().doc(cliente.id).set(cliente) // se tiver id setado  ALTERAR
          return cliente
      } else {
         const docRef = await this.colecao().add(cliente) //SALVAR
         const doc = await docRef.get()
         return  doc.data()
      }
    }

    async excluir(cliente: Cliente):Promise<void> {
       // return null
          return this.colecao().doc(cliente.id).delete()
       
    }

    async obterTodos(): Promise<Cliente[]> {
       // return null
       const query = await this.colecao().get()  //Dar os dados
       return query.docs.map(doc => doc.data()) ?? [] //acesso as documentos , caso nada devolver um array vazio
    }

    private colecao() {
        return firebase
            .firestore().collection('clientes')
            .withConverter(this.#conversor)
    }

}