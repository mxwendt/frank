import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';

import { loadDefaultValues } from './store/actions/vars.actions';
import { Observable, Subject } from 'rxjs';
import { FontFamily } from './store/entities/font-family/font-family.model';

import * as fromRoot from './store/reducers';
import * as fromFontFamilies$ from './store/entities/font-family/font-family.reducer';
import { addFontFamily } from './store/entities/font-family/font-family.actions';
import { map, takeLast, take, takeUntil } from 'rxjs/operators';
import { FontSize } from './store/entities/font-size/font-size.model';
import { LineHeight } from './store/entities/line-height/line-height.model';
import { addFontSize } from './store/entities/font-size/font-size.actions';
import { addLineHeight } from './store/entities/line-height/line-height.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor() {}

  ngOnInit() {}
}
