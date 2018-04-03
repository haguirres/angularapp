import { Component, OnInit, ViewChild } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
  FormArray,
  AbstractControl,
  NgModel
} from '@angular/forms';
import { NgbDateStruct, NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import {
  NgbDatepickerConfig,
  NgbDateParserFormatter
} from '@ng-bootstrap/ng-bootstrap';
import { NgbDateMXParserFormatter } from '../../shared/mxDateFormatter';

import {
  AgeService,
  IAge,
  ComplaintService,
  IComplaint,
  CountryService,
  ICountry,
  GenderService,
  IGender,
  StateService,
  IState,
  SettlementService,
  ISettlement,
  TownService,
  ITown,
  PoliticalPartyService,
  IPoliticalParty,
  OccupationService,
  IOccupation,
  QualityService,
  IQuality,
  EducationLevelService,
  IEducationLevel,
  LoginService
} from '../../core';
import { forEach } from '@angular/router/src/utils/collection';
import { ClassificationTypeEnum } from '../../shared/classification-type-enum';

@Component({
  selector: 'app-capturess',
  templateUrl: './capture.component.html',
  styleUrls: ['./capture.component.css']
})
export class CaptureComponent implements OnInit {
  @ViewChild('content') private content;
country:string;
folio: string;
password: string; 
  ages: IAge[];
  countries: ICountry[];
  educationLevels: IEducationLevel[];
  genders: IGender[];
  occupations: IOccupation[];
  politicalParties: IPoliticalParty[];
  qualities: IQuality[];
  settlements: ISettlement[];
  settlementsFacts: ISettlement[];
  states: IState[];
  towns: ITown[];

  expandValues: boolean[] = [true, false, false, false, false];

  classificationTypes: typeof ClassificationTypeEnum;
  citizenForm: FormGroup;
  model: NgbDateStruct;

  isInstitution: boolean;
  isAnonymous: boolean;

  submitted = false;

  get alleged(): FormArray {
    return <FormArray>this.citizenForm.get('alleged');
  }

  constructor(
    private fb: FormBuilder,
    private ageService: AgeService,
    private countryService: CountryService,
    private educationLevelService: EducationLevelService,
    private occupationService: OccupationService,
    private politicalPartyService: PoliticalPartyService,
    private qualityService: QualityService,
    private settlementService: SettlementService,
    private genderService: GenderService,
    private stateService: StateService,
    private townService: TownService,
    private loginService: LoginService,
    private complaintService: ComplaintService,
    private modalService: NgbModal
  ) {
    this.isInstitution = false;
    this.isAnonymous = false;
    this.classificationTypes = ClassificationTypeEnum;
  }

  ngOnInit() {
    this.getCatalogs();
    this.loginService.getToken();
    this.citizenForm = this.fb.group({
      institution: [null],
      isInstitution: [null],
      anonymous: [false],
      firstName: [null, Validators.required],
      secondName: [null, Validators.required],
      lastName: [null],
      gender: [null, Validators.required],
      age: [null, Validators.required],
      educationLevel: [null, Validators.required],
      occupation: [null, Validators.required],
      quality: [null],
      address: this.buildAddress(),
      alleged: this.fb.array([this.buildAlleged()]),
      facts: this.fb.group({
        knowsDate: true,
        placeOfScene: this.buildAddress(),
        date: [{ year: 2018, month: 4 }],
        hour: [{ hour: null, minute: null }],
        report: [null],
        estimatedTime: ['']
      }),

      phone: this.fb.group({
        number: [null, Validators.required],
        otherNumber: [null]
      }),

      classification: this.fb.group({
        type: [null],
        incident: [null],
        answer: [null],
        dependency: [null],
        citizenMessage: [null]
      })
    });

    // this.getStates(this.citizenForm.get('address.country').value);
    this.onChangeWatchersAddress('address');
    this.onChangeWatchersAddress('facts.placeOfScene');
  }

  onChangeWatchersAddress(form: string) {
    this.citizenForm
      .get(form + '.country')
      .valueChanges.subscribe(valueCountry => {
        if (valueCountry) {
          this.getStates(valueCountry);
        }
      });
    this.citizenForm.get(form + '.state').valueChanges.subscribe(valueState => {
      if (valueState) {
        this.getTowns(valueState);
      }
    });
    this.citizenForm.get(form + '.town').valueChanges.subscribe(valueTown => {
      if (valueTown) {
        if (form === 'address') {
          this.getSettlements(
            this.citizenForm.get(form + '.state').value,
            valueTown
          );
        }
        if (form === 'facts.placeOfScene') {
          this.getSettlementsFacts(
            this.citizenForm.get(form + '.state').value,
            valueTown
          );
        }
      }
    });
  }

  addAlleged(): void {
    if (this.alleged && this.alleged.length > 0) {
      const allegedElement = this.alleged.get([this.alleged.length - 1]);
      if (this.hasAlleged(allegedElement)) {
        return;
      }
    }
    this.alleged.push(this.buildAlleged());
  }

  deleteAlleged(id: number): void {
    this.alleged.removeAt(id);
  }

  hasAlleged(allegedElement: AbstractControl) {
    return (
      !allegedElement.value.firstName ||
      !allegedElement.value.secondName ||
      !allegedElement.value.politicalParty ||
      !allegedElement.value.who
    );
  }

  getSettlementByPostalCode(formControl: string): void {
    const postalCodeId = this.citizenForm.get(formControl).value;
    this.settlementService
      .getSettlementByPostalCode(postalCodeId)
      .subscribe(settlement => {
        const index = this.countries.findIndex(x => x.Nombre === 'México');
        if (formControl === 'address.postalCode') {
          this.citizenForm.patchValue({
            address: {
              country: this.countries[index].IdPais,
              state: settlement[0].IdEstado,
              town: settlement[0].IdMunicipio,
              settlement: settlement[0].IdAsentamiento
            }
          });
        }
        if (formControl === 'facts.placeOfScene.postalCode') {
          console.log(settlement[0]);
          this.citizenForm.patchValue({
            facts: {
              placeOfScene: {
                country: this.countries[index].IdPais,
                state: settlement[0].IdEstado,
                town: settlement[0].IdMunicipio,
                settlement: settlement[0].IdAsentamiento
              }
            }
          });
        }
      });
  }

  expand(id: number) {
    if (!this.expandValues[id]) {
      const index = this.expandValues.findIndex(x => x === true);
      this.expandValues[index] = false;
    }
    this.expandValues[id] = !this.expandValues[id];
  }

  updateStates(idCountry: number) {
    console.log(idCountry, 'e');
  }

  save() {
    this.submitted = true;
    if (this.citizenForm.valid) {
      const values = this.generateSubmitClass();
      console.log(values, 'valores');
      this.complaintService
        .postComplaint(values)
        .subscribe(reply => {          
        this.folio = reply.Folio;
        this.password = reply.PasswordDenuncia;
        this.openVerticallyCentered(this.content);
        });
    } else {
      console.log('Invalid');
    }
  }

  private buildAddress(): FormGroup {
    return this.fb.group({
      country: [null],
      postalCode: [null],
      state: [null],
      town: [null],
      settlement: [null],
      street: [null],
      outdoorNumber: [null],
      interiorNumber: [null],
      reference: [null]
    });
  }

  private buildAlleged(): FormGroup {
    return this.fb.group({
      firstName: [null],
      secondName: [null],
      lastName: [null],
      politicalParty: [null],
      who: [null]
    });
  }

  private getCatalogs(): void {
    this.getAges();
    this.getCountries();
    this.getEducationLevels();
    this.getOccupations();
    this.getPoliticalParties();
    this.getQualities();
    this.getGenders();
  }

  private getAges() {
    this.ageService.getAges().subscribe(ages => (this.ages = ages));
  }

  private getCountries() {
    this.countryService.getCountries().subscribe(countries => {
      this.countries = countries;
    });
  }

  private getEducationLevels() {
    this.educationLevelService
      .getEducationalLevels()
      .subscribe(educationLevels => (this.educationLevels = educationLevels));
  }

  private getOccupations() {
    this.occupationService
      .getOccupations()
      .subscribe(occupations => (this.occupations = occupations));
  }

  private getPoliticalParties() {
    this.politicalPartyService
      .getPoliticalParties()
      .subscribe(
        politicalParties => (this.politicalParties = politicalParties)
      );
  }

  private getQualities() {
    this.qualityService
      .getQualities()
      .subscribe(qualities => (this.qualities = qualities));
  }

  private getSettlements(idState: number, idTown: number) {
    this.settlementService
      .getSettlements(idState, idTown)
      .subscribe(settlements => {
        this.settlements = settlements;
      });
  }

  private getSettlementsFacts(idState: number, idTown: number) {
    this.settlementService
      .getSettlements(idState, idTown)
      .subscribe(settlements => {
        this.settlementsFacts = settlements;
      });
  }

  private getGenders() {
    this.genderService
      .getGenders()
      .subscribe(genders => (this.genders = genders));
  }

  private getStates(idCountry: number) {
    this.stateService.getStates(idCountry).subscribe(states => {
      this.states = states;
    });
  }

  private getTowns(idState: number) {
    this.townService.getTowns(idState).subscribe(towns => (this.towns = towns));
  }

  public fillAnonymousFields(): void {
    this.isAnonymous = !this.isAnonymous;
    const anonymousCountry = this.returnIndexAnonymous(this.countries);
    const anonymousState = this.returnIndexAnonymous(this.states);
    const anonymousTown = this.returnIndexAnonymous(this.towns);
    const anonymousSettlement = this.returnIndexAnonymous(this.settlements);
    const anonymousGender = this.returnIndexAnonymousDescription(this.genders);
    const anonymousAge = this.returnIndexAnonymousDescription(this.ages);
    const anonymousEducationLevel = this.returnIndexAnonymousDescription(
      this.educationLevels
    );
    const anonymousOccupation = this.returnIndexAnonymousDescription(
      this.occupations
    );
    const anonymousQuality = this.returnIndexAnonymousDescription(
      this.qualities
    );

    this.citizenForm.patchValue({
      firstName: 'Anónimo',
      secondName: 'Anónimo',
      lastName: 'Anónimo',
      phone: { number: '0000000000' },
      address: {
        country: anonymousCountry.IdPais,
        postalCode: '00000',
        street: 'Anónimo',
        interiorNumber: 'Anónimo',
        outdoorNumber: 'Anónimo',
        // state: anonymousState ? anonymousState.IdEstado : 0,
        state: 35,
        // town: anonymousTown ? anonymousTown.IdMunicipio : 0,
        town: 2461,
        // settlement: anonymousSettlement ? anonymousSettlement.IdAsentamiento : 0
        settlement: 145471
      },
      gender: anonymousGender.IdSexo,
      age: anonymousAge.IdEdad,
      educationLevel: anonymousEducationLevel.IdEscolaridad,
      occupation: anonymousOccupation.IdOcupacion,
      quality: anonymousQuality.IdCalidad
    });
    if (!this.isAnonymous) {
      this.resetFieldValues();
    }
  }

  private returnIndexAnonymous(collection: any[]): any {
    return collection
      ? collection.find(x => x.Nombre.includes('No proporcionó'))
      : null;
  }

  private returnIndexAnonymousDescription(collection: any[]): any {
    return collection
      ? collection.find(x => x.Descripcion.includes('No proporcionó'))
      : null;
  }

  private resetFieldValues() {
    this.citizenForm.patchValue({
      firstName: '',
      secondName: '',
      lastName: '',
      phone: { number: '' },
      address: {
        country: 0,
        postalCode: '',
        street: '',
        interiorNumber: '',
        outdoorNumber: '',
        state: 0,
        town: 0,
        settlement: 0
      },
      gender: 0,
      age: 0,
      educationLevel: 0,
      occupation: 0,
      quality: 0
    });
  }

  private generateSubmitClass(): IComplaint {
    const valuesToSubmit: IComplaint = {
      Adjuntos: null,
      AMPF: '',
      Anonimo: this.citizenForm.get('anonymous').value,
      Calle: this.citizenForm.get('address.street').value,
      CalleHechos: this.citizenForm.get('facts.placeOfScene.street').value,
      CodigoPostal: this.citizenForm.get('address.postalCode').value,
      CodigoPostalHechos: this.citizenForm.get('facts.placeOfScene.postalCode')
        .value,
      Correo: null,
      Creado: null,
      DependenciaTransferencia: this.citizenForm.get('institution').value,
      DescripcionHechos: this.citizenForm.get('facts.report').value,
      EsDenunciaFepadeTel: true,
      FechaAproximada: this.citizenForm.get('facts.estimatedTime').value,
      FechaHechos: this.citizenForm.get('facts.date').value,
      FocoRojo: false,
      Folio: null,
      FolioJS: null,
      IdAsentamiento: this.citizenForm.get('address.settlement').value,
      IdAsentamientoHechos: this.citizenForm.get(
        'facts.placeOfScene.settlement'
      ).value,
      IdCalidad: this.citizenForm.get('quality').value,
      IdDenuncia: 0,
      IdEdad: this.citizenForm.get('age').value,
      IdEscolaridad: this.citizenForm.get('educationLevel').value,
      IdEstado: this.citizenForm.get('address.state').value,
      IdEstadoHechos: this.citizenForm.get('facts.placeOfScene.state').value,
      IdEstatus: 0,

      // LETS SEE HOW WE DO IT, SHOULD BE SAME FIELD, ACTUALLY ITS KINDA SELECT OPTION
      IdFaltaAdministrativa: 0,
      IdIncidente: 0,
      IdInformacionElectoral: 0,
      IdViolenciaPolitica: 0,
      IdLlamadaImprocedente: 0,
      IdRegFedElectores: 0,
      IdQuejaVsFepade: 0,

      IdMunicipio: this.citizenForm.get('address.town').value,
      IdMunicpioHechos: this.citizenForm.get('facts.placeOfScene.town').value,
      IdOcupacion: this.citizenForm.get('occupation').value,
      IdPais: this.citizenForm.get('address.country').value,
      IdPaisHechos: this.citizenForm.get('facts.placeOfScene.country').value,
      IdPuntoRelevante: 0,
      IdRespuestaOfrecida: this.citizenForm.get('classification.answer').value,
      IdSexo: this.citizenForm.get('gender').value,
      IdTurnar: this.citizenForm.get('classification.dependency').value,
      JsonProbablesResponsables: null,
      ListaAdjuntos: null,
      ListaProbablesResponsables: null,
      Modificado: null,
      Nombre: this.citizenForm.get('firstName').value,
      NumExterior: this.citizenForm.get('address.outdoorNumber').value,
      NumExteriorHechos: this.citizenForm.get(
        'facts.placeOfScene.outdoorNumber'
      ).value,
      NumInterior: this.citizenForm.get('address.interiorNumber').value,
      NumInteriorHechos: this.citizenForm.get(
        'facts.placeOfScene.interiorNumber'
      ).value,
      Operador: '',
      OtroTelefono: this.citizenForm.get('phone.otherNumber').value,
      PasswordDenuncia: null,
      PrimerApellido: this.citizenForm.get('secondName').value,
      Referencia: this.citizenForm.get('facts.placeOfScene.reference').value,
      SegundoApellido: this.citizenForm.get('lastName').value,
      SolicitarInformacion: null,
      Telefono: this.citizenForm.get('phone.number').value,
      Transferencia: this.citizenForm.get('isInstitution').value,
      UbicacionHechosOtro: ''
    };
    return this.setIncidentId(valuesToSubmit);
  }

  private setIncidentId(valuesToSubmit: IComplaint): IComplaint {
    const date = this.citizenForm.get('facts.date').value;
    const hour = this.citizenForm.get('facts.hour').value;
    if(date !== null){
    valuesToSubmit.FechaHechos = this.setDate(
      date.year,
      date.month,
      date.day,
      hour.hour,
      hour.minute
    );
  }

    const catalogValue = this.citizenForm.get('classification.incident').value;
    if (
      this.citizenForm.get('classification.type').value ===
      this.classificationTypes.Incident
    ) {
      valuesToSubmit.IdIncidente = catalogValue;
    }
    if (
      this.citizenForm.get('classification.type').value ===
      this.classificationTypes.AdministrativeFault
    ) {
      valuesToSubmit.IdFaltaAdministrativa = catalogValue;
    }
    if (
      this.citizenForm.get('classification.type').value ===
      this.classificationTypes.Complaint
    ) {
      valuesToSubmit.IdQuejaVsFepade = catalogValue;
    }
    if (
      this.citizenForm.get('classification.type').value ===
      this.classificationTypes.ElectoralElection
    ) {
      valuesToSubmit.IdInformacionElectoral = catalogValue;
    }
    if (
      this.citizenForm.get('classification.type').value ===
      this.classificationTypes.ElectoralRegistration
    ) {
      valuesToSubmit.IdRegFedElectores = catalogValue;
    }
    if (
      this.citizenForm.get('classification.type').value ===
      this.classificationTypes.PoliticalViolence
    ) {
      valuesToSubmit.IdViolenciaPolitica = catalogValue;
    }
    if (
      this.citizenForm.get('classification.type').value ===
      this.classificationTypes.NotApplicableFolio
    ) {
      valuesToSubmit.IdLlamadaImprocedente = catalogValue;
    }
    return valuesToSubmit;
  }

  private setDate(
    year: number,
    month: number,
    day: number,
    hour: number,
    minute: number
  ) {
    return new Date(year, month, day, hour, minute);
  }

  private openVerticallyCentered(content) {
    this.modalService.open(content, { centered: true });
    }
}
