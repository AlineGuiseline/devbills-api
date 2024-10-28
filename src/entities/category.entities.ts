// normalmente uma entidade é uma classe, porque ela vem muito da POO
// a classe vem para representar uma entidade da nossa aplicação

type CategoryProps = {
    title:string;
    color:string;
    id?:string;
}

export class Category {
    public title: string;
    public color:string;
    public id?: string;
    // declarada como pública porque eu quero que as instâncias da minha classe
    // acessem essa propriedade (id), ou seja, eu quero que todo mundo que
    // instanciar a classe tenha acesso à id. Se eu trocasse para private, a 
    // instância não teria acesso à propriedade (id)
    // uma instância de uma classe é 

    constructor({title, color, id}: CategoryProps) {
        // os parâmetros opcionais têm que vir por último nos argumentos
        this.title = title;
        this.color = color.toUpperCase();
        this.id = id;
    }
}