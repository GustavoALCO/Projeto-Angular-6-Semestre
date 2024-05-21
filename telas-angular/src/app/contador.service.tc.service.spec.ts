import { TestBed } from '@angular/core/testing';

import { ContadorServiceTcService } from './contador.service.tc.service';

describe('ContadorServiceTcService', () => {
  let service: ContadorServiceTcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContadorServiceTcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
