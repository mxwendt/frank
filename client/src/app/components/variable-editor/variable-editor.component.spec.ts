import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VariableEditorComponent } from './variable-editor.component';

describe('VariableEditorComponent', () => {
  let component: VariableEditorComponent;
  let fixture: ComponentFixture<VariableEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VariableEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VariableEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
