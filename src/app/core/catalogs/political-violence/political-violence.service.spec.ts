import { TestBed, inject } from '@angular/core/testing';

import { PoliticalViolenceService } from './political-violence.service';

describe('PoliticalViolenceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PoliticalViolenceService]
    });
  });

  it('should be created', inject([PoliticalViolenceService], (service: PoliticalViolenceService) => {
    expect(service).toBeTruthy();
  }));
});
