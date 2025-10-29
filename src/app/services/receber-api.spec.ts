import { TestBed } from '@angular/core/testing';

import { ReceberApi } from './receber-api';

describe('ReceberApi', () => {
  let service: ReceberApi;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReceberApi);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
