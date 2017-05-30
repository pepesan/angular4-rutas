import { TestBed, inject } from '@angular/core/testing';

import { ResultadosService } from './resultados.service';

describe('ResultadosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ResultadosService]
    });
  });

  it('should be created', inject([ResultadosService], (service: ResultadosService) => {
    expect(service).toBeTruthy();
  }));
});
