import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditableDatapanelComponent } from './editable-datapanel.component';

describe('EditableDatapanelComponent', () => {
  let component: EditableDatapanelComponent;
  let fixture: ComponentFixture<EditableDatapanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditableDatapanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditableDatapanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
