import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CaptureComponent } from './capture/capture.component';
import { LoginGuardService } from '../login/login-guard.service';

const routes: Routes = [
  {path: 'capture', component: CaptureComponent, canActivate: [LoginGuardService]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [LoginGuardService]
})
export class CitizenApproachRoutingModule { }
