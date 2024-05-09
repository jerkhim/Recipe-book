import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { ShoppingRoutingModule } from './shoppinglist-routing.module';
import { LayoutComponent } from './layout.component';
import { DetailsComponent } from './details.component';


@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        ShoppingRoutingModule,
    ],
    declarations: [
        LayoutComponent,
        DetailsComponent,
      
    ]
})
export class ShoppingModule { }