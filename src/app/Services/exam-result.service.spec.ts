import { TestBed } from '@angular/core/testing';

import { ExamResultService } from './exam-result.service';

describe('ExamResultService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExamResultService = TestBed.get(ExamResultService);
    expect(service).toBeTruthy();
  });
});
