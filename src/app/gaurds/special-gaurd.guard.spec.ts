import { TestBed } from '@angular/core/testing';

import { SpecialGaurdGuard } from './special-gaurd.guard';

describe('SpecialGaurdGuard', () => {
  let guard: SpecialGaurdGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(SpecialGaurdGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
