import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { Node } from 'src/app/store/entities/node/node.model';
import { updateNode } from 'src/app/store/entities/node/node.actions';

import * as fromRoot from '../../../store/reducers';

@Injectable({
    providedIn: 'root'
})
export class TextService {

    constructor(
        private store: Store<fromRoot.State>
    ) { }

    updateNode(id: string, node: Node, type: string) {
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

        const update: Update<Node> = {
            id: node.id,
            changes: {
                declarations: {
                    fonts: {
                        ...node.declarations.fonts
                    },
                    text: {
                        ...node.declarations.text,
                        ...textProp
                    }
                }
            }
        };

        this.store.dispatch(updateNode({ node: update }))
    }
}
