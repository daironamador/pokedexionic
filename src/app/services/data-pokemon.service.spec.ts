import { TestBed } from '@angular/core/testing';

import { DataPokemonService } from './data-pokemon.service';

describe('DataPokemonService', () => {
  let service: DataPokemonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataPokemonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
