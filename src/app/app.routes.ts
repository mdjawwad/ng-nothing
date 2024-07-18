import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { StoreComponent } from './components/store/store.component';
import { Phone2aComponent } from './components/phone2a/phone2a.component';
import { Ear2Component } from './components/ear2/ear2.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'phone-2a',
    component: Phone2aComponent,
  },
  {
    path: 'ear-2',
    component: Ear2Component,
  },
  {
    path: 'store',
    component: StoreComponent,
  },
  {
    path: 'login',
    component:  LoginComponent,
},
];
