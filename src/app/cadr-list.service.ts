import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Subject } from 'rxjs';

export interface Card {
  id?: string;
  text: string;
  state: string;
}

export interface IResponse {
  result: 'success' | 'error';
}

export interface IResponseCard extends IResponse {
  card: Card;
}

@Injectable()
export class CadrListService {

  constructor(private http: HttpClient) { }

  private endpoint = `${environment.hostName}card`;

  state = new Subject<{ action: string, card: Card }>();

  get() {
    return this.http.get<Card[]>(this.endpoint);
  }

  add(card: Card) {
    return this.http.put<IResponseCard>(this.endpoint, { text: card.text, userId: 'ivan', state: card.state });
  }

  remove(card: Card) {
    let data: any = { id: card.id };
    return this.http.request<IResponse>('delete', this.endpoint, { body: data });
  }
}
