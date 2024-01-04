import { TestBed } from '@angular/core/testing';

import { ApiserService } from './apiser.service';

describe('ApiserService', () => {
  let service: ApiserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
