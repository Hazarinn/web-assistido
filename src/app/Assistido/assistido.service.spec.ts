import { TestBed } from '@angular/core/testing';

import { AssistidoService } from './assistido.service';

describe('AssistidoService', () => {
  let service: AssistidoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AssistidoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
