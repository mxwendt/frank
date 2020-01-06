import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Node } from 'src/app/store/entities/node/node.model';
import { LetterSpacing } from 'src/app/store/entities/props/text/letter-spacing/letter-spacing.model';
import { TextAlign } from 'src/app/store/entities/props/text/text-align/text-align.model';
import { TextIndent } from 'src/app/store/entities/props/text/text-indent/text-indent.model';
import { TextTransform } from 'src/app/store/entities/props/text/text-transform/text-transform.model';
import { WhiteSpace } from 'src/app/store/entities/props/text/white-space/white-space.model';
import { WordSpacing } from 'src/app/store/entities/props/text/word-spacing/word-spacing.model';
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

    private unsubscribe$: Subject<any>;

    nodes$: Observable<Node[]>;

    letterSpacing$: Observable<LetterSpacing[]>;
    textAlign$: Observable<TextAlign[]>;
    textIndent$: Observable<TextIndent[]>;
    textTransform$: Observable<TextTransform[]>;
    whiteSpace$: Observable<WhiteSpace[]>;
    wordSpacing$: Observable<WordSpacing[]>;

    letterSpacingValues: number[];
    textAlignValues: string[];
    textIndentValues: number[];
    textTransformValues: string[];
    whiteSpaceValues: string[];
    wordSpacingValues: (string | number)[];

    constructor(
        private store: Store<fromRoot.State>,
        private textService: TextService
    ) {
        this.unsubscribe$ = new Subject();

        this.nodes$ = this.store.pipe(
            select(fromRoot.selectAllNodes),
            takeUntil(this.unsubscribe$)
        );

        this.letterSpacing$ = this.store.pipe(
            select(fromRoot.selectAllLetterSpacings),
            takeUntil(this.unsubscribe$)
        );
            
        this.textAlign$ = this.store.pipe(
            select(fromRoot.selectAllTextAligns),
            takeUntil(this.unsubscribe$)
        );

        this.textIndent$ = this.store.pipe(
            select(fromRoot.selectAllTextIndents),
            takeUntil(this.unsubscribe$)
        );

        this.textTransform$ = this.store.pipe(
            select(fromRoot.selectAllTextTransforms),
            takeUntil(this.unsubscribe$)
        );

        this.whiteSpace$ = this.store.pipe(
            select(fromRoot.selectAllWhiteSpaces),
            takeUntil(this.unsubscribe$)
        );

        this.wordSpacing$ = this.store.pipe(
            select(fromRoot.selectAllWordSpacings),
            takeUntil(this.unsubscribe$)
        );
    }

    ngOnInit() {
        this.letterSpacing$.subscribe((letterSpacings: LetterSpacing[]) => {
            this.letterSpacingValues = letterSpacings.map((letterSpacing: LetterSpacing) => letterSpacing.value);
        });

        this.textAlign$.subscribe((textAligns: TextAlign[]) => {
            this.textAlignValues = textAligns.map((textAlign: TextAlign) => textAlign.value);
        });

        this.textIndent$.subscribe((textIndent: TextIndent[]) => {
            this.textIndentValues = textIndent.map((textIndent: TextIndent) => textIndent.value);
        });

        this.textTransform$.subscribe((textTransform: TextTransform[]) => {
            this.textTransformValues = textTransform.map((textTransform: TextTransform) => textTransform.value);
        });

        this.whiteSpace$.subscribe((whiteSpace: WhiteSpace[]) => {
            this.whiteSpaceValues = whiteSpace.map((whiteSpace: WhiteSpace) => whiteSpace.value);
        });

        this.wordSpacing$.subscribe((wordSpacing: WordSpacing[]) => {
            this.wordSpacingValues = wordSpacing.map((wordSpacing: WordSpacing) => wordSpacing.value);
        });
    }

    ngOnDestroy() {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }

    update(id: string, node: Node, type: string) {
        this.textService.updateNode(id, node, type);
    }

}
