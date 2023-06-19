import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Recipe } from '../../../../shared/recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
})
export class RecipeItemComponent {
  @Input('recipeItem') recipe: Recipe;

  @Output('onSelectedRecipe') selectedRecipe = new EventEmitter<Recipe>();

  onRecipeSelected(selectedRecipe: Recipe) {
    console.log(selectedRecipe);
    this.selectedRecipe.emit(selectedRecipe);
  }
}
