import { TestBed } from '@angular/core/testing';

import { ChronometerProvider } from './chronometer.provider';

describe('ChronometerService', () => {
  let service: ChronometerProvider;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChronometerProvider);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
