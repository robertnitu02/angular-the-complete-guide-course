import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {RecipesComponent} from './recipes/recipes.component';
import {RecipeListComponent} from './recipes/recipe-list/recipe-list.component';
import {RecipeItemComponent} from './recipes/recipe-list/recipe-item/recipe-item.component';
import {RecipeDetailComponent} from './recipes/recipe-detail/recipe-detail.component';
import {ShoppingListComponent} from './shopping-list/shopping-list.component';
import {ShoppingEditComponent} from './shopping-list/shopping-edit/shopping-edit.component';
import {NgOptimizedImage} from '@angular/common';
import {DropdownDirective} from '../shared/directives/dropdown.directive';
import {ShoppingListService} from '../shared/services/shopping-list.service';
import {AppRouteModule} from './app-route.module';
import {SelectRecipeComponent} from './recipes/select-recipe/select-recipe.component';
import {RecipeEditComponent} from './recipes/recipe-edit/recipe-edit.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RecipeService} from "../shared/services/recipe.service";
import {DataStorageService} from "../shared/services/data-storage.service";
import {RecipeResolverService} from "../shared/services/recipe-resolver.service";
import {AuthComponent} from "./auth/auth.component";
import {AuthService} from "../shared/services/auth.service";
import {LoadingSpinnerComponent} from "../shared/loading-spinner/loading-spinner/loading-spinner.component";
import {AuthInterceptorService} from "../shared/services/auth-interceptor.service";
import {AuthGuard} from "../shared/guards/auth.guard";
import {ForgotPasswordComponent} from "./auth/forgot-password/forgot-password.component";
import {AlertComponent} from "../shared/alert/alert.component";
import {PlaceholderDirective} from "../shared/directives/placeholder.directive";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    DropdownDirective,
    SelectRecipeComponent,
    RecipeEditComponent,
    AuthComponent,
    LoadingSpinnerComponent,
    ForgotPasswordComponent,
    AlertComponent,
    PlaceholderDirective
  ],
  imports: [
    BrowserModule,
    NgOptimizedImage,
    AppRouteModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    ShoppingListService,
    RecipeService,
    DataStorageService,
    RecipeResolverService,
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    },
    AuthGuard
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
