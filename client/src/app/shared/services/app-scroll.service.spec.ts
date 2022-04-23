import { TestBed } from '@angular/core/testing';

import { AppScrollService } from './app-scroll.service';

describe('AppScrollService', () => {
  let service: AppScrollService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppScrollService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
