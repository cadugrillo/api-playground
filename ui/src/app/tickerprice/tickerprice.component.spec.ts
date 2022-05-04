import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TickerpriceComponent } from './tickerprice.component';

describe('TickerpriceComponent', () => {
  let component: TickerpriceComponent;
  let fixture: ComponentFixture<TickerpriceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TickerpriceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TickerpriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
