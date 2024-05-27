import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

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
  public isPasswordVisible = false;

  constructor( 
    private fb: FormBuilder , 
    private router: Router,
  ){
      this.loginForm = this.fb.group({
          email: ['', Validators.required],
          password: ['', Validators.required],
      });
  }

  public handleLogin(): void {
    console.log('submit');
  }
}
