import {
  Component,
  ViewChild,
  ElementRef,
  EventEmitter,
  Output,
} from '@angular/core';
import { Ingredient } from '../../../shared/models/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent {
  @ViewChild('ingredientNameInput') ingredientNameInput: ElementRef;
  @ViewChild('ingredientAmountInput') ingredientAmountInput: ElementRef;

  @Output('onIngredientAdded') ingredientAdded = new EventEmitter<Ingredient>();

  addIngredient() {
    // console.log(this.ingredientNameInput.nativeElement.value);
    // console.log(this.ingredientAmountInput.nativeElement.value);
    this.ingredientAdded.emit(
      new Ingredient(
        this.ingredientNameInput.nativeElement.value,
        this.ingredientAmountInput.nativeElement.value
      )
    );
  }
}
