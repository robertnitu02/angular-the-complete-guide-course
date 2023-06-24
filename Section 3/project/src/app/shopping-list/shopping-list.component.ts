import { Component, OnDestroy, OnInit } from '@angular/core';

import { ShoppingListService } from '../../shared/services/shopping-list.service';
import { Ingredient } from '../../shared/models/ingredient.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[] = [];
  private ingredientsSubs: Subscription;

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit(): void {
    this.ingredients = this.shoppingListService.getIngredients();

    this.ingredientsSubs = this.shoppingListService
      .getIngredientAdded()
      .subscribe((newIngredients: Ingredient[]) => {
        this.ingredients = newIngredients;
      });
  }

  ngOnDestroy(): void {
    this.ingredientsSubs.unsubscribe();
  }
}
