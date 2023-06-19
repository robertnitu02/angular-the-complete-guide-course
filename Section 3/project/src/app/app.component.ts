import { Component } from '@angular/core';

export enum NavbarItem {
  Recipes,
  ShoppingList,
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  protected readonly NavbarItem = NavbarItem;

  currentNavbarItem = NavbarItem.Recipes;

  navbarItemSelected(itemSelected: number) {
    console.log(itemSelected);
    this.currentNavbarItem = itemSelected;
  }
}
