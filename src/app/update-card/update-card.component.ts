import { Component, OnInit, Input } from '@angular/core';
import { Card, CadrListService } from '../cadr-list.service';

@Component({
  selector: 'app-update-card',
  templateUrl: './update-card.component.html',
  styleUrls: ['./update-card.component.css']
})
export class UpdateCardComponent implements OnInit {

  card: Card;

  constructor(private cadrListService: CadrListService) { }

  ngOnInit(): void {
    this.cadrListService.state.subscribe(state => {
      if(state.action === 'selectCardToUpdate') {
        this.card = state.card;
      }
    })
  }

  onUpdate() {
    this.cadrListService.update(this.card).subscribe(res => {
      this.cadrListService.state.next({ action: 'updateCard', card: this.card });
    });

  }

}
