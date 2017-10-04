import { TestBed, inject } from '@angular/core/testing';

import { PeopleResultsService } from './people-results.service';

describe('PeopleResultsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PeopleResultsService]
    });
  });

  it('should be created', inject([PeopleResultsService], (service: PeopleResultsService) => {
    expect(service).toBeTruthy();
  }));
});
