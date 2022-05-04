import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatefactComponent } from './datefact.component';

describe('DatefactComponent', () => {
  let component: DatefactComponent;
  let fixture: ComponentFixture<DatefactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatefactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatefactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
