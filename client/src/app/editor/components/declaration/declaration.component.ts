import { Component, OnInit, Input, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-declaration',
  templateUrl: './declaration.component.html',
  styleUrls: ['./declaration.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DeclarationComponent implements OnInit {

  @Input() values: string[] | number[];
  @Input() initialValue: string;
  @Output() onUpdate = new EventEmitter<string>();

  editMode: boolean;
  selectedValue: string | number;

  constructor() {}
  
  ngOnInit() {
    this.editMode = false;
    this.selectedValue = this.values[this.initialValue];
  }

  toggleEditMode() {
    this.editMode = !this.editMode;
  }

  updateValue(value: string | number, index: number) {
    this.selectedValue = value;
    this.editMode = false;
    this.onUpdate.emit(index.toString());
  }

}
