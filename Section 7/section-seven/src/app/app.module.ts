import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BasicHighlightDirective } from "./basic-directive/basic-highlight.directive";
import { BetterHighlightDirective } from './better-directive/better-highlight.directive';
import { AnotherHighlightDirective } from './another-directive/another-highlight.directive';
import { DynamicHighlightDirective } from './dynamic-directive/dynamic-highlight.directive';
import { ElseDirective } from './structural-directive/else.directive';

@NgModule({
  declarations: [
    AppComponent,
    BasicHighlightDirective,
    BetterHighlightDirective,
    AnotherHighlightDirective,
    DynamicHighlightDirective,
    ElseDirective,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
