import { loadRemoteModule } from '@angular-architects/module-federation-runtime';
import { Routes } from '@angular/router';
import { AutoLoginPartialRoutesGuard } from 'angular-auth-oidc-client';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const APP_ROUTES: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },

  // Your route here:

  {
    path: 'flights',
    loadChildren: () =>
      loadRemoteModule({
        // remoteEntry: 'http://localhost:3000/remoteEntry.js',
        remoteName: 'mfe1',
        exposedModule: './Module',
      }).then((m) => m.FlightsModule),
      canLoad: [AutoLoginPartialRoutesGuard],
  },

  {
    path: 'identity',
    loadChildren: () =>
      loadRemoteModule({
        remoteName: 'mfe2',
        exposedModule: './Module',
      }).then((m) => m.IdentityModule),
      canLoad: [AutoLoginPartialRoutesGuard],
  },

  {
    path: '**',
    component: NotFoundComponent,
  },

  // DO NOT insert routes after this one.
  // { path:'**', ...} needs to be the LAST one.
];
