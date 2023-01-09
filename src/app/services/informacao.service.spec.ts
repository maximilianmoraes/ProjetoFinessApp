import { InformacaoService } from 'src/app/services/informacao.service';
import { TestBed } from '@angular/core/testing';

describe('InformacaoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InformacaoService = TestBed.get(InformacaoService);
    expect(service).toBeTruthy();
  });
});
