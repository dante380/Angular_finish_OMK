import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrueCalendarComponent } from './true-calendar.component';

describe('TrueCalendarComponent', () => {
  let component: TrueCalendarComponent;
  let fixture: ComponentFixture<TrueCalendarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrueCalendarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrueCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
