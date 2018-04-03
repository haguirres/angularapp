import { TestBed, inject } from '@angular/core/testing';

import { ElectoralElectionService } from './electoral-election.service';

describe('ElectoralElectionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ElectoralElectionService]
    });
  });

  it('should be created', inject([ElectoralElectionService], (service: ElectoralElectionService) => {
    expect(service).toBeTruthy();
  }));
});
