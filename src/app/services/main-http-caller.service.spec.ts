import { TestBed } from '@angular/core/testing';

import { MainHttpCallerService } from './main-http-caller.service';

describe('MainHttpCallerService', () => {
  let service: MainHttpCallerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MainHttpCallerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
