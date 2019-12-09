import { TestBed } from '@angular/core/testing';

import { DefaultValuesService } from './default-values.service';

describe('DefaultValuesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DefaultValuesService = TestBed.get(DefaultValuesService);
    expect(service).toBeTruthy();
  });
});
