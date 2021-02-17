import {ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {IListItems} from '../../typings';
import {ChangeDetectorRef} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
@Component({
  selector: 'app-editable-datapanel',
  templateUrl: './editable-datapanel.component.html',
  styleUrls: ['./editable-datapanel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditableDatapanelComponent implements OnInit, OnChanges {
  @Input()dataItem: IListItems;
  formGroup: FormGroup;
  constructor(
    private cdr: ChangeDetectorRef,
    private fb: FormBuilder
  ) { }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes.dataItem){

      this.getFormGroup();
    }
  }
  ngOnInit(): void {
    this.formGroup = this.fb.group({
      name: [''],
      description: ['']
    });
  }
  getFormGroup(): void{
    const formObj = {};
    for (const key in this.dataItem){
      if (this.dataItem[key]){
        formObj[key] = [this.dataItem[key], []];
      }
    }
    // this.formGroup = this.fb.group(formObj);
    // this.cdr.detectChanges();
  }
}
