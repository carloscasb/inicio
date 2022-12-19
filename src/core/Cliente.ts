
export default class Cliente {

/** 
   private id: String
   private nome: String
   private idade: Number
*/
    //MUDAR EM tsconfig.json  "target": "es5", para  "target": "ES2015",

    #id: String
    #nome: String
    #idade: Number

    constructor(nome: string, idade: number, id: string = null) {
        this.#nome = nome
        this.#idade = idade
        this.#id = id

    }

    // CRIAR UMA ESTANCIA VAZIA
    static vazio() {
        return new Cliente('', 0)
    }
    get id() {
        return this.#id
    }
    get nome() {
        return this.#nome
    }
    get idade() {
        return this.#idade
    }

}