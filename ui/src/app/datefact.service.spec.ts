import { TestBed } from '@angular/core/testing';

import { DatefactService } from './datefact.service';

describe('DatefactService', () => {
  let service: DatefactService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatefactService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
