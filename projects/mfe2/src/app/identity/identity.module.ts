import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IdentityRoutingModule } from './identity-routing.module';
import { IdentityListComponent } from './identity-list/identity-list.component';


@NgModule({
  declarations: [
    IdentityListComponent
  ],
  imports: [
    CommonModule,
    IdentityRoutingModule
  ]
})
export class IdentityModule { }
