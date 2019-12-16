import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditorComponent } from './editor.component';
import { NodeComponent } from '../components/node/node.component';
import { DeclarationComponent } from './components/declaration/declaration.component';
import { FontsEditorComponent } from './components/fonts-editor/fonts-editor.component';
import { TextEditorComponent } from './components/text-editor/text-editor.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    EditorComponent,
    NodeComponent,
    DeclarationComponent,
    FontsEditorComponent,
    TextEditorComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class EditorModule { }
