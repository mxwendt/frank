import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { FontFamilyEffects } from './font-family.effects';

describe('FontFamilyEffects', () => {
  let actions$: Observable<any>;
  let effects: FontFamilyEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        FontFamilyEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get<FontFamilyEffects>(FontFamilyEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
