import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../../../shared/models/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent {
  @Output('onSelectedRecipe') selectedRecipe = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
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

  selectRecipe(recipe: Recipe) {
    console.log('from recipeListComponent ' + recipe);
    this.selectedRecipe.emit(recipe);
  }
}
