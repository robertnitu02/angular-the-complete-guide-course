import { Injectable } from '@angular/core';

import { Recipe } from '../models/recipe.model';
import { Ingredient } from '../models/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Injectable()
export class RecipeService {
  constructor(private shoppingListService: ShoppingListService) {}

  private recipes: Recipe[] = [
    new Recipe(
      'Shawarma',
      'Very popular romanian food',
      'https://divainbucatarie.ro/wp-content/uploads/2021/06/shaorma-de-pui-facuta-in-casa-diva-in-bucatarie-V.jpg',
      [
        new Ingredient('chicken', 2),
        new Ingredient('fries', 500),
        new Ingredient('tomato', 10),
      ]
    ),
    new Recipe(
      'Burgir',
      'burgir, burgir, burgir, burgir, burgir, burgir',
      'https://media.tenor.com/fy5_55bVdT4AAAAd/burgir.gif',
      [
        new Ingredient('burgir beef', 500),
        new Ingredient('tomato', 10),
        new Ingredient('fries', 500),
      ]
    ),
  ];

  getRecipes() {
    return [...this.recipes];
  }

  getRecipeById(id: number) {
    return [...this.recipes][id];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
