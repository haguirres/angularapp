import { TestBed, inject } from '@angular/core/testing';

import { ElectoralRegistrationService } from './electoral-registration.service';

describe('ElectoralRegistrationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ElectoralRegistrationService]
    });
  });

  it('should be created', inject([ElectoralRegistrationService], (service: ElectoralRegistrationService) => {
    expect(service).toBeTruthy();
  }));
});
