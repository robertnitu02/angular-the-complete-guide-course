import {Injectable} from '@angular/core';

import {Recipe} from '../models/recipe.model';
import {Ingredient} from '../models/ingredient.model';
import {ShoppingListService} from './shopping-list.service';
import {Subject} from "rxjs";

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

  constructor(private shoppingListService: ShoppingListService) {
  }

  // private recipes: Recipe[] = [
  //   new Recipe(
  //     'Shawarma',
  //     'Very popular romanian food',
  //     'https://divainbucatarie.ro/wp-content/uploads/2021/06/shaorma-de-pui-facuta-in-casa-diva-in-bucatarie-V.jpg',
  //     [
  //       new Ingredient('chicken', 2),
  //       new Ingredient('fries', 500),
  //       new Ingredient('tomato', 10),
  //     ]
  //   ),
  //   new Recipe(
  //     'Burgir',
  //     'burgir, burgir, burgir, burgir, burgir, burgir',
  //     'https://media.tenor.com/fy5_55bVdT4AAAAd/burgir.gif',
  //     [
  //       new Ingredient('burgir beef', 500),
  //       new Ingredient('tomato', 10),
  //       new Ingredient('fries', 500),
  //     ]
  //   ),
  // ];
  private recipes: Recipe[] = [];

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.updateRecipes();
  }

  getRecipes() {
    return [...this.recipes];
  }

  getRecipeById(id: number) {
    return [...this.recipes][id];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.updateRecipes();
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.updateRecipes();
  }

  deleteRecipe(recipeId: number) {
    this.recipes.splice(recipeId, 1);
    this.updateRecipes();
  }

  private updateRecipes() {
    this.recipesChanged.next([...this.recipes]);
  }
}
