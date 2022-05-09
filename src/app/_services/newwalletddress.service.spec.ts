import { TestBed } from '@angular/core/testing';

import { NewwalletddressService } from './newwalletddress.service';

describe('NewwalletddressService', () => {
  let service: NewwalletddressService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewwalletddressService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
