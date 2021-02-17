import { TestBed } from '@angular/core/testing';

import { RootInterceptorService } from './root-interceptor.service';

describe('RootInterceptorService', () => {
  let service: RootInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RootInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
