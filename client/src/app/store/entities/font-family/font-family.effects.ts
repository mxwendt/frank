import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { DefaultValuesService } from '../../../services/default-values.service';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import { loadFontFamilys } from './font-family.actions';
import { FontFamily } from './font-family.model';
import { loadDefaultValues } from '../../actions/vars.actions';

@Injectable()
export class FontFamilyEffects {

  loadDefaultValues$ = createEffect(() => this.actions$.pipe(
    ofType(loadDefaultValues),
    mergeMap(() => this.defaultValuesService.getDefaultFontFamilies().pipe(
      map((fontFamilies: string[]) => {
        console.log(fontFamilies);

        let fontFamilyEntites: FontFamily[] = [];

        fontFamilies.forEach((fontFamily: string, index: number) => {
          fontFamilyEntites.push({
            id: index.toString(),
            value: fontFamily
          });
        });

        return loadFontFamilys({ fontFamilys: fontFamilyEntites });
      }),
      catchError(() => EMPTY)
    ))
  ));

  constructor(
    private actions$: Actions,
    private defaultValuesService: DefaultValuesService
  ) { }

}
