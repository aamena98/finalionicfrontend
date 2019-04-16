import { TestBed } from '@angular/core/testing';

import { TeacherInteractionService } from './teacher-interaction.service';

describe('TeacherInteractionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TeacherInteractionService = TestBed.get(TeacherInteractionService);
    expect(service).toBeTruthy();
  });
});
