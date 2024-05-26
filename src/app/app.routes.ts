import { Routes } from '@angular/router';
import { LoginComponent } from './features/authentication/components';

export const routes: Routes = [
    { path : 'login' , component : LoginComponent },
    { path : '' , redirectTo : 'login', pathMatch : 'full' },
    // { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule), canActivate: [authGuard] },
    // { path : 'page-not-found' , component : PageNotFoundComponent },
    // { path : '**' , redirectTo : 'page-not-found' },
];
