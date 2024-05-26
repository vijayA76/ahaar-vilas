import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  public showPassword = false;

  public togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }
}
