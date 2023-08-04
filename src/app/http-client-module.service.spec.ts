import { TestBed } from '@angular/core/testing';

import { HttpClientModuleService } from './http-client-module.service';

describe('HttpClientModuleService', () => {
  let service: HttpClientModuleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpClientModuleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
