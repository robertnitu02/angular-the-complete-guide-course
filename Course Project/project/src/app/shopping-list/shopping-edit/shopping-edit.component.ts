import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {Subscription} from "rxjs";

import {ShoppingListService} from '../../../shared/services/shopping-list.service';
import {Ingredient} from "../../../shared/models/ingredient.model";


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') editForm: NgForm;

  subscription: Subscription

  inEditMode = false;
  editModeItemIndex = -1;
  editItem: Ingredient;

  constructor(private shoppingListService: ShoppingListService) {
  }

  ngOnInit(): void {
    this.subscription = this.shoppingListService.startedEditing
      .subscribe((index: number) => {
        // console.log(index);
        this.inEditMode = true;
        this.editModeItemIndex = index;
        this.editItem = this.shoppingListService.getIngredientById(index);
        this.editForm.setValue({
          name: this.editItem.name,
          amount: this.editItem.amount
        });
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  handlerIngredient(form: NgForm) {
    const value = form.value;
    console.log(value);
    if (!this.inEditMode) {
      this.shoppingListService.addIngredient(value.name, value.amount);
    } else {
      this.shoppingListService.updateIngredient(this.editModeItemIndex, new Ingredient(value.name, value.amount));
    }
    this.onClear();
  }

  onDeleteIngredient() {
    this.shoppingListService.deleteIngredient(this.editModeItemIndex);
    this.onClear();
  }

  onClear() {
    this.inEditMode = false;
    this.editForm.reset();
  }
}
