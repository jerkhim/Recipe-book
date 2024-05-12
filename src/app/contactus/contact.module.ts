import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { LayoutComponent } from './layout.component';



@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        ContactRoutingModule
    ],
    declarations: [
        LayoutComponent,
       
      
    ]
})
export class ContactModule { }

