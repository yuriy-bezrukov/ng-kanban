import { Component, OnInit } from '@angular/core';
import { CadrListService } from './cadr-list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private cadrListService: CadrListService) {}

  title = 'kanban';
  
  ngOnInit() {
    this.refreshData();

    this.cadrListService.state.subscribe(state => {
      debugger;
    });
  }

  onAddCard(card) {
    this.data.push(card);
    // this.refreshData();
    debugger
    this.cadrListService.state.next(this.data);
  }

  data = [
    {state: 'new', name: 'fewfwef'},
    {state: 'new', name: 'dfbkm'},
    {state: 'progress', name: 'wef'},
    {state: 'progress', name: 'elr;g'},
    {state: 'progress', name: 'eklbmrepomer'},
    {state: 'done', name: 'wefwef'},
  ];

  _new = [];
  _progress = [];
  _done = [];

  refreshData() {
    this._new = this.data.filter(x => x.state === 'new');
    this._progress = this.data.filter(x => x.state === 'progress');
    this._done;

  }
}
