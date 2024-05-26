import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { LoginComponent } from "./features/authentication/components/login/login.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, LoginComponent]
})
export class AppComponent implements OnInit{
  title = 'ahaar-vilas';
  ngOnInit(): void {
    initFlowbite();
  }
}
