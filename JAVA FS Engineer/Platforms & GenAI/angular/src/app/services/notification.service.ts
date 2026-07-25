import { Injectable } from '@angular/core';

// Deliberately NOT providedIn: 'root'. This service is provided at the
// component level (see NotificationComponent's `providers` array), so it is
// NOT a singleton - each component instance that provides it gets its own
// separate instance, scoped to that component and its children.
@Injectable()
export class NotificationService {
  private messages: string[] = [];

  addMessage(msg: string): void {
    this.messages.push(msg);
  }

  getMessages(): string[] {
    return this.messages;
  }
}
