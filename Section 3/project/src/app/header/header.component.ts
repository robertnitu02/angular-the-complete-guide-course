import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  @Output('onNavbarItemSelected') navbarItemSelected =
    new EventEmitter<number>();

  itemSelected(item: number) {
    this.navbarItemSelected.emit(item);
  }
}
