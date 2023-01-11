import { TestBed } from '@angular/core/testing';

import { BdFilmService } from './bd-film.service';

describe('BdFilmService', () => {
  let service: BdFilmService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BdFilmService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
