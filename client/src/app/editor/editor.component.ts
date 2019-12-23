import { Component, OnInit, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditorComponent implements OnInit, OnDestroy {

  selectedModuleKey: string;

  private routerParamSubscription$: Subscription;

  constructor(
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    //this.routerParamSubscription$ = this.route.paramMap.subscribe((params: ParamMap) => this.selectedModuleKey = params.get('key'));
  }

  ngOnDestroy() {
    //this.routerParamSubscription$.unsubscribe();
  }

  setModuleKey(key: string) {
    this.selectedModuleKey = key;
  }

}
