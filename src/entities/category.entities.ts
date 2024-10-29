// normalmente uma entidade é uma classe, porque ela vem muito da POO
// a classe vem para representar uma entidade da nossa aplicação

type CategoryProps = {
    _id?:string;
    title:string;
    color:string;
}

export class Category {
    public _id?: string;
    public title: string;
    public color:string;
    // declarada como pública porque eu quero que as instâncias da minha classe
    // acessem essa propriedade (id), ou seja, eu quero que todo mundo que
    // instanciar a classe tenha acesso à id. Se eu trocasse para private, a 
    // instância não teria acesso à propriedade (id)
    // uma instância de uma classe é 

    constructor({_id, title, color}: CategoryProps) {
        // os parâmetros opcionais têm que vir por último nos argumentos
        this._id = _id;
        this.title = title;
        this.color = color.toUpperCase();
    }
}