import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IListItems} from '../../../typings';

@Component({
  selector: 'app-data-list',
  templateUrl: './data-list.component.html',
  styleUrls: ['./data-list.component.scss']
})
export class DataListComponent implements OnInit {
  @Input()dataList: IListItems[];
  @Output() onDeleteClick = new EventEmitter<IListItems>();
  @Output() onHeaderClick = new EventEmitter<IListItems>();
  constructor() { }

  ngOnInit(): void {
  }
  deleteClick(listItem: IListItems): void{
    const removedItem = this.dataList.splice(
      this.dataList.findIndex((item: IListItems) => {
        if (item.id === listItem.id){
          return true;
        }else{
          return false;
        }
      }),
      1
    )[0];
    this.onDeleteClick.emit(removedItem);
  }
  headerClick(item: IListItems): void{
    this.onHeaderClick.emit(item);
  }
}
