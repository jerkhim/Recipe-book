import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ViewRecipeComponent } from './view-recipe.component';
import { ViewRecipeRoutingModule } from './view-recipe-routing.module';

@NgModule({
  declarations: [ViewRecipeComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ViewRecipeRoutingModule
   

  ]
})
export class ViewRecipeModule { }
