import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { LineHeight } from 'src/app/store/entities/line-height/line-height.model';
import { FontSize } from 'src/app/store/entities/font-size/font-size.model';
import { FontFamily } from 'src/app/store/entities/font-family/font-family.model';

import * as fromRoot from '../../store/reducers';
import { Store, select } from '@ngrx/store';
import { loadDefaultValues } from 'src/app/store/actions/vars.actions';
import { takeUntil } from 'rxjs/operators';
import { addFontFamily } from 'src/app/store/entities/font-family/font-family.actions';
import { addFontSize } from 'src/app/store/entities/font-size/font-size.actions';
import { addLineHeight } from 'src/app/store/entities/line-height/line-height.actions';

@Component({
  selector: 'app-variable-editor',
  templateUrl: './variable-editor.component.html',
  styleUrls: ['./variable-editor.component.css']
})
export class VariableEditorComponent implements OnInit, OnDestroy {

  private unsubscribe$ = new Subject();

  fontFamilies$: Observable<FontFamily[]>;
  fontFamilyTotal$: Observable<number>;

  fontSizes$: Observable<FontSize[]>;
  fontSizeTotal$: Observable<number>;

  lineHeights$: Observable<LineHeight[]>;
  lineHeightTotal$: Observable<number>;

  private fontFamilyTotal: number;
  private fontSizeTotal: number;
  private lineHeightTotal: number;

  constructor(
    private store: Store<fromRoot.State>
  ) {
    this.store.dispatch(loadDefaultValues());
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

    this.lineHeights$ = this.store.pipe(select(fromRoot.selectAllLineHeights));
    this.lineHeightTotal$ = this.store.pipe(
      select(fromRoot.selectLineHeihgtTotal),
      takeUntil(this.unsubscribe$)
    );
  }

  ngOnInit() {
    this.fontFamilyTotal$.subscribe((total: number) => this.fontFamilyTotal = total);
    this.fontSizeTotal$.subscribe((total: number) => this.fontSizeTotal = total);
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
