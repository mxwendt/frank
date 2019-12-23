import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { BaseElements } from 'src/app/store/entities/nodes/base-elements/base-elements.model';
import { LetterSpacing } from 'src/app/store/entities/props/text/letter-spacing/letter-spacing.model';
import { TextAlign } from 'src/app/store/entities/props/text/text-align/text-align.model';
import { TextService } from '../../services/text/text.service';
import { takeUntil } from 'rxjs/operators';
import { select, Store } from '@ngrx/store';

import * as fromRoot from '../../../store/reducers';

@Component({
    selector: 'app-text-editor',
    templateUrl: './text-editor.component.html',
    styleUrls: ['./text-editor.component.css']
})
export class TextEditorComponent implements OnInit, OnDestroy {

    private unsubscribe$;

    baseElements$: Observable<BaseElements[]>;

    letterSpacing$: Observable<LetterSpacing[]>;
    textAlign$: Observable<TextAlign[]>;

    letterSpacingValues: number[];
    textAlignValues: string[];

    constructor(
        private store: Store<fromRoot.State>,
        private textService: TextService
    ) {
        this.unsubscribe$ = new Subject();
        
        this.baseElements$ = this.store.pipe(
            select(fromRoot.selectAllBaseElements),
            takeUntil(this.unsubscribe$)
        )

        this.letterSpacing$ = this.store.pipe(
            select(fromRoot.selectAllLetterSpacings),
            takeUntil(this.unsubscribe$)
            );
            
        this.textAlign$ = this.store.pipe(
            select(fromRoot.selectAllTextAligns),
            takeUntil(this.unsubscribe$)
        );
    }

    ngOnInit() {
        this.letterSpacing$.subscribe((letterSpacings: LetterSpacing[]) => {
            this.letterSpacingValues = letterSpacings.map((LetterSpacing: LetterSpacing) => LetterSpacing.value);
        });

        this.textAlign$.subscribe((textAligns: TextAlign[]) => {
            this.textAlignValues = textAligns.map((TextAlign: TextAlign) => TextAlign.value);
        });
    }

    ngOnDestroy() {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }

    updateElement(id: string, element: BaseElements, type: string) {
        this.textService.updateElement(id, element, type);
    }

}
