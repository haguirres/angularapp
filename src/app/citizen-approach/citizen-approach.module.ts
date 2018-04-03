import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import {NgbModule, NgbDateParserFormatter} from '@ng-bootstrap/ng-bootstrap';

import { CitizenApproachRoutingModule } from './citizen-approach-routing.module';
import { CoreModule } from '../core/core.module';
import { CaptureComponent } from './capture/capture.component';
import { ClassificationComponent } from './classification/classification.component';
import { NgbDateMXParserFormatter } from '../shared/mxDateFormatter';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    CitizenApproachRoutingModule
  ],
  declarations: [CaptureComponent, ClassificationComponent],
  providers: [{provide: NgbDateParserFormatter, useClass: NgbDateMXParserFormatter}]
})
export class CitizenApproachModule { }
