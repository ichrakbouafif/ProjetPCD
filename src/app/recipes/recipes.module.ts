import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecetteListeComponent } from './recette-liste/recette-liste.component';
import { BrowserModule } from '@angular/platform-browser';
import { RecipePageComponent } from './recipe-page/recipe-page.component';
import { RecipeTitleComponent } from './recipe-title/recipe-title.component';
import { RecipeImageComponent } from './recipe-image/recipe-image.component';
import { RecipeDescriptionComponent } from './recipe-description/recipe-description.component';
import { RecipeInformationComponent } from './recipe-information/recipe-information.component';
import { RecipeInstructionsComponent } from './recipe-instructions/recipe-instructions.component';
import { RecipeIngredientsComponent } from './recipe-ingredients/recipe-ingredients.component';
import { RecipePropertiesComponent } from './recipe-properties/recipe-properties.component';
import { HttpClientModule } from '@angular/common/http';
import { RecipeNutritionComponent } from './recipe-nutrition/recipe-nutrition.component';
import { DatepickerComponent } from './datepicker/datepicker.component';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { FavouriteButtonComponent } from './favourite-button/favourite-button.component';
import { CartButtonComponent } from './cart-button/cart-button.component';

import { MatNativeDateModule,MAT_DATE_LOCALE } from '@angular/material/core';
import { GeneralModule } from '../general/general.module';
import { CommentsComponent } from './comments/comments.component';
import { SearchbarComponent } from './searchbar/searchbar.component';

import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [

    RecetteListeComponent,
        RecipePageComponent,
        RecipeTitleComponent,
        RecipeImageComponent,
        RecipeDescriptionComponent,
        RecipeInformationComponent,
        RecipeInstructionsComponent,
        RecipeIngredientsComponent,
        RecipePropertiesComponent,
        RecipeNutritionComponent,
        DatepickerComponent,
        FavouriteButtonComponent,
        CartButtonComponent,
        CommentsComponent,
        SearchbarComponent,
  ],
  imports: [
    GeneralModule,
    BrowserModule,
    CommonModule,
    RouterModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,

  ],
  exports: [
    RecetteListeComponent,
    RecipePageComponent
  ],
  providers:[
    { provide: MAT_DATE_LOCALE, useValue: 'fr' }
  ]
})
export class RecipesModule { }
