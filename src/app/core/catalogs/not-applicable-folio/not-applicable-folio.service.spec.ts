import { TestBed, inject } from '@angular/core/testing';

import { NotApplicableFolioService } from './not-applicable-folio.service';

describe('NotApplicableFolioService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NotApplicableFolioService]
    });
  });

  it('should be created', inject([NotApplicableFolioService], (service: NotApplicableFolioService) => {
    expect(service).toBeTruthy();
  }));
});
