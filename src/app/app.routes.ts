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
    data: { title: 'Nothing (India)' } 
  },
  {
    path: 'phone-2a',
    component: Phone2aComponent,
    data: { title: 'Nothing Phone (2a) - Nothing India' } 
  },
  {
    path: 'ear-2',
    component: Ear2Component,
    data: { title: 'Nothing Ear (a) Wireless earbuds' } 

  },
  {
    path: 'store',
    component: StoreComponent,
    data: { title: 'Buy Nothing Products- Nothing India' } 

  },
  {
    path: 'login',
    component:  LoginComponent,
    data: { title: ' Account - Nothing India' } 
},
];
