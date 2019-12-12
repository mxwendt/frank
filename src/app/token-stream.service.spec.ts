import { TestBed, inject } from '@angular/core/testing';

import { TokenStreamService } from './token-stream.service';

describe('TokenStreamService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TokenStreamService]
    });
  });

  it('should be created', inject([TokenStreamService], (service: TokenStreamService) => {
    expect(service).toBeTruthy();
  }));
});
