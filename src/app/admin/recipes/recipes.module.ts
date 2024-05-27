import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RecipesRoutingModule } from './recipes-routing.module';
import { AddEditComponent } from './add-edit.component';
import { ListComponent } from './list.component';

@NgModule({
  imports: [
      CommonModule,
      ReactiveFormsModule,
      RecipesRoutingModule
  ],
  declarations: [
      ListComponent,
      AddEditComponent
  ]
})
export class recipesModule { }
