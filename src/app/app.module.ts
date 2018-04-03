import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { HeaderHttpInterceptor } from './core/header-http-interceptor';
import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';

import { LoginComponent } from './login/login.component';
import { DisclaimerModule } from './disclaimer/disclaimer.module';
import { LoginGuardService } from './login/login-guard.service';
import { LoginService } from './core';
import { CitizenApproachModule } from './citizen-approach/citizen-approach.module';

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent
    ],
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        SharedModule,
        CoreModule,
        NgbModule.forRoot(),
        CitizenApproachModule,
        DisclaimerModule,
        AppRoutingModule
    ],
    providers: [ ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
