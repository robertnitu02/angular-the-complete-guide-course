import { Component, ViewChild, ElementRef } from '@angular/core';

import { ShoppingListService } from '../../../shared/services/shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent {
  @ViewChild('ingredientNameInput') ingredientNameInput: ElementRef;
  @ViewChild('ingredientAmountInput') ingredientAmountInput: ElementRef;

  constructor(private shoppingListService: ShoppingListService) {}

  addIngredient() {
    const ingredientName = this.ingredientNameInput.nativeElement.value;
    const ingredientAmount = this.ingredientAmountInput.nativeElement.value;
    // console.log(
    //   `ingredientName: ${ingredientName} | ingredientAmount: ${ingredientAmount}`
    // );
    if (ingredientName === '' || ingredientAmount === '')
      return alert('Insert some values!');
    this.shoppingListService.addIngredient(ingredientName, ingredientAmount);
  }
}
