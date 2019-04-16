import { TestBed } from '@angular/core/testing';

import { StudentTimetableService } from './student-timetable.service';

describe('StudentTimetableService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StudentTimetableService = TestBed.get(StudentTimetableService);
    expect(service).toBeTruthy();
  });
});
