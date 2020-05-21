import { Component, OnInit, Input } from '@angular/core';
import { CadrListService, Card } from '../cadr-list.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor(private cadrListService: CadrListService) { }

  ngOnInit(): void {
  }

  @Input() card: Card;

  onRemove() {
    this.cadrListService.remove(this.card).subscribe(res => {
      this.cadrListService.state.next({ action: 'removeCard', card: this.card });
    });
  }

  onUpdate() {
    this.cadrListService.state.next({ action: 'selectCardToUpdate', card: this.card });
  }



}
