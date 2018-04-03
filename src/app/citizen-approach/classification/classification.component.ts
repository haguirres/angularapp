import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

import {
  IncidentService,
  IIncident,
  AnswerService,
  IAnswer,
  DependencyService,
  IDependency,
  AdministrativeFaultService,
  IAdministrativeFault,
  ElectoralElectionService,
  IElectoralElection,
  IFepadeComplaint,
  FepadeComplaintService,
  IElectoralRegistration,
  ElectoralRegistrationService,
  PoliticalViolenceService,
  IPoliticalViolence,
  NotApplicableFolioService,
  INotApplicableFolio
} from '../../core';
import { ClassificationTypeEnum } from '../../shared/classification-type-enum';

@Component({
  selector: 'app-classification',
  templateUrl: './classification.component.html',
  styleUrls: ['./classification.component.css']
})
export class ClassificationComponent implements OnInit {

  @Input() classificationGroup: FormGroup;
  @Input() expanded: boolean;
  @Output() expandClassification = new EventEmitter<number>();

  classificationTypes: typeof ClassificationTypeEnum;
  administrativeFaults: IAdministrativeFault[];
  electoralElections: IElectoralElection[];
  answers: IAnswer[];
  incidents: IIncident[];
  dependencies: IDependency[];
  fepadeComplaints: IFepadeComplaint[];
  electoralRegistrations: IElectoralRegistration[];
  politicalViolence: IPoliticalViolence[];
  notApplicableFolios: INotApplicableFolio[];

  constructor(
    private incidentService: IncidentService,
    private answerService: AnswerService,
    private fepadeComplaintService: FepadeComplaintService,
    private dependencyService: DependencyService,
    private administrativeFaultService: AdministrativeFaultService,
    private electoralElectionService: ElectoralElectionService,
    private electoralRegistrationService: ElectoralRegistrationService,
    private politicalViolenceService: PoliticalViolenceService,
    private notApplicableFolioService: NotApplicableFolioService
  ) {
    this.classificationTypes = ClassificationTypeEnum;
   }

  ngOnInit() {
    this.getAnswers();
    this.getAdministrativeFaults();
    this.getIncidents();
    this.getDependencies();
    this.getElectoralElections();
    this.getElectoralRegistrations();
    this.getComplaints();
    this.getPoliticalViolence();
    this.getNotApplicableFolios();
  }

  expand() {
    this.expanded = !this.expanded;
    this.expandClassification.emit(3);
  }

  setIncidentType(value: string) {
    this.classificationGroup.patchValue({
      type: value
    });
  }

  private getNotApplicableFolios(): void {
    this.notApplicableFolioService.getNotApplicableFolios()
      .subscribe(notApplicableFolios => this.notApplicableFolios = notApplicableFolios);
  }

  private getPoliticalViolence(): void {
    this.politicalViolenceService.getPoliticalViolence()
      .subscribe(politicalViolence => this.politicalViolence = politicalViolence);
  }

  private getComplaints(): void {
    this.fepadeComplaintService.getFepadeComplaints()
        .subscribe(fepadeComplaints => this.fepadeComplaints = fepadeComplaints);
  }
  private getAdministrativeFaults(): void {
    this.administrativeFaultService.getAdministrativeFaults()
        .subscribe(administrativeFaults => this.administrativeFaults = administrativeFaults);
  }

  private getElectoralElections(): void {
    this.electoralElectionService.getElectoralElections()
        .subscribe(electoralElections => this.electoralElections = electoralElections);
  }

  private getElectoralRegistrations(): void {
    this.electoralRegistrationService.getElectoralRegistrations()
        .subscribe(electoralRegistrations => this.electoralRegistrations = electoralRegistrations);
  }

  private getIncidents(): void {
    this.incidentService.getIncidents().subscribe(incidents => this.incidents = incidents);
  }

  private getAnswers(): void {
    this.answerService.getAnswers().subscribe(answers => this.answers = answers);
  }

  private getDependencies(): void {
    this.dependencyService.getDependencies().subscribe(dependencies => this.dependencies = dependencies);
  }
}
