import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FontsEditorComponent } from './fonts-editor.component';

describe('FontsEditorComponent', () => {
  let component: FontsEditorComponent;
  let fixture: ComponentFixture<FontsEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FontsEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FontsEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
