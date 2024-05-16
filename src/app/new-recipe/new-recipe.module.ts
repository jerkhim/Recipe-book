import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { NewRecipeRoutingModule } from './new-recipe-routing,module';

import { DetailsComponent } from './details.component';


@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        NewRecipeRoutingModule
    ],
    declarations: [
      
        DetailsComponent,
      
    ]
})
export class NewRecipeModule { }