import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [CommonModule],
  // Component-level provider: creates a NEW, separate NotificationService
  // instance scoped to this component (and its children), rather than
  // reusing the app-wide singleton. Useful when isolated per-instance state
  // is needed, e.g. multiple independent notification widgets on one page.
  providers: [NotificationService],
  templateUrl: './notification.component.html',
})
export class NotificationComponent {
  constructor(public notificationService: NotificationService) {
    this.notificationService.addMessage('Welcome to the Student Course Portal!');
  }
}
