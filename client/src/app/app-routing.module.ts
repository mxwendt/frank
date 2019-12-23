import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VariablesComponent } from './variables/variables.component';
import { EditorComponent } from './editor/editor.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FontsEditorComponent } from './editor/components/fonts-editor/fonts-editor.component';
import { TextEditorComponent } from './editor/components/text-editor/text-editor.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'variables', component: VariablesComponent },
  { path: 'editor', component: EditorComponent },
  { path: 'editor/fonts', component: FontsEditorComponent },
  { path: 'editor/text', component: TextEditorComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
