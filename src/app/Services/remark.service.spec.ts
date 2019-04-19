import { TestBed } from '@angular/core/testing';

import { RemarkService } from './remark.service';

describe('RemarkService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RemarkService = TestBed.get(RemarkService);
    expect(service).toBeTruthy();
  });
});
