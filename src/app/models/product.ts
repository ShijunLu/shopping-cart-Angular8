export class Product {
    id: number;
    name: string;
    description: string;
    price: number;
    imageUrl: string;

    constructor(id, name, description = ' ', price = 0, imageUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTYResK0Mlr5CJoFB_ZSMOvE4FHHUlrQ6EF7fxJTgBx2NeZavl-Ln8YExkKcA&usqp=CAc'){
        this.id = id
        this.name = name
        this.description = description
        this.price = price
        this.imageUrl = imageUrl
    }
}
