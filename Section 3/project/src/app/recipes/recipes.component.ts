import { Component } from '@angular/core';
import { Recipe } from '../../shared/models/recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
})
export class RecipesComponent {
  selectedRecipe: Recipe | undefined = undefined;

  selectRecipe(recipe: Recipe) {
    console.log('recipes ' + recipe);
    this.selectedRecipe = recipe;
  }
}
