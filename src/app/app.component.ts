import { Component, OnInit, OnDestroy } from '@angular/core';
import { CadrListService, Card } from './cadr-list.service';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  constructor(private cadrListService: CadrListService, private http: HttpClient) { }

  sub: Subscription;

  title = 'kanban';
  ngOnInit() {
    // this.cadrListService.get().subscribe(res => {
    //   this.data = res;
    //   debugger
    //   this.refreshData();
    // });
    // 2
    this.sub = this.cadrListService.state.subscribe(state => {
      debugger
      this.data.push(state.card);
      this.refreshData();
    });

    // this.cadrListService.state.subscribe(state => {
    //   debugger;
    // });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  onAddCard(card) {
    this.data.push(card);
    // this.refreshData();
    debugger
    this.cadrListService.add(card).subscribe(x => {
      debugger
    });
    //this.cadrListService.state.next(this.data);
  }

  data: Card[] = [];
  // data: {state: string, name: string}[] = [];
  // data = [
  //   {state: 'new', name: 'fewfwef'},
  //   {state: 'new', name: 'dfbkm'},
  //   {state: 'progress', name: 'wef'},
  //   {state: 'progress', name: 'elr;g'},
  //   {state: 'progress', name: 'eklbmrepomer'},
  //   {state: 'done', name: 'wefwef'},
  // ];

  _new = [];
  _progress = [];
  _done = [];

  refreshData() {
    this._new = this.data.filter(x => x.state === 'new');
    this._progress = this.data.filter(x => x.state === 'progress');
    this._done;

  }
}
