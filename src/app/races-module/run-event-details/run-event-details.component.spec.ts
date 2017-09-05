import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {RunEventDetailsComponent} from './run-event-details.component';

describe('RunEventDetailsComponent', () => {
  let component: RunEventDetailsComponent;
  let fixture: ComponentFixture<RunEventDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RunEventDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RunEventDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
