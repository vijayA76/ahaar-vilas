import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AlertService } from '@shared/services';
import { of } from 'rxjs';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    NgIf,
    RouterLink,
    ReactiveFormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  public loginForm: FormGroup;
  public isPasswordVisible = false; // Flag to toggle password visibility.

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private alertService: AlertService
  ) {
    // Initializes the login form with email and password fields.
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  /**
   * Handles the login process.
   * Displays a success alert and navigates to the another page upon successful login.
   */
  public handleLogin(): void {
    const msgObservable = of('Hey Buddy, You have Successfully LoggedIn'); // Assuming loadMessage is a method to load the message asynchronously
    this.alertService.showAlert(msgObservable, 'success');

    msgObservable.subscribe(() => {
      // Once the message is loaded and ready, navigate to the registration page
      this.router.navigate(['/registration']);
    });
  }
}
