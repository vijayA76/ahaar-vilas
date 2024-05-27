import { Routes } from '@angular/router';
import { LoginComponent, RegistrationComponent } from './features/authentication/components';

export const routes: Routes = [
    { path : 'login' , component : LoginComponent },
    { path : '' , redirectTo : 'login', pathMatch : 'full' },
    { path : 'registration' , component : RegistrationComponent },
    // { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule), canActivate: [authGuard] },
    // { path : 'page-not-found' , component : PageNotFoundComponent },
    // { path : '**' , redirectTo : 'page-not-found' },
];
