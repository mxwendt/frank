import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { BaseElements } from 'src/app/store/entities/nodes/base-elements/base-elements.model';

import * as fromRoot from '../../../store/reducers';

@Injectable({
    providedIn: 'root'
})
export class BaseElementsService {

    constructor(
        private store: Store<fromRoot.State>
    ) { }

    selectAllBaseElements(): Observable<BaseElements[]> {
        return this.store.pipe(
            select(fromRoot.selectAllBaseElements)
        );
    }

}
