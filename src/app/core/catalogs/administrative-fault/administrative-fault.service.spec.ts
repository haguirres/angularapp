import { TestBed, inject } from '@angular/core/testing';

import { AdministrativeFaultService } from './administrative-fault.service';

describe('AdministrativeFaultService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdministrativeFaultService]
    });
  });

  it('should be created', inject([AdministrativeFaultService], (service: AdministrativeFaultService) => {
    expect(service).toBeTruthy();
  }));
});
