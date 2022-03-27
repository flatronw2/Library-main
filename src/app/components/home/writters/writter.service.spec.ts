import { TestBed } from '@angular/core/testing';

import { WritterService } from './writter.service';

describe('WritterService', () => {
  let service: WritterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WritterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
