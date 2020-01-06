import { Component, OnInit, OnDestroy } from '@angular/core';
import { FontsService } from '../../services/fonts/fonts.service';
import { Observable, Subject } from 'rxjs';
import { Node } from 'src/app/store/entities/node/node.model';
import { FontFamily } from '../../../store/entities/props/fonts/font-family/font-family.model';
import { takeUntil } from 'rxjs/operators';
import { FontSize } from 'src/app/store/entities/props/fonts/font-size/font-size.model';
import { FontStyle } from 'src/app/store/entities/props/fonts/font-style/font-style.model';
import { FontVariant } from 'src/app/store/entities/props/fonts/font-variant/font-variant.model';
import { FontWeight } from 'src/app/store/entities/props/fonts/font-weight/font-weight.model';
import { LineHeight } from 'src/app/store/entities/props/fonts/line-height/line-height.model';
import { select, Store } from '@ngrx/store';

import * as fromRoot from '../../../store/reducers';

@Component({
    selector: 'app-fonts-editor',
    templateUrl: './fonts-editor.component.html',
    styleUrls: ['./fonts-editor.component.css']
})
export class FontsEditorComponent implements OnInit, OnDestroy {

    private unsubscribe$: Subject<any>;

    nodes$: Observable<Node[]>;

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
        private store: Store<fromRoot.State>,
        private fontsService: FontsService
    ) {
        this.unsubscribe$ = new Subject();

        this.nodes$ = this.store.pipe(
            select(fromRoot.selectAllNodes),
            takeUntil(this.unsubscribe$)
        )

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

    update(id: string, node: Node, type: string) {
        this.fontsService.updateNode(id, node, type);
    }

}
