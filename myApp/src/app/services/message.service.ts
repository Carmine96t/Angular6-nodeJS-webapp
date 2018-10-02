import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor() {}

  messages = '';

  add(message: string) {
    this.messages += message + '\n';
  }

  clear() {
    this.messages = '';
  }
}
