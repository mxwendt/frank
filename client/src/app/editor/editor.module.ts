import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditorComponent } from './editor.component';
import { NodeComponent } from '../components/node/node.component';
import { DeclarationComponent } from './components/declaration/declaration.component';



@NgModule({
  declarations: [
    EditorComponent,
    NodeComponent,
    DeclarationComponent
  ],
  imports: [
    CommonModule
  ]
})
export class EditorModule { }
