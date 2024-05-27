import { Injectable } from '@angular/core';
import { Alert } from '@shared/interfaces';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  // Subject for managing alert state.
  private alertSubject = new BehaviorSubject<Alert | null>(null);

  // Observable stream of alerts.
  public alert$ = this.alertSubject.asObservable();

  constructor() { }

  /**
   * Displays an alert with a given message and type.
   * @param messageObservable An Observable emitting the message content of the alert.
   * @param type The type of alert: 'info', 'success', 'warning', or 'error'.
   */
  public showAlert(messageObservable: Observable<string>, type: 'info' | 'success' | 'warning' | 'error'): void {
    messageObservable.subscribe(message => {
      const alert: Alert = { message, type };
      this.alertSubject.next(alert);
    });    
  }

  // Hides the currently displayed alert.
  public hideAlert(): void {
    this.alertSubject.next(null);
  }

}
