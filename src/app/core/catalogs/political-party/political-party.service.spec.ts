import { TestBed, inject } from '@angular/core/testing';

import { PoliticalPartyService } from './political-party.service';

describe('PoliticalPartyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PoliticalPartyService]
    });
  });

  it('should be created', inject([PoliticalPartyService], (service: PoliticalPartyService) => {
    expect(service).toBeTruthy();
  }));
});
