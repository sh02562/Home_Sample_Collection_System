import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingTimeSlotComponent } from './booking-time-slot.component';

describe('BookingTimeSlotComponent', () => {
  let component: BookingTimeSlotComponent;
  let fixture: ComponentFixture<BookingTimeSlotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookingTimeSlotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingTimeSlotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
