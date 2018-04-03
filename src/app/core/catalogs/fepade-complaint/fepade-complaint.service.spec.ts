import { TestBed, inject } from '@angular/core/testing';

import { FepadeComplaintService } from './fepade-complaint.service';

describe('FepadeComplaintService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FepadeComplaintService]
    });
  });

  it('should be created', inject([FepadeComplaintService], (service: FepadeComplaintService) => {
    expect(service).toBeTruthy();
  }));
});
