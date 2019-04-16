import { TestBed } from '@angular/core/testing';

import { ParentInteractService } from './parent-interact.service';

describe('ParentInteractService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ParentInteractService = TestBed.get(ParentInteractService);
    expect(service).toBeTruthy();
  });
});
