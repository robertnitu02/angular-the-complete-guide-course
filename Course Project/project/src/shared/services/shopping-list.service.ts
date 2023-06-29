import {Subject} from 'rxjs';

import {Ingredient} from '../models/ingredient.model';

export class ShoppingListService {
  private ingredientAdded = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];

  addIngredient(name: string, amount: number) {
    this.ingredients.push(new Ingredient(name, amount));
    this.ingredientAdded.next([...this.ingredients]);
  }

  updateIngredient(index: number, newIngredient: Ingredient) {
    this.ingredients[index] = newIngredient;
    this.ingredientAdded.next([...this.ingredients]);
  }

  addIngredients(ingredients: Ingredient[]) {
    // ingredients.forEach((ingredient) => {
    //   this.ingredients.push(ingredient);
    // });
    this.ingredients.push(...ingredients);
    this.ingredientAdded.next([...this.ingredients]);
  }

  deleteIngredient(ingredientIndex) {
    this.ingredients.splice(ingredientIndex, 1);
    this.ingredientAdded.next([...this.ingredients]);
  }

  getIngredients() {
    return [...this.ingredients];
  }

  getIngredientAdded() {
    return this.ingredientAdded;
  }

  getIngredientById(index: number) {
    return this.ingredients[index];
  }
}
