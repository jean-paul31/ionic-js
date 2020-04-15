import { TestBed } from '@angular/core/testing';

import { LogementsService } from './logements.service';

describe('LogementsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LogementsService = TestBed.get(LogementsService);
    expect(service).toBeTruthy();
  });
});
