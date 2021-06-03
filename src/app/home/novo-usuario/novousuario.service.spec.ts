import { TestBed } from '@angular/core/testing';

import { NovoUsuarioService } from './novousuario.service';

describe('NovousuarioService', () => {
  let service: NovoUsuarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NovoUsuarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
