import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

class Card {
  name: string;
  state: string;
}

@Injectable()
export class CadrListService {

  state = new Subject<Card[]>();
}
