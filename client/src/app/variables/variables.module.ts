import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VariablesComponent } from './variables.component';
import { VariableEditorComponent } from './components/variable-editor/variable-editor.component';

@NgModule({
  declarations: [
    VariablesComponent,
    VariableEditorComponent
  ],
  imports: [
    CommonModule
  ]
})
export class VariablesModule { }
