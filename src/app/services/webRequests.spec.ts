import { TestBed } from '@angular/core/testing';

import { WebRequests } from './webRequests.service';

describe('SignalRService', () => {
  let service: WebRequests;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WebRequests);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
