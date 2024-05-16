import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewRecipeComponent } from './view-recipe.component';
import { ViewRecipeModule } from './view-recipe.module';

const routes: Routes = [
  { path: '', component: ViewRecipeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewRecipeRoutingModule { }