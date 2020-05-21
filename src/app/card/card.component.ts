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
    // add next to subject
    this.cadrListService.state.next({action: 'removeCard', card: this.card});
    this.cadrListService.remove(this.card).subscribe();
  }

}
