import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-declaration',
  templateUrl: './declaration.component.html',
  styleUrls: ['./declaration.component.css']
})
export class DeclarationComponent implements OnInit {

  @Input() prop: string;
  @Input() values: string[] | number[];

  constructor() {}

  ngOnInit() {}

}
