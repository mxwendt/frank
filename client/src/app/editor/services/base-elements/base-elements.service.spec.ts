import { TestBed } from '@angular/core/testing';

import { BaseElementsService } from './base-elements.service';

describe('BaseElementsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BaseElementsService = TestBed.get(BaseElementsService);
    expect(service).toBeTruthy();
  });
});
