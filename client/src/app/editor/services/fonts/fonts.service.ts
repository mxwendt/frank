import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { BaseElements } from 'src/app/store/entities/nodes/base-elements/base-elements.model';
import { updateBaseElements } from 'src/app/store/entities/nodes/base-elements/base-elements.actions';
import { FontFamily } from 'src/app/store/entities/font-family/font-family.model';
import { FontStyle } from 'src/app/store/entities/font-style/font-style.model';
import { FontSize } from 'src/app/store/entities/font-size/font-size.model';
import { FontVariant } from 'src/app/store/entities/font-variant/font-variant.model';
import { FontWeight } from 'src/app/store/entities/font-weight/font-weight.model';
import { LineHeight } from 'src/app/store/entities/line-height/line-height.model';

import * as fromRoot from '../../../store/reducers';

@Injectable({
    providedIn: 'root'
})
export class FontsService {

    constructor(
        private store: Store<fromRoot.State>
    ) { }

    selectAllFontFamilies(): Observable<FontFamily[]> {
        return this.store.pipe(
            select(fromRoot.selectAllFontFamilies)
        );
    }

    selectAllFontSizes(): Observable<FontSize[]> {
        return this.store.pipe(
            select(fromRoot.selectAllFontSizes)
        );
    }

    selectAllFontStyles(): Observable<FontStyle[]> {
        return this.store.pipe(
            select(fromRoot.selectAllFontStyles)
        );
    }

    selectAllFontVariants(): Observable<FontVariant[]> {
        return this.store.pipe(
            select(fromRoot.selectAllFontVariants)
        );
    }

    selectAllFontWeights(): Observable<FontWeight[]> {
        return this.store.pipe(
            select(fromRoot.selectAllFontWeights)
        );
    }

    selectAllLineHeights(): Observable<LineHeight[]> {
        return this.store.pipe(
            select(fromRoot.selectAllLineHeights)
        );
    }

    updateElement(id: string, element: BaseElements, type: string) {
        let fontProp = null;

        switch (type) {
            case 'fontFamily':
                fontProp = { fontFamily: id }
                break;
            case 'fontSize':
                fontProp = { fontSize: id }
                break;
            case 'fontStyle':
                fontProp = { fontStyle: id }
                break;
            case 'fontVariant':
                fontProp = { fontVariant: id }
                break;
            case 'fontWeight':
                fontProp = { fontWeight: id }
                break;
            case 'lineHeight':
                fontProp = { lineHeight: id }
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
                    },
                    text: {
                        ...element.declarations.text
                    }
                }
            }
        };

        this.store.dispatch(updateBaseElements({ baseElements: update }))
    }
}
