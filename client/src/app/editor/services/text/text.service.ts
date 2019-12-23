import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { BaseElements } from 'src/app/store/entities/nodes/base-elements/base-elements.model';
import { updateBaseElements } from 'src/app/store/entities/nodes/base-elements/base-elements.actions';

import * as fromRoot from '../../../store/reducers';

@Injectable({
    providedIn: 'root'
})
export class TextService {

    constructor(
        private store: Store<fromRoot.State>
    ) { }

    updateElement(id: string, element: BaseElements, type: string) {
        let textProp = null;

        switch (type) {
            case 'letterSpacing':
                textProp = { letterSpacing: id }
                break;
            case 'textAlign':
                textProp = { textAlign: id }
                break;

            default:
                break;
        }

        if (textProp === null) return;

        const update: Update<BaseElements> = {
            id: element.id,
            changes: {
                declarations: {
                    fonts: {
                        ...element.declarations.fonts
                    },
                    text: {
                        ...element.declarations.text,
                        ...textProp
                    }
                }
            }
        };

        this.store.dispatch(updateBaseElements({ baseElements: update }))
    }
}
