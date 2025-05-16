import { TestBed } from '@angular/core/testing';

import { PeoppeDataService } from './peoppe-data.service';

describe('PeoppeDataService', () => {
  let service: PeoppeDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PeoppeDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
