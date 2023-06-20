import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../../../shared/models/recipe.model';
import { RecipeService } from '../../../shared/services/recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];

  @Output('onSelectedRecipe') selectedRecipe = new EventEmitter<Recipe>();

  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes();
  }

  selectRecipe(recipe: Recipe) {
    console.log('from recipeListComponent ' + recipe);
    this.selectedRecipe.emit(recipe);
  }
}
