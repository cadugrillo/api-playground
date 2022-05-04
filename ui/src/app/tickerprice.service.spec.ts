import { TestBed } from '@angular/core/testing';

import { TickerpriceService } from './tickerprice.service';

describe('TickerpriceService', () => {
  let service: TickerpriceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TickerpriceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
