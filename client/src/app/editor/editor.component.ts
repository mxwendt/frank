import { Component, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { takeUntil } from 'rxjs/operators';

import { BaseElements } from '../store/entities/nodes/base-elements/base-elements.model';
import { FontFamily } from '../store/entities/font-family/font-family.model';
import { FontSize } from '../store/entities/font-size/font-size.model';
import { FontStyle } from '../store/entities/font-style/font-style.model';
import { FontVariant } from '../store/entities/font-variant/font-variant.model';
import { FontWeight } from '../store/entities/font-weight/font-weight.model';
import { LineHeight } from '../store/entities/line-height/line-height.model';

import * as fromRoot from '../store/reducers';
import { Update } from '@ngrx/entity';
import { updateFontFamily } from '../store/entities/font-family/font-family.actions';
import { updateBaseElements } from '../store/entities/nodes/base-elements/base-elements.actions';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditorComponent implements OnInit, OnDestroy {

  private unsubscribe$ = new Subject();

  baseElements$: Observable<BaseElements[]>;

  fontFamilies$: Observable<FontFamily[]>;
  fontFamilyValues: string[];

  fontSizes$: Observable<FontSize[]>;
  fontSizeValues: number[];
  
  fontStyles$: Observable<FontStyle[]>;
  fontStyleValues: string[];
  
  fontVariants$: Observable<FontVariant[]>;
  fontVariantValues: string[];
  
  fontWeights$: Observable<FontWeight[]>;
  fontWeightValues: (string | number)[];
  
  lineHeights$: Observable<LineHeight[]>;
  lineHeightValues: number[];

  selectedFontFamily: string;

  constructor(
    private store: Store<fromRoot.State>
  ) {
    this.baseElements$ = this.store.pipe(select(fromRoot.selectAllBaseElements));

    this.fontFamilies$ = this.store.pipe(
      select(fromRoot.selectAllFontFamilies),
      takeUntil(this.unsubscribe$)
    );

    this.fontSizes$ = this.store.pipe(
      select(fromRoot.selectAllFontSizes),
      takeUntil(this.unsubscribe$)
    );

    this.fontStyles$ = this.store.pipe(
      select(fromRoot.selectAllFontStyles),
      takeUntil(this.unsubscribe$)
    );
    
    this.fontVariants$ = this.store.pipe(
      select(fromRoot.selectAllFontVariants),
      takeUntil(this.unsubscribe$)
    );
    
    this.fontWeights$ = this.store.pipe(
      select(fromRoot.selectAllFontWeights),
      takeUntil(this.unsubscribe$)
    );
    
    this.lineHeights$ = this.store.pipe(
      select(fromRoot.selectAllLineHeights),
      takeUntil(this.unsubscribe$)
    );
  }

  ngOnInit() {
    this.fontFamilies$.subscribe((fontFamilies: FontFamily[]) => {
      this.fontFamilyValues = fontFamilies.map((fontFamily: FontFamily) => fontFamily.value);
    });

    this.fontSizes$.subscribe((fontSizes: FontSize[]) => {
      this.fontSizeValues = fontSizes.map((fontSize: FontSize) => fontSize.value);
    });

    this.fontStyles$.subscribe((fontStyles: FontStyle[]) => {
      this.fontStyleValues = fontStyles.map((fontStyle: FontStyle) => fontStyle.value);
    });

    this.fontVariants$.subscribe((fontVariants: FontVariant[]) => {
      this.fontVariantValues = fontVariants.map((fontVariant: FontVariant) => fontVariant.value);
    });

    this.fontWeights$.subscribe((fontWeights: FontWeight[]) => {
      this.fontWeightValues = fontWeights.map((fontWeight: FontWeight) => fontWeight.value);
    });

    this.lineHeights$.subscribe((lineHeight: LineHeight[]) => {
      this.lineHeightValues = lineHeight.map((lineHeight: LineHeight) => lineHeight.value);
    });
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  updateElement(id: string, element: BaseElements, type: string) {
    let fontProp = null;

    switch (type) {
      case 'fontFamily':
        fontProp = {fontFamily: id}
        break;
      case 'fontSize':
        fontProp = {fontSize: id}
        break;
      case 'fontStyle':
        fontProp = {fontStyle: id}
        break;
      case 'fontVariant':
        fontProp = {fontVariant: id}
        break;
      case 'fontWeight':
        fontProp = {fontWeight: id}
        break;
      case 'lineHeight':
        fontProp = {lineHeight: id}
        break;
    
      default:
        break;
    }

    if (fontProp === null) return;

    const update: Update<BaseElements> = {
      id: element.id,
      changes: {
        declarations: {
          fonts: {
            ...element.declarations.fonts,
            ...fontProp
          }
        }
      }
    };

    this.store.dispatch(updateBaseElements({baseElements: update}))
  }

}
