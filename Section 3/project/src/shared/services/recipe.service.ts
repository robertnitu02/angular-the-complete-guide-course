import { Recipe } from '../models/recipe.model';

export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      'A test recipe',
      'Simple test recipe only for testing lol',
      'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_1280.jpg'
    ),
    new Recipe(
      'Another test recipe',
      'Simple test recipe only for testing lol',
      'https://cdn.pixabay.com/photo/2010/12/13/10/05/berries-2277_1280.jpg'
    ),
  ];

  getRecipes() {
    return [...this.recipes];
  }
}
