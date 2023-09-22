import { TestBed } from '@angular/core/testing';

import { ObsolescenceService } from './obsolescence.service';

describe('ObsolescenceService', () => {
  let service: ObsolescenceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ObsolescenceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
