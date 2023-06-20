import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../shared/models/recipe.model';
import { RecipeService } from '../../shared/services/recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService],
})
export class RecipesComponent implements OnInit {
  selectedRecipe: Recipe | undefined = undefined;

  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.recipeService.getSelectedRecipe().subscribe((recipe: Recipe) => {
      this.selectedRecipe = recipe;
      // console.log(JSON.stringify(this.selectedRecipe));
    });
  }
}
