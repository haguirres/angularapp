import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DisclaimerComponent } from './disclaimer.component';
import { LoginGuardService } from '../login/login-guard.service';

const routes: Routes = [
  {path: 'disclaimer', component: DisclaimerComponent, canActivate: [LoginGuardService]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [LoginGuardService]
})
export class DisclaimerRoutingModule { }
