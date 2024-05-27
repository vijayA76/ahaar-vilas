import { animate, style, transition, trigger } from '@angular/animations';
import { TitleCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { Alert } from '@shared/interfaces';
import { AlertService } from '@shared/services';

@Component({
  selector: 'app-alert',
  standalone: true,
  imports: [
    TitleCasePipe,    
  ],
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.scss',
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate('300ms', style({ opacity: 0 }))
      ])
    ])
  ]  
})
export class AlertComponent {

  // Default color for alerts.
  public alertColor: string = 'blue';

  // Currently displayed alert.
  public alert: Alert | null = null;

  constructor(private alertService: AlertService) {}

  /**
   * Subscribe to the alert stream from the alert service.
   * Updates the alert and sets the color based on the type.
   * Dismisses the alert after 8 seconds.
   */
  ngOnInit(): void {
    this.alertService.alert$.subscribe(alert => {
      this.alert = alert;
      if (alert) {
        this.alertColor = this.setAlertColor(alert.type);
        setTimeout(() => {
          this.dismissAlert();
        }, 8000); // Dismiss after 8 seconds
      }
    });
  }

  /**
   * Sets the color for the alert based on its type.
   * @param type The type of the alert: 'info', 'success', 'warning', or 'error'.
   * @returns The color corresponding to the alert type.
   */
  private setAlertColor(type: string): string {
    switch (type) {
      case 'info':
        return 'blue';
      case 'success':
        return 'green';
      case 'error':
        return 'red';
      case 'warning':
        return 'yellow';
      default:
        return 'blue';
    }
  }

  // Dismisses the currently displayed alert.
  public dismissAlert(): void {
    this.alertService.hideAlert();
  }

}