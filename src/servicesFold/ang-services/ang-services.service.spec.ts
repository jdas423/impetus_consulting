import { TestBed } from '@angular/core/testing';

import { AngServicesService } from './ang-services.service';

describe('AngServicesService', () => {
  let service: AngServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AngServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
