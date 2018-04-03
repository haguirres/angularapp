import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import {
  AdministrativeFaultService,
  AgeService,
  AnswerService,
  ComplaintService,
  CountryService,
  DependencyService,
  EducationLevelService,
  ElectoralElectionService,
  ElectoralRegistrationService,
  FepadeComplaintService,
  IncidentService,
  LoginService,
  NotApplicableFolioService,
  OccupationService,
  PoliticalPartyService,
  PoliticalViolenceService,
  QualityService,
  ServiceDeskService,
  SettlementService,
  GenderService,
  StateService,
  StatusService,
  TownService
} from './index';
import { HeaderHttpInterceptor } from './header-http-interceptor';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    AdministrativeFaultService,
    AgeService,
    AnswerService,
    ComplaintService,
    CountryService,
    DependencyService,
    EducationLevelService,
    ElectoralElectionService,
    ElectoralRegistrationService,
    FepadeComplaintService,
    IncidentService,
    LoginService,
    NotApplicableFolioService,
    OccupationService,
    PoliticalPartyService,
    PoliticalViolenceService,
    QualityService,
    ServiceDeskService,
    SettlementService,
    GenderService,
    StateService,
    StatusService,
    TownService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HeaderHttpInterceptor,
      multi: true
    }
  ]
})
export class CoreModule { }
