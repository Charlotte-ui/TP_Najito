import Cocktail from "./cocktail.model";

const rootEndpoint = "https://www.thecocktaildb.com/api/json/v1/1";

export interface Drink {
  idDrink: number;
  strDrink: string;
  strDrinkThumb: string;
  strInstructions: string;
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
    return new Cocktail(
      drink.idDrink,
      drink.strDrink,
      drink.strDrinkThumb,
      drink.strInstructions
    );
  }
}

export default new CocktailDbApi();
