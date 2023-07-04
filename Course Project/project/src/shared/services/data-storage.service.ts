import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {map, tap} from "rxjs";

import {RecipeService} from "./recipe.service";
import {Recipe} from "../models/recipe.model";

@Injectable()
export class DataStorageService {
  constructor(private http: HttpClient, private recipeService: RecipeService) {
  }

  storeRecipes() {
    const recipes = this.recipeService.getRecipes();
    this.http.put('https://angular-course-project-23-default-rtdb.firebaseio.com/recipes.json', recipes)
      .subscribe((response: any) => {
        console.log(response);
      });
  }

  fetchRecipes() {
    return this.http.get<Recipe[]>('https://angular-course-project-23-default-rtdb.firebaseio.com/recipes.json')
      .pipe(
        map(recipes => {
          return recipes.map((recipe) => {
            return {...recipe, ingredients: recipe.ingredients ? recipe.ingredients : []}
          });
        }),
        tap(recipes => {
          this.recipeService.setRecipes(recipes)
        })
      );
  }
}
