import { TestBed, inject } from '@angular/core/testing';

import { RunEventsService } from './run-events.service';

describe('RunEventsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RunEventsService]
    });
  });

  it('should be created', inject([RunEventsService], (service: RunEventsService) => {
    expect(service).toBeTruthy();
  }));
});
