import { Component, OnInit, OnDestroy } from '@angular/core';
import { FontsService } from '../../services/fonts/fonts.service';
import { BaseElementsService } from '../../services/base-elements/base-elements.service';
import { Observable, Subject } from 'rxjs';
import { BaseElements } from '../../../store/entities/nodes/base-elements/base-elements.model';
import { FontFamily } from '../../../store/entities/font-family/font-family.model';
import { takeUntil } from 'rxjs/operators';
import { FontSize } from 'src/app/store/entities/font-size/font-size.model';
import { FontStyle } from 'src/app/store/entities/font-style/font-style.model';
import { FontVariant } from 'src/app/store/entities/font-variant/font-variant.model';
import { FontWeight } from 'src/app/store/entities/font-weight/font-weight.model';
import { LineHeight } from 'src/app/store/entities/line-height/line-height.model';

@Component({
    selector: 'app-fonts-editor',
    templateUrl: './fonts-editor.component.html',
    styleUrls: ['./fonts-editor.component.css']
})
export class FontsEditorComponent implements OnInit, OnDestroy {

    private unsubscribe$ = new Subject();

    baseElements$: Observable<BaseElements[]>;

    fontFamilies$: Observable<FontFamily[]>;
    fontSizes$: Observable<FontSize[]>;
    fontStyles$: Observable<FontStyle[]>;
    fontVariants$: Observable<FontVariant[]>;
    fontWeights$: Observable<FontWeight[]>;
    lineHeights$: Observable<LineHeight[]>;

    fontFamilyValues: string[];
    fontSizeValues: number[];
    fontStyleValues: string[];
    fontVariantValues: string[];
    fontWeightValues: (string | number)[];
    lineHeightValues: number[];

    constructor(
        private baseElementsService: BaseElementsService,
        private fontsService: FontsService
    ) {
        this.baseElements$ = this.baseElementsService.selectAllBaseElements().pipe(takeUntil(this.unsubscribe$));

        this.fontFamilies$ = this.fontsService.selectAllFontFamilies().pipe(takeUntil(this.unsubscribe$));
        this.fontSizes$ = this.fontsService.selectAllFontSizes().pipe(takeUntil(this.unsubscribe$));
        this.fontStyles$ = this.fontsService.selectAllFontStyles().pipe(takeUntil(this.unsubscribe$));
        this.fontVariants$ = this.fontsService.selectAllFontVariants().pipe(takeUntil(this.unsubscribe$));
        this.fontWeights$ = this.fontsService.selectAllFontWeights().pipe(takeUntil(this.unsubscribe$));
        this.lineHeights$ = this.fontsService.selectAllLineHeights().pipe(takeUntil(this.unsubscribe$));
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
        this.fontsService.updateElement(id, element, type);
    }

}
