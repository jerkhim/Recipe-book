import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NewRecipeComponent } from './new-recipe.component';
import { NewRecipeRoutingModule } from './new-recipe-routing.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [NewRecipeComponent],

  imports: [
    CommonModule,
    ReactiveFormsModule,
    NewRecipeRoutingModule,
    RouterModule.forChild([])

  ]
})
export class NewRecipeModule { }
