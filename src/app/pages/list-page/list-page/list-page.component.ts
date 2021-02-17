import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IListItems} from '../../../typings';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.scss']
})
export class ListPageComponent implements OnInit {
  @Input()listItems: IListItems[];
  currentItem: IListItems;
  constructor(private http: HttpClient) { }
  ngOnInit(): void {
    this.http.get('/assets/list.json').subscribe((response: IListItems[]) => {
      this.listItems = response;
    });
  }
  reportDelete(item: IListItems): void{}
  notifyItemClick(item: IListItems): void{
    this.currentItem = item;
  }
}
