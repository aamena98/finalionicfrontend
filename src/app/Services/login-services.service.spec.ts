import { TestBed } from '@angular/core/testing';

import { LoginServicesService } from './login-services.service';

describe('LoginServicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoginServicesService = TestBed.get(LoginServicesService);
    expect(service).toBeTruthy();
  });
});
