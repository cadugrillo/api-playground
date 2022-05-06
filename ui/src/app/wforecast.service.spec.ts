import { TestBed } from '@angular/core/testing';

import { WforecastService } from './wforecast.service';

describe('WforecastService', () => {
  let service: WforecastService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WforecastService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
