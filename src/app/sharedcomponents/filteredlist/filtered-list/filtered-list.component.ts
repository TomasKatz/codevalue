import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IListItems} from '../../../typings';

@Component({
  selector: 'app-filtered-list',
  templateUrl: './filtered-list.component.html',
  styleUrls: ['./filtered-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilteredListComponent implements OnInit {
  @Input()dataList: IListItems[];
  @Output() deleteClick = new EventEmitter<IListItems>();
  @Output() itemClick = new EventEmitter<IListItems>();
  constructor() { }

  ngOnInit(): void {
  }
  onDeleteClick(item: IListItems): void{
    this.deleteClick.emit(item);
  }
  onItemClick(item: IListItems): void{
    this.itemClick.emit(item);
  }
}
