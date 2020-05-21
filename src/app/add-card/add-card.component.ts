import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CadrListService } from '../cadr-list.service';

@Component({
  selector: 'app-add-card',
  templateUrl: './add-card.component.html',
  styleUrls: ['./add-card.component.css']
})
export class AddCardComponent implements OnInit {

  title: string;
  status: string;

  constructor(private cadrListService: CadrListService) { }

  @Output() newCard = new EventEmitter();

  ngOnInit() {
    this.cadrListService.state.subscribe(x => {
      debugger
    });
  }

  onAdd() {
    let card = {
      text: this.title,
      state: this.status
    }

    this.cadrListService.state.next({action: 'addCard', card: card});

    this.cadrListService.add({
      text: this.title,
      state: this.status
    }).subscribe(res => { });
  }


}
