import Cocktail from "./cocktail.model";
import {Ingredient} from "./cocktail.model";

const rootEndpoint = "https://www.thecocktaildb.com/api/json/v1/1";

export interface Drink {
  idDrink: number;
  strDrink: string;
  strDrinkThumb: string;
  strInstructions: string;
  strIngredient1: string | null;
  strIngredient2: string | null;
  strIngredient3: string | null;
  strIngredient4: string | null;
  strIngredient5: string | null;
  strIngredient6: string | null;
  strIngredient7: string | null;
  strIngredient8: string | null;
  strIngredient9: string | null;
  strIngredient10: string | null;
  strIngredient11: string | null;
  strIngredient12: string | null;
  strIngredient13: string | null;
  strIngredient14: string | null;
  strIngredient15: string | null;
  strMeasure1: string | null;
  strMeasure2: string | null;
  strMeasure3: string | null;
  strMeasure4: string | null;
  strMeasure5: string | null;
  strMeasure6: string | null;
  strMeasure7: string | null;
  strMeasure8: string | null;
  strMeasure9: string | null;
  strMeasure10: string | null;
  strMeasure11: string | null;
  strMeasure12: string | null;
  strMeasure13: string | null;
  strMeasure14: string | null;
  strMeasure15: string | null;

}

class CocktailDbApi {
  searchCocktailsByName(name: string): Promise<Array<Cocktail>> {
    return this.fetchFromApi(
      `${rootEndpoint}/search.php?s=${name.trim()}`
    ).then((drinks) => this.createCocktails(drinks));
  }

  searchCocktailsByIngredient(ingredient: string): Promise<Array<Cocktail>> {
    return this.fetchFromApi(
      `${rootEndpoint}/filter.php?i=${ingredient.trim()}`
    ).then((drinks) => this.createCocktails(drinks));
  }

  private fetchFromApi(query: string): Promise<Array<Drink>> {
    return (
      fetch(query)
        .then((response) => {
          try {
            return response.json()     
          } catch (error) {
            return [];
          }    
        })
        .then((jsonResponse) => jsonResponse.drinks || [])
        .catch((error) => {
       //  console.error(error);

        })
    );
  }

  private createCocktails(drinks: Array<Drink>): Array<Cocktail> {
    // Create cocktails
    if (drinks) return drinks.map((drink) => this.createCocktail(drink));
    else return [];
  }

  private createCocktail(drink: Drink) {
    let ingredients = new Array<{text:string, measure:string|null, id:number}>();

    for(let i=1;i<=15;i++){
      if(typeof drink['strIngredient'+i] !== undefined && drink['strIngredient'+i]) {
        let ingredient: Ingredient = {text:drink['strIngredient'+i],id:i,measure:drink['strMeasure'+i]};
        ingredients.push(ingredient);
      }
    }

    return new Cocktail(
      drink.idDrink,
      drink.strDrink,
      drink.strDrinkThumb,
      drink.strInstructions,
      ingredients,
    );
  }
}

export default new CocktailDbApi();
