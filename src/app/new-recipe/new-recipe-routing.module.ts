import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewRecipeComponent } from './new-recipe.component';
import { NewRecipeModule } from './new-recipe.module';

const routes: Routes = [
  { path: '', component: NewRecipeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewRecipeRoutingModule { }
