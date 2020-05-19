import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Subject } from 'rxjs';

export interface Card {
  text: string;
  state: string;
}

@Injectable()
export class CadrListService {

  constructor(private http: HttpClient) { }

  private endpoint = `${environment.hostName}card`; // localhost:3000/card
  // 1
  state = new Subject<{action: string, card: Card}>();

  get() {
    return this.http.get<Card[]>(this.endpoint);
  }

  add(card: Card) {
    return this.http.put(this.endpoint, { text: card.text, userId: 'stepan' });
  }
}
// MVC 