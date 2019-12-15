import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject, Observable } from 'rxjs';

import { BaseElements } from '../store/entities/nodes/base-elements/base-elements.model';

import * as fromRoot from '../store/reducers';
import { Store, select } from '@ngrx/store';
import { FontFamily } from '../store/entities/font-family/font-family.model';
import { FontSize } from '../store/entities/font-size/font-size.model';
import { FontStyle } from '../store/entities/font-style/font-style.model';
import { FontVariant } from '../store/entities/font-variant/font-variant.model';
import { FontWeight } from '../store/entities/font-weight/font-weight.model';
import { LineHeight } from '../store/entities/line-height/line-height.model';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit, OnDestroy {

  private unsubscribe$ = new Subject();

  baseElements$: Observable<BaseElements[]>;

  fontFamilies$: Observable<FontFamily[]>;
  fontSizes$: Observable<FontSize[]>;
  fontStyles$: Observable<FontStyle[]>;
  fontVariants$: Observable<FontVariant[]>;
  fontWeights$: Observable<FontWeight[]>;
  lineHeights$: Observable<LineHeight[]>;

  selectedFontFamily: string;

  constructor(
    private store: Store<fromRoot.State>
  ) {
    this.baseElements$ = this.store.pipe(select(fromRoot.selectAllBaseElements));

    this.fontFamilies$ = this.store.pipe(select(fromRoot.selectAllFontFamilies));
    this.fontSizes$ = this.store.pipe(select(fromRoot.selectAllFontSizes));
    this.fontStyles$ = this.store.pipe(select(fromRoot.selectAllFontStyles));
    this.fontVariants$ = this.store.pipe(select(fromRoot.selectAllFontVariants));
    this.fontWeights$ = this.store.pipe(select(fromRoot.selectAllFontWeights));
    this.lineHeights$ = this.store.pipe(select(fromRoot.selectAllLineHeights));
  }

  ngOnInit() {
    this.fontFamilies$.subscribe((fontFamilies: FontFamily[]) => {
      
    });
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
