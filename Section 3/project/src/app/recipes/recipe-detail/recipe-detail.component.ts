import { Component, Input } from '@angular/core';
import { Recipe } from '../../../shared/models/recipe.model';
import { RecipeService } from '../../../shared/services/recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent {
  @Input('recipeItem') recipe: Recipe;

  constructor(private recipeService: RecipeService) {}

  addToShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }
}
