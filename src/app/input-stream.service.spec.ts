import { TestBed, inject } from '@angular/core/testing';

import { InputStreamService } from './input-stream.service';

describe('InputStreamService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InputStreamService]
    });
  });

  it('should be created', inject([InputStreamService], (service: InputStreamService) => {
    expect(service).toBeTruthy();
  }));
});
