import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';

import { loadDefaultValues } from './store/actions/vars.actions';
import { Observable, Subject } from 'rxjs';
import { FontFamily } from './store/entities/font-family/font-family.model';

import * as fromRoot from './store/reducers';
import * as fromFontFamilies$ from './store/entities/font-family/font-family.reducer';
import { addFontFamily } from './store/entities/font-family/font-family.actions';
import { map, takeLast, take, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  fontFamilies$: Observable<any>;
  fontFamilyTotal$: Observable<number>;

  private fontFamilyTotal: number;
  private unsubscribe$ = new Subject();

  constructor(
    private store: Store<fromRoot.State>
  ) {
    this.store.dispatch(loadDefaultValues());
    this.fontFamilies$ = this.store.pipe(select(fromRoot.selectAllFontFamilies));
    this.fontFamilyTotal$ = this.store.pipe(
      select(fromRoot.selectFontFamilyTotal),
      takeUntil(this.unsubscribe$)
    );
  }

  ngOnInit() {
    this.fontFamilyTotal$.subscribe((total: number) => this.fontFamilyTotal = total);
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  addNewFontFamily() {
    this.store.dispatch(addFontFamily({
      fontFamily: {
        id: this.fontFamilyTotal.toString(),
        value: '"Arial"',
        defaultValue: false
      }
    }));
  }
}
