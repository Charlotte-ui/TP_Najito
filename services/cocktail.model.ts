export default class Cocktail {
    thumbnail: string;
    
    constructor(public id: number, public name: string, public image: string, public instructions: string, public ingredients: Array<Ingredient> ) {
      this.thumbnail = image + '/preview';
    }
  }



  export interface Ingredient {
    text:string, 
    measure:string|null, 
    id:number
  }