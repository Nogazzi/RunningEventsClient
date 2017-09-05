import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RunEventsListComponent } from './run-events-list.component';

describe('RunEventsListComponent', () => {
  let component: RunEventsListComponent;
  let fixture: ComponentFixture<RunEventsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RunEventsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RunEventsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
