import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-variables',
  templateUrl: './variables.component.html',
  styleUrls: ['./variables.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VariablesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
