import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AutoLoginAllRoutesGuard } from 'angular-auth-oidc-client';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent, canActivate: [AutoLoginAllRoutesGuard] },
  {
    path: 'identity',
    loadChildren: () => import('./identity/identity.module').then((m) => m.IdentityModule),
    canLoad: [AutoLoginAllRoutesGuard],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
