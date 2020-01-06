import { Component, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { takeUntil } from 'rxjs/operators';

import { FontFamily } from 'src/app/store/entities/props/fonts/font-family/font-family.model';
import { FontSize } from 'src/app/store/entities/props/fonts/font-size/font-size.model';
import { FontStyle } from 'src/app/store/entities/props/fonts/font-style/font-style.model';
import { FontVariant } from 'src/app/store/entities/props/fonts/font-variant/font-variant.model';
import { FontWeight } from 'src/app/store/entities/props/fonts/font-weight/font-weight.model';
import { LineHeight } from 'src/app/store/entities/props/fonts/line-height/line-height.model';
import { addFontFamily } from 'src/app/store/entities/props/fonts/font-family/font-family.actions';
import { addFontSize } from 'src/app/store/entities/props/fonts/font-size/font-size.actions';
import { addFontStyle } from 'src/app/store/entities/props/fonts/font-style/font-style.actions';
import { addFontVariant } from 'src/app/store/entities/props/fonts/font-variant/font-variant.actions';
import { addFontWeight } from 'src/app/store/entities/props/fonts/font-weight/font-weight.actions';
import { addLineHeight } from 'src/app/store/entities/props/fonts/line-height/line-height.actions';

import * as fromRoot from '../../../store/reducers';

@Component({
  selector: 'app-variable-editor',
  templateUrl: './variable-editor.component.html',
  styleUrls: ['./variable-editor.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VariableEditorComponent implements OnInit, OnDestroy {

  private unsubscribe$;

  fontFamilies$: Observable<FontFamily[]>;
  fontFamilyTotal$: Observable<number>;

  fontSizes$: Observable<FontSize[]>;
  fontSizeTotal$: Observable<number>;
  
  fontStyles$: Observable<FontStyle[]>;
  fontStyleTotal$: Observable<number>;

  fontVariants$: Observable<FontVariant[]>;
  fontVariantTotal$: Observable<number>;

  fontWeights$: Observable<FontWeight[]>;
  fontWeightTotal$: Observable<number>;

  lineHeights$: Observable<LineHeight[]>;
  lineHeightTotal$: Observable<number>;

  private fontFamilyTotal: number;
  private fontSizeTotal: number;
  private fontStyleTotal: number;
  private fontVariantTotal: number;
  private fontWeightTotal: number;
  private lineHeightTotal: number;

  constructor(
    private store: Store<fromRoot.State>
  ) {
    this.unsubscribe$ = new Subject();
    
    this.fontFamilies$ = this.store.pipe(select(fromRoot.selectAllFontFamilies));
    this.fontFamilyTotal$ = this.store.pipe(
      select(fromRoot.selectFontFamilyTotal),
      takeUntil(this.unsubscribe$)
    );

    this.fontSizes$ = this.store.pipe(select(fromRoot.selectAllFontSizes));
    this.fontSizeTotal$ = this.store.pipe(
      select(fromRoot.selectFontSizeTotal),
      takeUntil(this.unsubscribe$)
    );
    
    this.fontStyles$ = this.store.pipe(select(fromRoot.selectAllFontStyles));
    this.fontStyleTotal$ = this.store.pipe(
      select(fromRoot.selectFontStyleTotal),
      takeUntil(this.unsubscribe$)
    );

    this.fontVariants$ = this.store.pipe(select(fromRoot.selectAllFontVariants));
    this.fontVariantTotal$ = this.store.pipe(
      select(fromRoot.selectFontVariantTotal),
      takeUntil(this.unsubscribe$)
    );

    this.fontWeights$ = this.store.pipe(select(fromRoot.selectAllFontWeights));
    this.fontWeightTotal$ = this.store.pipe(
      select(fromRoot.selectFontWeightTotal),
      takeUntil(this.unsubscribe$)
    );

    this.lineHeights$ = this.store.pipe(select(fromRoot.selectAllLineHeights));
    this.lineHeightTotal$ = this.store.pipe(
      select(fromRoot.selectLineHeihgtTotal),
      takeUntil(this.unsubscribe$)
    );
  }

  ngOnInit() {
    this.fontFamilyTotal$.subscribe((total: number) => this.fontFamilyTotal = total);
    this.fontSizeTotal$.subscribe((total: number) => this.fontSizeTotal = total);
    this.fontStyleTotal$.subscribe((total: number) => this.fontStyleTotal = total);
    this.fontVariantTotal$.subscribe((total: number) => this.fontVariantTotal = total);
    this.fontWeightTotal$.subscribe((total: number) => this.fontWeightTotal = total);
    this.lineHeightTotal$.subscribe((total: number) => this.lineHeightTotal = total);
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  addNewFontFamily(input: HTMLInputElement) {
    if (!input || input.value === '') return;

    this.store.dispatch(addFontFamily({
      fontFamily: {
        id: this.fontFamilyTotal.toString(),
        value: `"${input.value}"`,
        defaultValue: false
      }
    }));

    input.value = '';
  }

  addNewFontSize(input: HTMLInputElement) {
    if (!input || input.value === '') return;

    this.store.dispatch(addFontSize({
      fontSize: {
        id: this.fontSizeTotal.toString(),
        value: parseInt(input.value, 10),
        unit: 'px',
        defaultValue: false
      }
    }));

    input.value = '';
  }

  addNewFontStyle(input: HTMLInputElement) {
    if (!input || input.value === '') return;

    this.store.dispatch(addFontStyle({
      fontStyle: {
        id: this.fontStyleTotal.toString(),
        value: input.value,
        defaultValue: false
      }
    }));

    input.value = '';
  }

  addNewFontVariant(input: HTMLInputElement) {
    if (!input || input.value === '') return;

    this.store.dispatch(addFontVariant({
      fontVariant: {
        id: this.fontVariantTotal.toString(),
        value: input.value,
        defaultValue: false
      }
    }));

    input.value = '';
  }

  addNewFontWeight(input: HTMLInputElement) {
    if (!input || input.value === '') return;

    this.store.dispatch(addFontWeight({
      fontWeight: {
        id: this.fontWeightTotal.toString(),
        value: input.value,
        defaultValue: false
      }
    }));

    input.value = '';
  }

  addNewLineHeight(input: HTMLInputElement) {
    if (!input || input.value === '') return;

    this.store.dispatch(addLineHeight({
      lineHeight: {
        id: this.lineHeightTotal.toString(),
        value: parseFloat(input.value),
        unit: 'em',
        defaultValue: false
      }
    }));

    input.value = '';
  }

}
