import { TestBed } from '@angular/core/testing';

import { TvshowfakeService } from './tvshowfake.service';

describe('TvshowfakeService', () => {
  let service: TvshowfakeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TvshowfakeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
