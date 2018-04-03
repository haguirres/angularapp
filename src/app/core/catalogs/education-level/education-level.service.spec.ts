import { TestBed, inject } from '@angular/core/testing';

import { EducationLevelService } from './education-level.service';

describe('EducationLevelService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EducationLevelService]
    });
  });

  it('should be created', inject([EducationLevelService], (service: EducationLevelService) => {
    expect(service).toBeTruthy();
  }));
});
