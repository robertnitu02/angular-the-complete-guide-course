import { Component, Input } from '@angular/core';
import { Recipe } from '../../../../shared/models/recipe.model';
import { RecipeService } from '../../../../shared/services/recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
})
export class RecipeItemComponent {
  @Input('recipeItem') recipe: Recipe;

  constructor(private recipeService: RecipeService) {}

  onRecipeSelected() {
    console.log(this.recipe);
    this.recipeService.emitSelectedRecipe(this.recipe);
  }
}
