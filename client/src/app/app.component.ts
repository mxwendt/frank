import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';

import { loadDefaultValues } from './store/actions/vars.actions';
import { Observable } from 'rxjs';
import { FontFamily } from './store/entities/font-family/font-family.model';

import * as fromRoot from './store/reducers';
import * as fromFontFamilies$ from './store/entities/font-family/font-family.reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'client';

  fontFamilies$: Observable<any>;

  constructor(
    private store: Store<fromRoot.State>
  ) {
    this.store.dispatch(loadDefaultValues());
  }

  ngOnInit() {
    this.fontFamilies$ = this.store.pipe(select(fromRoot.selectAllFontFamilies));
  }
}
