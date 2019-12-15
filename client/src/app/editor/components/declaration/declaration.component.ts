import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-declaration',
  templateUrl: './declaration.component.html',
  styleUrls: ['./declaration.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DeclarationComponent implements OnInit {

  @Input() prop: string;
  @Input() values: string[] | number[];

  constructor() {}

  ngOnInit() {}

}
