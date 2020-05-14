import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-card',
  templateUrl: './add-card.component.html',
  styleUrls: ['./add-card.component.css']
})
export class AddCardComponent  {

  title: string;
  status: string;

  @Output() newCard = new EventEmitter();

  onAdd() {
    let card = {
      name: this.title,
      state: this.status
    };

    this.newCard.emit(card);
  }

}
