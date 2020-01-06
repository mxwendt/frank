import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { Node } from 'src/app/store/entities/node/node.model';
import { updateNode } from 'src/app/store/entities/node/node.actions';
import { FontFamily } from 'src/app/store/entities/props/fonts/font-family/font-family.model';
import { FontStyle } from 'src/app/store/entities/props/fonts/font-style/font-style.model';
import { FontSize } from 'src/app/store/entities/props/fonts/font-size/font-size.model';
import { FontVariant } from 'src/app/store/entities/props/fonts/font-variant/font-variant.model';
import { FontWeight } from 'src/app/store/entities/props/fonts/font-weight/font-weight.model';
import { LineHeight } from 'src/app/store/entities/props/fonts/line-height/line-height.model';

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

    updateNode(id: string, node: Node, type: string) {
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

        const update: Update<Node> = {
            id: node.id,
            changes: {
                declarations: {
                    fonts: {
                        ...node.declarations.fonts,
                        ...fontProp
                    },
                    text: {
                        ...node.declarations.text
                    }
                }
            }
        };

        this.store.dispatch(updateNode({ node: update }))
    }
}
