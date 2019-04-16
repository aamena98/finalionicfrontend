import { TestBed } from '@angular/core/testing';

import { HomeworkserviceService } from './homeworkservice.service';

describe('HomeworkserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HomeworkserviceService = TestBed.get(HomeworkserviceService);
    expect(service).toBeTruthy();
  });
});
