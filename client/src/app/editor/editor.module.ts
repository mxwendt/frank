import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditorComponent } from './editor.component';
import { NodeComponent } from '../components/node/node.component';



@NgModule({
  declarations: [
    EditorComponent,
    NodeComponent
  ],
  imports: [
    CommonModule
  ]
})
export class EditorModule { }
