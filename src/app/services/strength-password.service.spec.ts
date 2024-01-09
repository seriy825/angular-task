import { TestBed } from '@angular/core/testing';

import { StrengthPasswordService } from './strength-password.service';

describe('StrengthPasswordService', () => {
  let service: StrengthPasswordService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StrengthPasswordService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
