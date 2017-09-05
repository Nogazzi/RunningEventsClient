import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewRaceEventComponent } from './new-race-event.component';

describe('NewRaceEventComponent', () => {
  let component: NewRaceEventComponent;
  let fixture: ComponentFixture<NewRaceEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewRaceEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewRaceEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
