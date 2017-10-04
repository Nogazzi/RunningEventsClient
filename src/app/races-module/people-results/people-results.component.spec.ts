import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleResultsComponent } from './people-results.component';

describe('PeopleResultsComponent', () => {
  let component: PeopleResultsComponent;
  let fixture: ComponentFixture<PeopleResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeopleResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeopleResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
