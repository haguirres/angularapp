import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DisclaimerRoutingModule } from './disclaimer-routing.module';
import { DisclaimerComponent } from './disclaimer.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    DisclaimerRoutingModule
  ],
  declarations: [DisclaimerComponent]
})
export class DisclaimerModule { }
