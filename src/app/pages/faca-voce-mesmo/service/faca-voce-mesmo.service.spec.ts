import { TestBed } from '@angular/core/testing';

import { FacaVoceMesmoService } from './faca-voce-mesmo.service';

describe('FacaVoceMesmoService', () => {
  let service: FacaVoceMesmoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FacaVoceMesmoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
