/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ParceirosService } from './parceiros.service';

describe('Service: Parceiros', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ParceirosService]
    });
  });

  it('should ...', inject([ParceirosService], (service: ParceirosService) => {
    expect(service).toBeTruthy();
  }));
});
