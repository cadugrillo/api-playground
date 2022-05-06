import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WforecastComponent } from './wforecast.component';

describe('WforecastComponent', () => {
  let component: WforecastComponent;
  let fixture: ComponentFixture<WforecastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WforecastComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WforecastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
