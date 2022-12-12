import { TestBed } from '@angular/core/testing';

import { FilldetailsService } from './filldetails.service';

describe('FilldetailsService', () => {
  let service: FilldetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilldetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
