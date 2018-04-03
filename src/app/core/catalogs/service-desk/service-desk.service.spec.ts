import { TestBed, inject } from '@angular/core/testing';

import { ServiceDeskService } from './service-desk.service';

describe('ServiceDeskService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServiceDeskService]
    });
  });

  it('should be created', inject([ServiceDeskService], (service: ServiceDeskService) => {
    expect(service).toBeTruthy();
  }));
});
