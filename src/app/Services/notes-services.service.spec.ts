import { TestBed } from '@angular/core/testing';

import { NotesServicesService } from './notes-services.service';

describe('NotesServicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NotesServicesService = TestBed.get(NotesServicesService);
    expect(service).toBeTruthy();
  });
});
