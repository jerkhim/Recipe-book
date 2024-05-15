import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NewRecipeComponent } from './new-recipe.component';
import { NewRecipeRoutingModule } from './new-recipe-routing.module';

@NgModule({
  declarations: [NewRecipeComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NewRecipeRoutingModule
  ]
})
export class NewRecipeModule { }
