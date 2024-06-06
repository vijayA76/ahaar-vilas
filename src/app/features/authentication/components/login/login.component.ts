import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { SweetAlertService } from '@shared/services';

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
    private alertService: SweetAlertService
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
    this.router.navigate(['/registration']);
    this.alertService.showAlertPopup({title : "Success", text:"You have successfully login", icon: "success"});
  }
}
