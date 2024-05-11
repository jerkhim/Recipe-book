import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { RecipeRoutingModule } from './recipe-routing.module';
import { LayoutComponent } from './layout.component';


@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RecipeRoutingModule,
        FormsModule
    ],
    declarations: [
        LayoutComponent,
        
    ]
})
export class RecipeModule { }