import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';


import {AppComponent} from './app.component';
import {ShortenPipe} from "./shorten.pipe";
import { FilterPipe } from './filter.pipe';
import { ReverseStringPipe } from './reverse-string.pipe';
import { OrderPipe } from './order.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ShortenPipe,
    FilterPipe,
    ReverseStringPipe,
    OrderPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
