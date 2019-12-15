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

  editMode: boolean;
  selectedValue: string | number;

  constructor() {}
  
  ngOnInit() {
    this.editMode = false;
    this.selectedValue = this.values[0];
  }

  toggleEditMode() {
    this.editMode = !this.editMode;
  }

  updateValue(value: string | number) {
    this.selectedValue = value;
    this.editMode = false;
  }

}
