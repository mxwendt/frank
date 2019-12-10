import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';

import { loadDefaultValues } from './store/actions/vars.actions';
import { Observable, Subject } from 'rxjs';
import { FontFamily } from './store/entities/font-family/font-family.model';

import * as fromRoot from './store/reducers';
import * as fromFontFamilies$ from './store/entities/font-family/font-family.reducer';
import { addFontFamily } from './store/entities/font-family/font-family.actions';
import { map, takeLast, take, takeUntil } from 'rxjs/operators';
import { FontSize } from './store/entities/font-size/font-size.model';
import { LineHeight } from './store/entities/line-height/line-height.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

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

  addNewFontFamily() {
    this.store.dispatch(addFontFamily({
      fontFamily: {
        id: this.fontFamilyTotal.toString(),
        value: '"Arial"',
        defaultValue: false
      }
    }));
  }
}
