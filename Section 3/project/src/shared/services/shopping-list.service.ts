import { Ingredient } from '../models/ingredient.model';
import { EventEmitter } from '@angular/core';

export class ShoppingListService {
  private ingredientAdded = new EventEmitter<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];

  addIngredient(name: string, amount: number) {
    this.ingredients.push(new Ingredient(name, amount));
    this.ingredientAdded.emit([...this.ingredients]);
  }

  addIngredients(ingredients: Ingredient[]) {
    // ingredients.forEach((ingredient) => {
    //   this.ingredients.push(ingredient);
    // });
    this.ingredients.push(...ingredients);
    this.ingredientAdded.emit([...this.ingredients]);
  }

  getIngredients() {
    return [...this.ingredients];
  }

  getIngredientAdded() {
    return this.ingredientAdded;
  }
}
