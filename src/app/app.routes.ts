import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { StoreComponent } from './components/store/store.component';
import { Phone2aComponent } from './components/phone2a/phone2a.component';
import { Ear2Component } from './components/ear2/ear2.component';
import { Phone2aCaseComponent } from './components/phone2a-case/phone2a-case.component';
import { Phone2aProtectorComponent } from './components/phone2a-protector/phone2a-protector.component';
import { Power45WComponent } from './components/power45-w/power45-w.component';
import { CableCCComponent } from './components/cable-cc/cable-cc.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
    data: { title: 'Nothing (India)' },
  },
  {
    path: 'phone-2a',
    component: Phone2aComponent,
    data: { title: 'Nothing Phone (2a) - Nothing India' },
  },
  {
    path: 'phone-2a-case',
    component: Phone2aCaseComponent,
    data: { title: 'Nothing Phone (2a) Case' },
  },
  {
    path: 'phone-2a-screen-protector',
    component: Phone2aProtectorComponent,
    data: { title: 'Nothing Phone (2a) Screen Protector' },
  },
  {
    path: 'power-45w',
    component: Power45WComponent,
    data: { title: 'Nothing Power (45W) - Nothing India' },
  },
  {
    path: 'cable',
    component: CableCCComponent,
    data: { title: 'Nothing Cable (C-C) - Nothing India' },
  },
  {
    path: 'ear-2',
    component: Ear2Component,
    data: { title: 'Nothing Ear (a) Wireless earbuds' },
  },
  {
    path: 'store',
    component: StoreComponent,
    data: { title: 'Buy Nothing Products- Nothing India' },
  },
  {
    path: 'login',
    component: LoginComponent,
    data: { title: ' Account - Nothing India' },
  },
];
