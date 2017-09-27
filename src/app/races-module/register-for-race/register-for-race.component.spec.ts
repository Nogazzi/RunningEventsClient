import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterForRaceComponent } from './register-for-race.component';

describe('RegisterForRaceComponent', () => {
  let component: RegisterForRaceComponent;
  let fixture: ComponentFixture<RegisterForRaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterForRaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterForRaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
